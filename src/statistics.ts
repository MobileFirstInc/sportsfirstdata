/**
 * Statistics and analytics schema definitions.
 */

import type { AthleteId } from "./athlete";
import type { TeamId } from "./team";
import type { MatchId } from "./match";
import type { TournamentId } from "./tournament";

export interface AthleteStatistics {
  athleteId: AthleteId;
  matchId?: MatchId;
  tournamentId?: TournamentId;
  period?: string;
  stats: Record<string, number>;
}

export interface TeamStatistics {
  teamId: TeamId;
  matchId?: MatchId;
  tournamentId?: TournamentId;
  period?: string;
  stats: Record<string, number>;
}

export interface SeasonRecord {
  athleteId?: AthleteId;
  teamId?: TeamId;
  tournamentId: TournamentId;
  season: string;
  appearances: number;
  stats: Record<string, number>;
  metadata?: Record<string, unknown>;
}
