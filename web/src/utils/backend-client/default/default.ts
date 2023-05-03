/**
 * Generated by orval v6.10.3 🍺
 * Do not edit manually.
 * Common Fate
 * Common Fate API
 * OpenAPI spec version: 1.0
 */
import useSwr from 'swr'
import type {
  SWRConfiguration,
  Key
} from 'swr'
import type {
  ErrorResponseResponse,
  ListTargetGroupRoutesResponse,
  ListEntitlementsResponseResponse,
  ListTargetsResponseResponse,
  UserListEntitlementTargetsParams,
  Preflight,
  CreatePreflightRequestBody,
  ListRequestsResponseResponse,
  UserListReviewsParams,
  RequestAccessGroupTargetStatus,
  UserListRequestsParams,
  Request,
  CreateAccessRequestRequestBody
} from '.././types'
import { customInstance } from '../../custom-instance'
import type { ErrorType } from '../../custom-instance'


  
  // eslint-disable-next-line
  type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

/**
 * @summary Delete Access Rule
 */
export const adminDeleteAccessRule = (
    ruleId: string,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<void>(
      {url: `/api/v1/admin/access-rules/${ruleId}`, method: 'delete'
    },
      options);
    }
  

/**
 * Lists all routes for a given Target Group
 */
export const adminListTargetRoutes = (
    id: string,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<ListTargetGroupRoutesResponse>(
      {url: `/api/v1/admin/target-groups/${id}/routes`, method: 'get'
    },
      options);
    }
  

export const getAdminListTargetRoutesKey = (id: string,) => [`/api/v1/admin/target-groups/${id}/routes`];

    
export type AdminListTargetRoutesQueryResult = NonNullable<Awaited<ReturnType<typeof adminListTargetRoutes>>>
export type AdminListTargetRoutesQueryError = ErrorType<ErrorResponseResponse>

