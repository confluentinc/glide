/**
 * Generated by orval v6.9.6 🍺
 * Do not edit manually.
 * Approvals
 * Granted Approvals API
 * OpenAPI spec version: 1.0
 */
import {
  rest
} from 'msw'
import {
  faker
} from '@faker-js/faker'
import {
  RequestStatus,
  ApprovalMethod,
  AccessRuleStatus
} from '.././types'

export const getUserListRequestsUpcomingMock = () => ({requests: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.random.word(), requestor: faker.random.word(), status: faker.helpers.arrayElement(Object.values(RequestStatus)), reason: faker.helpers.arrayElement([faker.random.word(), undefined]), timing: {durationSeconds: faker.datatype.number({min: undefined, max: undefined}), startTime: faker.helpers.arrayElement([faker.random.word(), undefined])}, requestedAt: faker.random.word(), accessRuleId: faker.random.word(), accessRuleVersion: faker.random.word(), updatedAt: faker.random.word(), grant: faker.helpers.arrayElement([{status: faker.helpers.arrayElement(['PENDING','ACTIVE','ERROR','REVOKED','EXPIRED']), subject: faker.internet.email(), provider: faker.random.word(), start: faker.random.word(), end: faker.random.word()}, undefined]), approvalMethod: faker.helpers.arrayElement([faker.helpers.arrayElement(Object.values(ApprovalMethod)), undefined])})), next: faker.helpers.arrayElement([faker.random.word(), null])})

export const getUserListRequestsPastMock = () => ({requests: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.random.word(), requestor: faker.random.word(), status: faker.helpers.arrayElement(Object.values(RequestStatus)), reason: faker.helpers.arrayElement([faker.random.word(), undefined]), timing: {durationSeconds: faker.datatype.number({min: undefined, max: undefined}), startTime: faker.helpers.arrayElement([faker.random.word(), undefined])}, requestedAt: faker.random.word(), accessRuleId: faker.random.word(), accessRuleVersion: faker.random.word(), updatedAt: faker.random.word(), grant: faker.helpers.arrayElement([{status: faker.helpers.arrayElement(['PENDING','ACTIVE','ERROR','REVOKED','EXPIRED']), subject: faker.internet.email(), provider: faker.random.word(), start: faker.random.word(), end: faker.random.word()}, undefined]), approvalMethod: faker.helpers.arrayElement([faker.helpers.arrayElement(Object.values(ApprovalMethod)), undefined])})), next: faker.helpers.arrayElement([faker.random.word(), null])})

export const getAdminArchiveAccessRuleMock = () => ({id: faker.random.word(), version: faker.random.word(), status: faker.helpers.arrayElement(Object.values(AccessRuleStatus)), groups: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word())), approval: {users: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word())), groups: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word()))}, name: faker.random.word(), description: faker.random.word(), metadata: {createdAt: faker.random.word(), createdBy: faker.random.word(), updatedAt: faker.random.word(), updatedBy: faker.random.word(), updateMessage: faker.helpers.arrayElement([faker.random.word(), undefined])}, target: {provider: {id: faker.random.word(), type: faker.random.word()}, with: {
        'cla270cfi000bavwa6srhbop7': {values: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word())), groupings: {
        'cla270cfi000aavwag4ux8x53': Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word()))
      }, formElement: faker.helpers.arrayElement(['INPUT','MULTISELECT'])}
      }}, timeConstraints: {maxDurationSeconds: faker.datatype.number({min: 60, max: undefined})}, isCurrent: faker.datatype.boolean()})

export const getCreateProvidersetupMock = () => ({id: faker.random.word(), type: faker.random.word(), version: faker.random.word(), status: faker.helpers.arrayElement(['COMPLETE','VALIDATION_FAILED','VALIDATING','INITIAL_CONFIGURATION_IN_PROGRESS','VALIDATION_SUCEEDED']), steps: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({complete: faker.datatype.boolean()})), configValues: {}, configValidation: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.random.word(), name: faker.random.word(), status: faker.helpers.arrayElement(['IN_PROGRESS','SUCCESS','PENDING','ERROR']), fieldsValidated: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word())), logs: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({level: faker.helpers.arrayElement(['INFO','WARNING','ERROR']), msg: faker.random.word()}))}))})

