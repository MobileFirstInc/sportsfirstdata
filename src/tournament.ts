/**
 * Tournament and competition schema definitions.
 */

import type { SportId } from "./sport";

export interface Tournament {
  id: string;
  name: string;
  sportId: SportId;
  season?: string;
  startDate?: string;
  endDate?: string;
  format?: TournamentFormat;
  status: TournamentStatus;
  stages?: TournamentStage[];
  metadata?: Record<string, unknown>;
}

export type TournamentId = string;

export type TournamentFormat =
  | "league"
  | "knockout"
  | "group_knockout"
  | "round_robin"
  | "double_elimination"
  | "swiss";

export type TournamentStatus = "upcoming" | "in_progress" | "completed" | "cancelled";

export interface TournamentStage {
  id: string;
  name: string;
  order: number;
  format: TournamentFormat;
}

export interface Standing {
  tournamentId: TournamentId;
  teamId: string;
  rank: number;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  metadata?: Record<string, unknown>;
}
