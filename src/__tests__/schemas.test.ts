import { describe, it, expectTypeOf } from "vitest";
import type {
  Sport,
  Athlete,
  Team,
  Venue,
  Match,
  Tournament,
  Standing,
  AthleteStatistics,
  TeamStatistics,
  SeasonRecord,
  Paginated,
  ApiResponse,
  MatchEvent,
} from "../index";

describe("Sport schema", () => {
  it("should have required fields", () => {
    expectTypeOf<Sport>().toHaveProperty("id");
    expectTypeOf<Sport>().toHaveProperty("name");
    expectTypeOf<Sport>().toHaveProperty("slug");
    expectTypeOf<Sport>().toHaveProperty("teamBased");
  });
});

describe("Athlete schema", () => {
  it("should have required fields", () => {
    expectTypeOf<Athlete>().toHaveProperty("id");
    expectTypeOf<Athlete>().toHaveProperty("firstName");
    expectTypeOf<Athlete>().toHaveProperty("lastName");
    expectTypeOf<Athlete>().toHaveProperty("sportId");
    expectTypeOf<Athlete>().toHaveProperty("status");
  });

  it("should accept valid athlete objects", () => {
    const athlete: Athlete = {
      id: "ath-1",
      firstName: "Lionel",
      lastName: "Messi",
      sportId: "football",
      status: "active",
      position: "Forward",
      jerseyNumber: 10,
    };
    expectTypeOf(athlete).toMatchTypeOf<Athlete>();
  });
});

describe("Team schema", () => {
  it("should have required fields", () => {
    expectTypeOf<Team>().toHaveProperty("id");
    expectTypeOf<Team>().toHaveProperty("name");
    expectTypeOf<Team>().toHaveProperty("sportId");
  });
});

describe("Venue schema", () => {
  it("should have required fields", () => {
    expectTypeOf<Venue>().toHaveProperty("id");
    expectTypeOf<Venue>().toHaveProperty("name");
  });
});

describe("Match schema", () => {
  it("should have required fields", () => {
    expectTypeOf<Match>().toHaveProperty("id");
    expectTypeOf<Match>().toHaveProperty("sportId");
    expectTypeOf<Match>().toHaveProperty("startTime");
    expectTypeOf<Match>().toHaveProperty("status");
  });

  it("should accept valid match objects", () => {
    const match: Match = {
      id: "match-1",
      sportId: "football",
      startTime: "2025-01-15T20:00:00Z",
      status: "finished",
      homeTeamId: "team-1",
      awayTeamId: "team-2",
      score: { home: 3, away: 1 },
    };
    expectTypeOf(match).toMatchTypeOf<Match>();
  });
});

describe("MatchEvent schema", () => {
  it("should accept valid event objects", () => {
    const event: MatchEvent = {
      id: "evt-1",
      matchId: "match-1",
      type: "goal",
      minute: 23,
      athleteId: "ath-1",
      teamId: "team-1",
    };
    expectTypeOf(event).toMatchTypeOf<MatchEvent>();
  });
});

describe("Tournament schema", () => {
  it("should have required fields", () => {
    expectTypeOf<Tournament>().toHaveProperty("id");
    expectTypeOf<Tournament>().toHaveProperty("name");
    expectTypeOf<Tournament>().toHaveProperty("sportId");
    expectTypeOf<Tournament>().toHaveProperty("status");
  });
});

describe("Standing schema", () => {
  it("should accept valid standing objects", () => {
    const standing: Standing = {
      tournamentId: "tourn-1",
      teamId: "team-1",
      rank: 1,
      played: 10,
      won: 8,
      drawn: 1,
      lost: 1,
      goalsFor: 25,
      goalsAgainst: 8,
      goalDifference: 17,
      points: 25,
    };
    expectTypeOf(standing).toMatchTypeOf<Standing>();
  });
});

describe("Statistics schemas", () => {
  it("AthleteStatistics should have required fields", () => {
    expectTypeOf<AthleteStatistics>().toHaveProperty("athleteId");
    expectTypeOf<AthleteStatistics>().toHaveProperty("stats");
  });

  it("TeamStatistics should have required fields", () => {
    expectTypeOf<TeamStatistics>().toHaveProperty("teamId");
    expectTypeOf<TeamStatistics>().toHaveProperty("stats");
  });

  it("SeasonRecord should have required fields", () => {
    expectTypeOf<SeasonRecord>().toHaveProperty("tournamentId");
    expectTypeOf<SeasonRecord>().toHaveProperty("season");
    expectTypeOf<SeasonRecord>().toHaveProperty("appearances");
    expectTypeOf<SeasonRecord>().toHaveProperty("stats");
  });
});

describe("Utility types", () => {
  it("Paginated should wrap data correctly", () => {
    expectTypeOf<Paginated<Athlete>>().toHaveProperty("data");
    expectTypeOf<Paginated<Athlete>>().toHaveProperty("total");
    expectTypeOf<Paginated<Athlete>>().toHaveProperty("page");
    expectTypeOf<Paginated<Athlete>>().toHaveProperty("hasNextPage");
  });

  it("ApiResponse should wrap data correctly", () => {
    expectTypeOf<ApiResponse<Match>>().toHaveProperty("success");
    expectTypeOf<ApiResponse<Match>>().toHaveProperty("data");
    expectTypeOf<ApiResponse<Match>>().toHaveProperty("error");
  });
});
