/**
 * Generated by orval v6.10.3 🍺
 * Do not edit manually.
 * Common Fate
 * Common Fate API
 * OpenAPI spec version: 1.0
 */
import {
  rest
} from 'msw'
import {
  faker
} from '@faker-js/faker'
import {
  LogLevel,
  RequestAccessGroupStatus,
  RequestAccessGroupTargetStatus,
  RequestAccessGroupApprovalMethod,
  RequestStatus
} from '.././types'

export const getAdminFilterTargetGroupResourcesMock = () => (Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({targetGroupId: faker.random.word(), resourceType: faker.random.word(), resource: {id: faker.random.word(), name: faker.random.word(), attributes: {}}})))

export const getAdminListTargetRoutesMock = () => ({routes: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({targetGroupId: faker.random.word(), handlerId: faker.random.word(), kind: faker.random.word(), priority: faker.datatype.number({min: undefined, max: undefined}), valid: faker.datatype.boolean(), diagnostics: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({level: faker.helpers.arrayElement(Object.values(LogLevel)), code: faker.random.word(), message: faker.random.word()}))})), next: faker.helpers.arrayElement([faker.random.word(), undefined])})

export const getUserListEntitlementsMock = () => ({entitlements: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({publisher: faker.random.word(), name: faker.random.word(), kind: faker.random.word(), icon: faker.random.word()}))})

export const getUserListEntitlementTargetsMock = () => ({targets: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.random.word(), kind: {publisher: faker.random.word(), name: faker.random.word(), kind: faker.random.word(), icon: faker.random.word()}, fields: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.random.word(), fieldTitle: faker.random.word(), fieldDescription: faker.helpers.arrayElement([faker.random.word(), undefined]), valueLabel: faker.random.word(), valueDescription: faker.helpers.arrayElement([faker.random.word(), undefined]), value: faker.random.word()}))})), next: faker.helpers.arrayElement([faker.random.word(), undefined])})

export const getUserRequestPreflightMock = () => ({id: faker.random.word(), accessGroups: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.random.word(), requiresApproval: faker.datatype.boolean(), timeConstraints: {maxDurationSeconds: faker.datatype.number({min: 60, max: 15724800})}, targets: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.random.word(), kind: {publisher: faker.random.word(), name: faker.random.word(), kind: faker.random.word(), icon: faker.random.word()}, fields: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.random.word(), fieldTitle: faker.random.word(), fieldDescription: faker.helpers.arrayElement([faker.random.word(), undefined]), valueLabel: faker.random.word(), valueDescription: faker.helpers.arrayElement([faker.random.word(), undefined]), value: faker.random.word()}))}))})), createdAt: faker.random.word()})

export const getUserGetPreflightMock = () => ({id: faker.random.word(), accessGroups: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.random.word(), requiresApproval: faker.datatype.boolean(), timeConstraints: {maxDurationSeconds: faker.datatype.number({min: 60, max: 15724800})}, targets: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.random.word(), kind: {publisher: faker.random.word(), name: faker.random.word(), kind: faker.random.word(), icon: faker.random.word()}, fields: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.random.word(), fieldTitle: faker.random.word(), fieldDescription: faker.helpers.arrayElement([faker.random.word(), undefined]), valueLabel: faker.random.word(), valueDescription: faker.helpers.arrayElement([faker.random.word(), undefined]), value: faker.random.word()}))}))})), createdAt: faker.random.word()})

export const getUserListReviewsMock = () => ({requests: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.random.word(), purpose: {reason: faker.helpers.arrayElement([faker.random.word(), undefined])}, accessGroups: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.random.word(), requestId: faker.random.word(), status: faker.helpers.arrayElement(Object.values(RequestAccessGroupStatus)), requestedTiming: {durationSeconds: faker.datatype.number({min: undefined, max: undefined}), startTime: faker.helpers.arrayElement([faker.random.word(), undefined])}, overrideTiming: faker.helpers.arrayElement([{durationSeconds: faker.datatype.number({min: undefined, max: undefined}), startTime: faker.helpers.arrayElement([faker.random.word(), undefined])}, undefined]), updatedAt: faker.random.word(), createdAt: faker.random.word(), requestedBy: {id: faker.random.word(), firstName: faker.random.word(), lastName: faker.random.word(), email: faker.random.word(), picture: faker.helpers.arrayElement([faker.random.word(), undefined])}, targets: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.random.word(), requestId: faker.random.word(), accessGroupId: faker.random.word(), targetGroupId: faker.random.word(), targetKind: {publisher: faker.random.word(), name: faker.random.word(), kind: faker.random.word(), icon: faker.random.word()}, fields: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.random.word(), fieldTitle: faker.random.word(), fieldDescription: faker.helpers.arrayElement([faker.random.word(), undefined]), valueLabel: faker.random.word(), valueDescription: faker.helpers.arrayElement([faker.random.word(), undefined]), value: faker.random.word()})), status: faker.helpers.arrayElement(Object.values(RequestAccessGroupTargetStatus)), requestedBy: {id: faker.random.word(), firstName: faker.random.word(), lastName: faker.random.word(), email: faker.random.word(), picture: faker.helpers.arrayElement([faker.random.word(), undefined])}})), approvalMethod: faker.helpers.arrayElement([faker.helpers.arrayElement(Object.values(RequestAccessGroupApprovalMethod)), undefined]), accessRule: {timeConstraints: {maxDurationSeconds: faker.datatype.number({min: 60, max: 15724800})}}, requestStatus: faker.helpers.arrayElement(Object.values(RequestStatus))})), requestedBy: {id: faker.random.word(), firstName: faker.random.word(), lastName: faker.random.word(), email: faker.random.word(), picture: faker.helpers.arrayElement([faker.random.word(), undefined])}, requestedAt: faker.random.word(), status: faker.helpers.arrayElement(Object.values(RequestStatus))})), next: faker.helpers.arrayElement([faker.random.word(), null])})

