/**
 * Match and game schema definitions.
 */

import type { SportId } from "./sport";
import type { TeamId } from "./team";
import type { VenueId } from "./venue";
import type { TournamentId } from "./tournament";
import type { AthleteId } from "./athlete";

export interface Match {
  id: string;
  sportId: SportId;
  tournamentId?: TournamentId;
  venueId?: VenueId;
  homeTeamId?: TeamId;
  awayTeamId?: TeamId;
  startTime: string;
  endTime?: string;
  status: MatchStatus;
  score?: Score;
  periods?: Period[];
  events?: MatchEvent[];
  metadata?: Record<string, unknown>;
}

export type MatchId = string;

export type MatchStatus =
  | "scheduled"
  | "live"
  | "halftime"
  | "finished"
  | "postponed"
  | "cancelled"
  | "suspended";

export interface Score {
  home: number;
  away: number;
  detail?: string;
}

export interface Period {
  number: number;
  type: string;
  homeScore: number;
  awayScore: number;
  startTime?: string;
  endTime?: string;
}

export interface MatchEvent {
  id: string;
  matchId: MatchId;
  type: MatchEventType;
  minute?: number;
  athleteId?: AthleteId;
  teamId?: TeamId;
  description?: string;
  metadata?: Record<string, unknown>;
}

export type MatchEventType =
  | "goal"
  | "assist"
  | "yellow_card"
  | "red_card"
  | "substitution"
  | "penalty"
  | "own_goal"
  | "injury"
  | "var_decision"
  | "timeout"
  | "foul"
  | "custom";
