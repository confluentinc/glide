/**
 * Generated by orval v6.10.3 🍺
 * Do not edit manually.
 * Common Fate
 * Common Fate API
 * OpenAPI spec version: 1.0
 */
import type { ReviewDecision } from './reviewDecision';
import type { RequestTiming } from './requestTiming';

export type ReviewRequestBody = {
  decision: ReviewDecision;
  comment?: string;
  overrideTiming?: RequestTiming;
};