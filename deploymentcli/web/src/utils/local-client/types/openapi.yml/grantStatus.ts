/**
 * Generated by orval v6.11.1 🍺
 * Do not edit manually.
 * Example API
 * Example API
 * OpenAPI spec version: 1.0
 */

/**
 * The current state of the grant.
 */
export type GrantStatus = typeof GrantStatus[keyof typeof GrantStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GrantStatus = {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  ERROR: 'ERROR',
  REVOKED: 'REVOKED',
  EXPIRED: 'EXPIRED',
} as const;