export const useAdminListTargetRoutes = <TError = ErrorType<ErrorResponseResponse>>(
 id: string, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof adminListTargetRoutes>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false && !!(id)
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getAdminListTargetRoutesKey(id) : null);
  const swrFn = () => adminListTargetRoutes(id, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * List all entitlement kinds configured in Common Fate.
These are derived from the Target Groups.
 * @summary List Entitlements
 */
export const userListEntitlements = (
    
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<ListEntitlementsResponseResponse>(
      {url: `/api/v1/entitlements`, method: 'get'
    },
      options);
    }
  

export const getUserListEntitlementsKey = () => [`/api/v1/entitlements`];

    
export type UserListEntitlementsQueryResult = NonNullable<Awaited<ReturnType<typeof userListEntitlements>>>
export type UserListEntitlementsQueryError = ErrorType<ErrorResponseResponse>

export const useUserListEntitlements = <TError = ErrorType<ErrorResponseResponse>>(
  options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof userListEntitlements>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getUserListEntitlementsKey() : null);
  const swrFn = () => userListEntitlements(requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * List all targets that the user has access to
 * @summary List Entitlement Resources
 */
export const userListEntitlementTargets = (
    params?: UserListEntitlementTargetsParams,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<ListTargetsResponseResponse>(
      {url: `/api/v1/entitlements/targets`, method: 'get',
        params
    },
      options);
    }
  

export const getUserListEntitlementTargetsKey = (params?: UserListEntitlementTargetsParams,) => [`/api/v1/entitlements/targets`, ...(params ? [params]: [])];

    
export type UserListEntitlementTargetsQueryResult = NonNullable<Awaited<ReturnType<typeof userListEntitlementTargets>>>
export type UserListEntitlementTargetsQueryError = ErrorType<ErrorResponseResponse>

export const useUserListEntitlementTargets = <TError = ErrorType<ErrorResponseResponse>>(
 params?: UserListEntitlementTargetsParams, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof userListEntitlementTargets>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getUserListEntitlementTargetsKey(params) : null);
  const swrFn = () => userListEntitlementTargets(params, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Verify and validate a collection of request items
 * @summary Submit Preflight
 */
export const userRequestPreflight = (
    createPreflightRequestBody: CreatePreflightRequestBody,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<Preflight>(
      {url: `/api/v1/preflight`, method: 'post',
      headers: {'Content-Type': 'application/json', },
      data: createPreflightRequestBody
    },
      options);
    }
  

/**
 * @summary Get Preflight
 */
export const userGetPreflight = (
    preflightId: string,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<Preflight>(
      {url: `/api/v1/preflight/${preflightId}`, method: 'get'
    },
      options);
    }
  

export const getUserGetPreflightKey = (preflightId: string,) => [`/api/v1/preflight/${preflightId}`];

    
export type UserGetPreflightQueryResult = NonNullable<Awaited<ReturnType<typeof userGetPreflight>>>
export type UserGetPreflightQueryError = ErrorType<ErrorResponseResponse>

export const useUserGetPreflight = <TError = ErrorType<ErrorResponseResponse>>(
 preflightId: string, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof userGetPreflight>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false && !!(preflightId)
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getUserGetPreflightKey(preflightId) : null);
  const swrFn = () => userGetPreflight(preflightId, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Lists requests where the user is a reviewer
 * @summary List Reviews
 */
export const userListReviews = (
    params?: UserListReviewsParams,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<ListRequestsResponseResponse>(
      {url: `/api/v1/reviews`, method: 'get',
        params
    },
      options);
    }
  

export const getUserListReviewsKey = (params?: UserListReviewsParams,) => [`/api/v1/reviews`, ...(params ? [params]: [])];

    
export type UserListReviewsQueryResult = NonNullable<Awaited<ReturnType<typeof userListReviews>>>
export type UserListReviewsQueryError = ErrorType<ErrorResponseResponse>

export const useUserListReviews = <TError = ErrorType<ErrorResponseResponse>>(
 params?: UserListReviewsParams, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof userListReviews>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getUserListReviewsKey(params) : null);
  const swrFn = () => userListReviews(params, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Gets grant status for a specific group target if available 
 * @summary Get Group Target
 */
export const getGroupTargetStatus = (
    requestid: string,
    groupid: string,
    targetid: string,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<RequestAccessGroupTargetStatus>(
      {url: `/api/v1/requests/${requestid}/groups/${groupid}/target/${targetid}/status`, method: 'get'
    },
      options);
    }
  

export const getGetGroupTargetStatusKey = (requestid: string,
    groupid: string,
    targetid: string,) => [`/api/v1/requests/${requestid}/groups/${groupid}/target/${targetid}/status`];

    
export type GetGroupTargetStatusQueryResult = NonNullable<Awaited<ReturnType<typeof getGroupTargetStatus>>>
export type GetGroupTargetStatusQueryError = ErrorType<ErrorResponseResponse>

export const useGetGroupTargetStatus = <TError = ErrorType<ErrorResponseResponse>>(
 requestid: string,
    groupid: string,
    targetid: string, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof getGroupTargetStatus>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false && !!(requestid && groupid && targetid)
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getGetGroupTargetStatusKey(requestid,groupid,targetid) : null);
  const swrFn = () => getGroupTargetStatus(requestid,groupid,targetid, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Lists a users own requests
 * @summary List Requests
 */
export const userListRequests = (
    params?: UserListRequestsParams,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<ListRequestsResponseResponse>(
      {url: `/api/v1/requests`, method: 'get',
        params
    },
      options);
    }
  

export const getUserListRequestsKey = (params?: UserListRequestsParams,) => [`/api/v1/requests`, ...(params ? [params]: [])];

    
export type UserListRequestsQueryResult = NonNullable<Awaited<ReturnType<typeof userListRequests>>>
export type UserListRequestsQueryError = ErrorType<ErrorResponseResponse>

export const useUserListRequests = <TError = ErrorType<ErrorResponseResponse>>(
 params?: UserListRequestsParams, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof userListRequests>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getUserListRequestsKey(params) : null);
  const swrFn = () => userListRequests(params, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * Initiates the granting process for a group of requests
 */
export const userPostRequests = (
    createAccessRequestRequestBody: CreateAccessRequestRequestBody,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<Request>(
      {url: `/api/v1/requests`, method: 'post',
      headers: {'Content-Type': 'application/json', },
      data: createAccessRequestRequestBody
    },
      options);
    }
  

/**
 * Gets information for a request
 * @summary Get Request
 */
export const userGetRequest = (
    requestId: string,
 options?: SecondParameter<typeof customInstance>) => {
      return customInstance<Request>(
      {url: `/api/v1/requests/${requestId}`, method: 'get'
    },
      options);
    }
  

export const getUserGetRequestKey = (requestId: string,) => [`/api/v1/requests/${requestId}`];

    
export type UserGetRequestQueryResult = NonNullable<Awaited<ReturnType<typeof userGetRequest>>>
export type UserGetRequestQueryError = ErrorType<ErrorResponseResponse>

export const useUserGetRequest = <TError = ErrorType<ErrorResponseResponse>>(
 requestId: string, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof userGetRequest>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }

  ) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false && !!(requestId)
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getUserGetRequestKey(requestId) : null);
  const swrFn = () => userGetRequest(requestId, requestOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

