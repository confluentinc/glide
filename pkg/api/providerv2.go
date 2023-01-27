package api

import (
	"net/http"

	"github.com/common-fate/apikit/apio"
	"github.com/common-fate/common-fate/pkg/types"
)

// List providers2
// (GET /api/v1/admin/providersv2)
func (a *API) AdminListProvidersv2(w http.ResponseWriter, r *http.Request) {

}

// (POST /api/v1/admin/providersv2)
func (a *API) AdminCreateProviderv2(w http.ResponseWriter, r *http.Request) {

	ctx := r.Context()

	var updateRequest types.CreateProviderRequest
	err := apio.DecodeJSONBody(w, r, &updateRequest)
	if err != nil {
		apio.Error(ctx, w, apio.NewRequestError(err, http.StatusBadRequest))
		return
	}
	providerRes, err := a.ProviderService.Create(ctx, updateRequest)
	if err != nil {
		apio.Error(ctx, w, apio.NewRequestError(err, http.StatusBadRequest))
		return
	}

	apio.JSON(ctx, w, providerRes, http.StatusCreated)

}

// Get provider detailed
// (GET /api/v1/admin/providersv2/{providerId})
func (a *API) AdminGetProviderv2(w http.ResponseWriter, r *http.Request, providerId string) {

}