export const getDeleteProvidersetupMock = () => ({id: faker.random.word(), type: faker.random.word(), version: faker.random.word(), status: faker.helpers.arrayElement(['COMPLETE','VALIDATION_FAILED','VALIDATING','INITIAL_CONFIGURATION_IN_PROGRESS','VALIDATION_SUCEEDED']), steps: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({complete: faker.datatype.boolean()})), configValues: {}, configValidation: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.random.word(), name: faker.random.word(), status: faker.helpers.arrayElement(['IN_PROGRESS','SUCCESS','PENDING','ERROR']), fieldsValidated: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word())), logs: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({level: faker.helpers.arrayElement(['INFO','WARNING','ERROR']), msg: faker.random.word()}))}))})

export const getAccessRuleLookupMock = () => (Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({accessRule: {id: faker.random.word(), version: faker.random.word(), name: faker.random.word(), description: faker.random.word(), target: {provider: {id: faker.random.word(), type: faker.random.word()}}, timeConstraints: {maxDurationSeconds: faker.datatype.number({min: 60, max: undefined})}, isCurrent: faker.datatype.boolean()}, selectableWithOptionValues: faker.helpers.arrayElement([Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({key: faker.random.word(), value: faker.random.word()})), undefined])})))

export const getUserListFavoritesMock = () => ({next: faker.helpers.arrayElement([faker.random.word(), null]), favorites: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.random.word(), name: faker.random.word(), ruleId: faker.random.word()}))})

export const getUserCreateFavoriteMock = () => ({id: faker.random.word(), name: faker.random.word(), with: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({
        'cla270cgk000kavwaa3z0h112': Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word()))
      })), reason: faker.helpers.arrayElement([faker.random.word(), undefined]), timing: {durationSeconds: faker.datatype.number({min: undefined, max: undefined}), startTime: faker.helpers.arrayElement([faker.random.word(), undefined])}})

export const getUserGetFavoriteMock = () => ({id: faker.random.word(), name: faker.random.word(), with: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({
        'cla270cgp000lavwa3oaphdyl': Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word()))
      })), reason: faker.helpers.arrayElement([faker.random.word(), undefined]), timing: {durationSeconds: faker.datatype.number({min: undefined, max: undefined}), startTime: faker.helpers.arrayElement([faker.random.word(), undefined])}})

export const getUpdateFavoriteMock = () => ({id: faker.random.word(), name: faker.random.word(), with: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({
        'cla270cgp000mavwahqln2n5z': Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word()))
      })), reason: faker.helpers.arrayElement([faker.random.word(), undefined]), timing: {durationSeconds: faker.datatype.number({min: undefined, max: undefined}), startTime: faker.helpers.arrayElement([faker.random.word(), undefined])}})

export const getDefaultMSW = () => [
rest.get('*/api/v1/requests/upcoming', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getUserListRequestsUpcomingMock()),
        )
      }),rest.get('*/api/v1/requests/past', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getUserListRequestsPastMock()),
        )
      }),rest.post('*/api/v1/admin/access-rules/:ruleId/archive', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getAdminArchiveAccessRuleMock()),
        )
      }),rest.post('*/api/v1/admin/providersetups', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getCreateProvidersetupMock()),
        )
      }),rest.delete('*/api/v1/admin/providersetups/:providersetupId', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getDeleteProvidersetupMock()),
        )
      }),rest.get('*/api/v1/access-rules/lookup', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getAccessRuleLookupMock()),
        )
      }),rest.get('*/api/v1/favorites', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getUserListFavoritesMock()),
        )
      }),rest.post('*/api/v1/favorites', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getUserCreateFavoriteMock()),
        )
      }),rest.get('*/api/v1/favorites/:id', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getUserGetFavoriteMock()),
        )
      }),rest.delete('*/api/v1/favorites/:id', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.put('*/api/v1/favorites/:id', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getUpdateFavoriteMock()),
        )
      }),]
