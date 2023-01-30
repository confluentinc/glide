// Code generated by MockGen. DO NOT EDIT.
// Source: github.com/common-fate/common-fate/pkg/api (interfaces: ProviderSetupService)

// Package mocks is a generated GoMock package.
package mocks

import (
	context "context"
	reflect "reflect"

	providerregistry "github.com/common-fate/common-fate/accesshandler/pkg/providerregistry"
	deploy "github.com/common-fate/common-fate/pkg/deploy"
	providersetup "github.com/common-fate/common-fate/pkg/providersetup"
	types "github.com/common-fate/common-fate/pkg/types"
	gomock "github.com/golang/mock/gomock"
)

// MockProviderSetupService is a mock of ProviderSetupService interface.
type MockProviderSetupService struct {
	ctrl     *gomock.Controller
	recorder *MockProviderSetupServiceMockRecorder
}

// MockProviderSetupServiceMockRecorder is the mock recorder for MockProviderSetupService.
type MockProviderSetupServiceMockRecorder struct {
	mock *MockProviderSetupService
}

// NewMockProviderSetupService creates a new mock instance.
func NewMockProviderSetupService(ctrl *gomock.Controller) *MockProviderSetupService {
	mock := &MockProviderSetupService{ctrl: ctrl}
	mock.recorder = &MockProviderSetupServiceMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockProviderSetupService) EXPECT() *MockProviderSetupServiceMockRecorder {
	return m.recorder
}

// CompleteStep mocks base method.
func (m *MockProviderSetupService) CompleteStep(arg0 context.Context, arg1 string, arg2 int, arg3 types.ProviderSetupStepCompleteRequest) (*providersetup.Setup, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "CompleteStep", arg0, arg1, arg2, arg3)
	ret0, _ := ret[0].(*providersetup.Setup)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// CompleteStep indicates an expected call of CompleteStep.
func (mr *MockProviderSetupServiceMockRecorder) CompleteStep(arg0, arg1, arg2, arg3 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "CompleteStep", reflect.TypeOf((*MockProviderSetupService)(nil).CompleteStep), arg0, arg1, arg2, arg3)
}

// Create mocks base method.
func (m *MockProviderSetupService) Create(arg0 context.Context, arg1 string, arg2 deploy.ProviderMap, arg3 providerregistry.ProviderRegistry) (*providersetup.Setup, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Create", arg0, arg1, arg2, arg3)
	ret0, _ := ret[0].(*providersetup.Setup)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// Create indicates an expected call of Create.
func (mr *MockProviderSetupServiceMockRecorder) Create(arg0, arg1, arg2, arg3 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Create", reflect.TypeOf((*MockProviderSetupService)(nil).Create), arg0, arg1, arg2, arg3)
}