export const getGetGroupTargetStatusMock = () => (faker.helpers.arrayElement(['PENDING_PROVISIONING','AWAITING_START','ACTIVE','ERROR','REVOKED','EXPIRED']))

export const getUserListRequestsMock = () => ({requests: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.random.word(), purpose: {reason: faker.helpers.arrayElement([faker.random.word(), undefined])}, accessGroups: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.random.word(), requestId: faker.random.word(), status: faker.helpers.arrayElement(Object.values(RequestAccessGroupStatus)), requestedTiming: {durationSeconds: faker.datatype.number({min: undefined, max: undefined}), startTime: faker.helpers.arrayElement([faker.random.word(), undefined])}, overrideTiming: faker.helpers.arrayElement([{durationSeconds: faker.datatype.number({min: undefined, max: undefined}), startTime: faker.helpers.arrayElement([faker.random.word(), undefined])}, undefined]), updatedAt: faker.random.word(), createdAt: faker.random.word(), requestedBy: {id: faker.random.word(), firstName: faker.random.word(), lastName: faker.random.word(), email: faker.random.word(), picture: faker.helpers.arrayElement([faker.random.word(), undefined])}, targets: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.random.word(), requestId: faker.random.word(), accessGroupId: faker.random.word(), targetGroupId: faker.random.word(), targetKind: {publisher: faker.random.word(), name: faker.random.word(), kind: faker.random.word(), icon: faker.random.word()}, fields: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.random.word(), fieldTitle: faker.random.word(), fieldDescription: faker.helpers.arrayElement([faker.random.word(), undefined]), valueLabel: faker.random.word(), valueDescription: faker.helpers.arrayElement([faker.random.word(), undefined]), value: faker.random.word()})), status: faker.helpers.arrayElement(Object.values(RequestAccessGroupTargetStatus)), requestedBy: {id: faker.random.word(), firstName: faker.random.word(), lastName: faker.random.word(), email: faker.random.word(), picture: faker.helpers.arrayElement([faker.random.word(), undefined])}})), approvalMethod: faker.helpers.arrayElement([faker.helpers.arrayElement(Object.values(RequestAccessGroupApprovalMethod)), undefined]), accessRule: {timeConstraints: {maxDurationSeconds: faker.datatype.number({min: 60, max: 15724800})}}, requestStatus: faker.helpers.arrayElement(Object.values(RequestStatus))})), requestedBy: {id: faker.random.word(), firstName: faker.random.word(), lastName: faker.random.word(), email: faker.random.word(), picture: faker.helpers.arrayElement([faker.random.word(), undefined])}, requestedAt: faker.random.word(), status: faker.helpers.arrayElement(Object.values(RequestStatus))})), next: faker.helpers.arrayElement([faker.random.word(), null])})

export const getUserPostRequestsMock = () => ({id: faker.random.word(), purpose: {reason: faker.helpers.arrayElement([faker.random.word(), undefined])}, accessGroups: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.random.word(), requestId: faker.random.word(), status: faker.helpers.arrayElement(Object.values(RequestAccessGroupStatus)), requestedTiming: {durationSeconds: faker.datatype.number({min: undefined, max: undefined}), startTime: faker.helpers.arrayElement([faker.random.word(), undefined])}, overrideTiming: faker.helpers.arrayElement([{durationSeconds: faker.datatype.number({min: undefined, max: undefined}), startTime: faker.helpers.arrayElement([faker.random.word(), undefined])}, undefined]), updatedAt: faker.random.word(), createdAt: faker.random.word(), requestedBy: {id: faker.random.word(), firstName: faker.random.word(), lastName: faker.random.word(), email: faker.random.word(), picture: faker.helpers.arrayElement([faker.random.word(), undefined])}, targets: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.random.word(), requestId: faker.random.word(), accessGroupId: faker.random.word(), targetGroupId: faker.random.word(), targetKind: {publisher: faker.random.word(), name: faker.random.word(), kind: faker.random.word(), icon: faker.random.word()}, fields: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.random.word(), fieldTitle: faker.random.word(), fieldDescription: faker.helpers.arrayElement([faker.random.word(), undefined]), valueLabel: faker.random.word(), valueDescription: faker.helpers.arrayElement([faker.random.word(), undefined]), value: faker.random.word()})), status: faker.helpers.arrayElement(Object.values(RequestAccessGroupTargetStatus)), requestedBy: {id: faker.random.word(), firstName: faker.random.word(), lastName: faker.random.word(), email: faker.random.word(), picture: faker.helpers.arrayElement([faker.random.word(), undefined])}})), approvalMethod: faker.helpers.arrayElement([faker.helpers.arrayElement(Object.values(RequestAccessGroupApprovalMethod)), undefined]), accessRule: {timeConstraints: {maxDurationSeconds: faker.datatype.number({min: 60, max: 15724800})}}, requestStatus: faker.helpers.arrayElement(Object.values(RequestStatus))})), requestedBy: {id: faker.random.word(), firstName: faker.random.word(), lastName: faker.random.word(), email: faker.random.word(), picture: faker.helpers.arrayElement([faker.random.word(), undefined])}, requestedAt: faker.random.word(), status: faker.helpers.arrayElement(Object.values(RequestStatus))})

