// Code generated by MockGen. DO NOT EDIT.
// Source: github.com/common-fate/common-fate/pkg/service/accesssvc (interfaces: CacheService)

// Package mocks is a generated GoMock package.
package mocks

import (
	context "context"
	reflect "reflect"

	cache "github.com/common-fate/common-fate/pkg/cache"
	gomock "github.com/golang/mock/gomock"
)

// MockCacheService is a mock of CacheService interface.
type MockCacheService struct {
	ctrl     *gomock.Controller
	recorder *MockCacheServiceMockRecorder
}

// MockCacheServiceMockRecorder is the mock recorder for MockCacheService.
type MockCacheServiceMockRecorder struct {
	mock *MockCacheService
}

// NewMockCacheService creates a new mock instance.
func NewMockCacheService(ctrl *gomock.Controller) *MockCacheService {
	mock := &MockCacheService{ctrl: ctrl}
	mock.recorder = &MockCacheServiceMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockCacheService) EXPECT() *MockCacheServiceMockRecorder {
	return m.recorder
}

// LoadCachedProviderArgOptions mocks base method.
func (m *MockCacheService) LoadCachedProviderArgOptions(arg0 context.Context, arg1, arg2 string) (bool, []cache.ProviderOption, []cache.ProviderArgGroupOption, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "LoadCachedProviderArgOptions", arg0, arg1, arg2)
	ret0, _ := ret[0].(bool)
	ret1, _ := ret[1].([]cache.ProviderOption)
	ret2, _ := ret[2].([]cache.ProviderArgGroupOption)
	ret3, _ := ret[3].(error)
	return ret0, ret1, ret2, ret3
}

// LoadCachedProviderArgOptions indicates an expected call of LoadCachedProviderArgOptions.
func (mr *MockCacheServiceMockRecorder) LoadCachedProviderArgOptions(arg0, arg1, arg2 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "LoadCachedProviderArgOptions", reflect.TypeOf((*MockCacheService)(nil).LoadCachedProviderArgOptions), arg0, arg1, arg2)
}

// RefreshCachedProviderArgOptions mocks base method.
func (m *MockCacheService) RefreshCachedProviderArgOptions(arg0 context.Context, arg1, arg2 string) (bool, []cache.ProviderOption, []cache.ProviderArgGroupOption, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "RefreshCachedProviderArgOptions", arg0, arg1, arg2)
	ret0, _ := ret[0].(bool)
	ret1, _ := ret[1].([]cache.ProviderOption)
	ret2, _ := ret[2].([]cache.ProviderArgGroupOption)
	ret3, _ := ret[3].(error)
	return ret0, ret1, ret2, ret3
}

// RefreshCachedProviderArgOptions indicates an expected call of RefreshCachedProviderArgOptions.
func (mr *MockCacheServiceMockRecorder) RefreshCachedProviderArgOptions(arg0, arg1, arg2 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "RefreshCachedProviderArgOptions", reflect.TypeOf((*MockCacheService)(nil).RefreshCachedProviderArgOptions), arg0, arg1, arg2)
}