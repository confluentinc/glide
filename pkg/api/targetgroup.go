package api

import (
	"net/http"

	"github.com/common-fate/apikit/apio"
	"github.com/common-fate/common-fate/pkg/service/targetgroupsvc"
	"github.com/common-fate/common-fate/pkg/storage"
	"github.com/common-fate/common-fate/pkg/types"
	"github.com/common-fate/ddb"
)

// Your GET endpoint
// (GET /api/v1/target-groups)
func (a *API) AdminListTargetGroups(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()
	response := types.ListTargetGroupResponse{TargetGroups: []types.TargetGroup{}}
	q := storage.ListTargetGroups{}
	_, err := a.DB.Query(ctx, &q)
	// don't return an error response when there are not rules
	if err != nil && err != ddb.ErrNoItems {
		apio.Error(ctx, w, err)
		return
	}
	for _, tg := range q.Result {
		response.TargetGroups = append(response.TargetGroups, tg.ToAPI())
	}
	apio.JSON(ctx, w, response, http.StatusOK)
}

// (POST /api/v1/target-groups)
func (a *API) AdminCreateTargetGroup(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()
	var createGroupRequest types.CreateTargetGroupRequest
	err := apio.DecodeJSONBody(w, r, &createGroupRequest)
	if err != nil {
		apio.Error(ctx, w, err)
		return
	}
	group, err := a.TargetGroupService.CreateTargetGroup(ctx, createGroupRequest)
	if err == targetgroupsvc.ErrTargetGroupIdAlreadyExists {
		// the user supplied id already exists
		apio.Error(ctx, w, apio.NewRequestError(err, http.StatusBadRequest))
		return
	}
	if err != nil {
		apio.Error(ctx, w, err)
		return
	}
	apio.JSON(ctx, w, group.ToAPI(), http.StatusCreated)
}

// Your GET endpoint
// (GET /api/v1/target-groups/{id})
func (a *API) AdminGetTargetGroup(w http.ResponseWriter, r *http.Request, id string) {
	ctx := r.Context()
	q := storage.GetTargetGroup{ID: id}
	_, err := a.DB.Query(ctx, &q)
	if err == ddb.ErrNoItems {
		apio.Error(ctx, w, apio.NewRequestError(err, http.StatusNotFound))
		return
	}
	if err != nil {
		apio.Error(ctx, w, err)
		return
	}
	apio.JSON(ctx, w, q.Result.ToAPI(), http.StatusOK)
}

// (POST /api/v1/target-groups/{id}/link)
func (a *API) AdminCreateTargetGroupLink(w http.ResponseWriter, r *http.Request, id string) {
	ctx := r.Context()
	var linkGroupRequest types.CreateTargetGroupLink
	err := apio.DecodeJSONBody(w, r, &linkGroupRequest)
	if err != nil {
		apio.Error(ctx, w, err)
		return
	}
	targetGroup, err := a.TargetGroupService.CreateTargetGroupLink(ctx, linkGroupRequest, id)
	if err != nil {
		apio.Error(ctx, w, apio.NewRequestError(err, http.StatusBadRequest))
		return
	}
	apio.JSON(ctx, w, targetGroup.ToAPI(), http.StatusOK)

}

// Unlink a target group deployment from its target group
// (POST /api/v1/target-groups/{id}/unlink)
func (a *API) AdminRemoveTargetGroupLink(w http.ResponseWriter, r *http.Request, id string, params types.AdminRemoveTargetGroupLinkParams) {
	ctx := r.Context()
	var linkGroupRequest types.CreateTargetGroupLink
	err := apio.DecodeJSONBody(w, r, &linkGroupRequest)
	if err != nil {
		apio.Error(ctx, w, err)
		return
	}
	err = a.TargetGroupService.RemoveTargetGroupLink(ctx, linkGroupRequest.DeploymentId, id)
	if err != nil {
		apio.Error(ctx, w, err)
		return
	}
	apio.JSON(ctx, w, nil, http.StatusOK)
}