export const getUserGetRequestMock = () => ({id: faker.random.word(), purpose: {reason: faker.helpers.arrayElement([faker.random.word(), undefined])}, accessGroups: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.random.word(), requestId: faker.random.word(), status: faker.helpers.arrayElement(Object.values(RequestAccessGroupStatus)), requestedTiming: {durationSeconds: faker.datatype.number({min: undefined, max: undefined}), startTime: faker.helpers.arrayElement([faker.random.word(), undefined])}, overrideTiming: faker.helpers.arrayElement([{durationSeconds: faker.datatype.number({min: undefined, max: undefined}), startTime: faker.helpers.arrayElement([faker.random.word(), undefined])}, undefined]), updatedAt: faker.random.word(), createdAt: faker.random.word(), requestedBy: {id: faker.random.word(), firstName: faker.random.word(), lastName: faker.random.word(), email: faker.random.word(), picture: faker.helpers.arrayElement([faker.random.word(), undefined])}, targets: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.random.word(), requestId: faker.random.word(), accessGroupId: faker.random.word(), targetGroupId: faker.random.word(), targetKind: {publisher: faker.random.word(), name: faker.random.word(), kind: faker.random.word(), icon: faker.random.word()}, fields: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.random.word(), fieldTitle: faker.random.word(), fieldDescription: faker.helpers.arrayElement([faker.random.word(), undefined]), valueLabel: faker.random.word(), valueDescription: faker.helpers.arrayElement([faker.random.word(), undefined]), value: faker.random.word()})), status: faker.helpers.arrayElement(Object.values(RequestAccessGroupTargetStatus)), requestedBy: {id: faker.random.word(), firstName: faker.random.word(), lastName: faker.random.word(), email: faker.random.word(), picture: faker.helpers.arrayElement([faker.random.word(), undefined])}})), approvalMethod: faker.helpers.arrayElement([faker.helpers.arrayElement(Object.values(RequestAccessGroupApprovalMethod)), undefined]), accessRule: {timeConstraints: {maxDurationSeconds: faker.datatype.number({min: 60, max: 15724800})}}, requestStatus: faker.helpers.arrayElement(Object.values(RequestStatus))})), requestedBy: {id: faker.random.word(), firstName: faker.random.word(), lastName: faker.random.word(), email: faker.random.word(), picture: faker.helpers.arrayElement([faker.random.word(), undefined])}, requestedAt: faker.random.word(), status: faker.helpers.arrayElement(Object.values(RequestStatus))})

export const getDefaultMSW = () => [
rest.delete('*/api/v1/admin/access-rules/:ruleId', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.post('*/api/v1/admin/target-groups/:id/resources/:resourceType/filters', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getAdminFilterTargetGroupResourcesMock()),
        )
      }),rest.get('*/api/v1/admin/target-groups/:id/routes', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getAdminListTargetRoutesMock()),
        )
      }),rest.get('*/api/v1/entitlements', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getUserListEntitlementsMock()),
        )
      }),rest.get('*/api/v1/entitlements/targets', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getUserListEntitlementTargetsMock()),
        )
      }),rest.post('*/api/v1/preflight', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getUserRequestPreflightMock()),
        )
      }),rest.get('*/api/v1/preflight/:preflightId', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getUserGetPreflightMock()),
        )
      }),rest.get('*/api/v1/reviews', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getUserListReviewsMock()),
        )
      }),rest.get('*/api/v1/requests/:requestid/groups/:groupid/target/:targetid/status', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetGroupTargetStatusMock()),
        )
      }),rest.get('*/api/v1/requests', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getUserListRequestsMock()),
        )
      }),rest.post('*/api/v1/requests', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getUserPostRequestsMock()),
        )
      }),rest.get('*/api/v1/requests/:requestId', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getUserGetRequestMock()),
        )
      }),]
