/**
 * Athlete and player schema definitions.
 */

import type { SportId } from "./sport";
import type { TeamId } from "./team";

export interface Athlete {
  id: string;
  firstName: string;
  lastName: string;
  displayName?: string;
  dateOfBirth?: string;
  nationality?: string;
  sportId: SportId;
  teamId?: TeamId;
  position?: string;
  jerseyNumber?: number;
  status: AthleteStatus;
  physicalAttributes?: PhysicalAttributes;
  metadata?: Record<string, unknown>;
}

export type AthleteId = string;

export type AthleteStatus = "active" | "injured" | "suspended" | "retired" | "free_agent";

export interface PhysicalAttributes {
  heightCm?: number;
  weightKg?: number;
  dominantHand?: "left" | "right" | "ambidextrous";
  dominantFoot?: "left" | "right" | "both";
}
