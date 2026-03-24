/**
 * Team schema definitions.
 */

import type { SportId } from "./sport";

export interface Team {
  id: string;
  name: string;
  shortName?: string;
  code?: string;
  sportId: SportId;
  venueId?: string;
  foundedYear?: number;
  logo?: string;
  colors?: string[];
  metadata?: Record<string, unknown>;
}

export type TeamId = string;
