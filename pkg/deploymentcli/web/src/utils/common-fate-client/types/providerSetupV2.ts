/**
 * Generated by orval v6.10.3 🍺
 * Do not edit manually.
 * Common Fate
 * Common Fate API
 * OpenAPI spec version: 1.0
 */
import type { ProviderSetupV2Status } from './providerSetupV2Status';
import type { ProviderSetupStepOverview } from './providerSetupStepOverview';
import type { ProviderSetupV2ConfigValues } from './providerSetupV2ConfigValues';
import type { ProviderConfigValidation } from './accesshandler-openapi.yml/providerConfigValidation';

/**
 * A provider in the process of being set up through the guided setup workflow in Common Fate. These providers are **not** yet active.
 */
export interface ProviderSetupV2 {
  /** A unique ID for the provider setup. This is a random KSUID to avoid potential conflicts with user-specified provider IDs in the `deployment.yml` file. */
  id: string;
  /** The type of the Access Provider being set up. */
  team: string;
  name: string;
  /** The version of the provider. */
  version: string;
  /** The status of the setup process. */
  status: ProviderSetupV2Status;
  /** An overview of the steps indicating whether they are complete. */
  steps: ProviderSetupStepOverview[];
  /** The current configuration values. */
  configValues: ProviderSetupV2ConfigValues;
  configValidation: ProviderConfigValidation[];
}
