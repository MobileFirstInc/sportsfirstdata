/**
 * Core sport type definitions.
 */

export interface Sport {
  id: string;
  name: string;
  slug: string;
  teamBased: boolean;
  playerPositions?: string[];
  scoringSystem?: string;
  metadata?: Record<string, unknown>;
}

export type SportId = string;
