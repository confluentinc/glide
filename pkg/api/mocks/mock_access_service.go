// Code generated by MockGen. DO NOT EDIT.
// Source: github.com/common-fate/granted-approvals/pkg/api (interfaces: AccessService)

// Package mocks is a generated GoMock package.
package mocks

import (
	context "context"
	reflect "reflect"

	access "github.com/common-fate/granted-approvals/pkg/access"
	accesssvc "github.com/common-fate/granted-approvals/pkg/service/accesssvc"
	gomock "github.com/golang/mock/gomock"
)

// MockAccessService is a mock of AccessService interface.
type MockAccessService struct {
	ctrl     *gomock.Controller
	recorder *MockAccessServiceMockRecorder
}

// MockAccessServiceMockRecorder is the mock recorder for MockAccessService.
type MockAccessServiceMockRecorder struct {
	mock *MockAccessService
}

// NewMockAccessService creates a new mock instance.
func NewMockAccessService(ctrl *gomock.Controller) *MockAccessService {
	mock := &MockAccessService{ctrl: ctrl}
	mock.recorder = &MockAccessServiceMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockAccessService) EXPECT() *MockAccessServiceMockRecorder {
	return m.recorder
}

// AddReviewAndGrantAccess mocks base method.
func (m *MockAccessService) AddReviewAndGrantAccess(arg0 context.Context, arg1 accesssvc.AddReviewOpts) (*accesssvc.AddReviewResult, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "AddReviewAndGrantAccess", arg0, arg1)
	ret0, _ := ret[0].(*accesssvc.AddReviewResult)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// AddReviewAndGrantAccess indicates an expected call of AddReviewAndGrantAccess.
func (mr *MockAccessServiceMockRecorder) AddReviewAndGrantAccess(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "AddReviewAndGrantAccess", reflect.TypeOf((*MockAccessService)(nil).AddReviewAndGrantAccess), arg0, arg1)
}

// CancelRequest mocks base method.
func (m *MockAccessService) CancelRequest(arg0 context.Context, arg1 accesssvc.CancelRequestOpts) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "CancelRequest", arg0, arg1)
	ret0, _ := ret[0].(error)
	return ret0
}

// CancelRequest indicates an expected call of CancelRequest.
func (mr *MockAccessServiceMockRecorder) CancelRequest(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "CancelRequest", reflect.TypeOf((*MockAccessService)(nil).CancelRequest), arg0, arg1)
}

// CreateFavorite mocks base method.
func (m *MockAccessService) CreateFavorite(arg0 context.Context, arg1 accesssvc.CreateFavoriteOpts) (*access.Favorite, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "CreateFavorite", arg0, arg1)
	ret0, _ := ret[0].(*access.Favorite)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// CreateFavorite indicates an expected call of CreateFavorite.
func (mr *MockAccessServiceMockRecorder) CreateFavorite(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "CreateFavorite", reflect.TypeOf((*MockAccessService)(nil).CreateFavorite), arg0, arg1)
}

// CreateRequests mocks base method.
func (m *MockAccessService) CreateRequests(arg0 context.Context, arg1 accesssvc.CreateRequestsOpts) ([]accesssvc.CreateRequestResult, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "CreateRequests", arg0, arg1)
	ret0, _ := ret[0].([]accesssvc.CreateRequestResult)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// CreateRequests indicates an expected call of CreateRequests.
func (mr *MockAccessServiceMockRecorder) CreateRequests(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "CreateRequests", reflect.TypeOf((*MockAccessService)(nil).CreateRequests), arg0, arg1)
}

// UpdateFavorite mocks base method.
func (m *MockAccessService) UpdateFavorite(arg0 context.Context, arg1 accesssvc.UpdateFavoriteOpts) (*access.Favorite, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "UpdateFavorite", arg0, arg1)
	ret0, _ := ret[0].(*access.Favorite)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// UpdateFavorite indicates an expected call of UpdateFavorite.
func (mr *MockAccessServiceMockRecorder) UpdateFavorite(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "UpdateFavorite", reflect.TypeOf((*MockAccessService)(nil).UpdateFavorite), arg0, arg1)
}
