/**
 * sports-schema — TypeScript schema definitions for sports data.
 *
 * @packageDocumentation
 */

export type { Sport, SportId } from "./sport";

export type {
  Athlete,
  AthleteId,
  AthleteStatus,
  PhysicalAttributes,
} from "./athlete";

export type { Team, TeamId } from "./team";

export type { Venue, VenueId, GeoCoordinates } from "./venue";

export type {
  Match,
  MatchId,
  MatchStatus,
  Score,
  Period,
  MatchEvent,
  MatchEventType,
} from "./match";

export type {
  Tournament,
  TournamentId,
  TournamentFormat,
  TournamentStatus,
  TournamentStage,
  Standing,
} from "./tournament";

export type {
  AthleteStatistics,
  TeamStatistics,
  SeasonRecord,
} from "./statistics";

export type {
  Paginated,
  TimestampedEntity,
  ApiResponse,
  ApiError,
  SortDirection,
  SortOption,
  DateRange,
} from "./common";
