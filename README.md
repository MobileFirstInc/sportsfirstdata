# sports-schema

TypeScript schema definitions for sports data — athletes, matches, tournaments, teams, and analytics.

Part of **SportsFirstData** — The Open-Source Sports Data Engine.

## Install

```bash
npm install sports-schema
```

## Usage

```typescript
import type { Athlete, Match, Tournament, Standing } from "sports-schema";

const athlete: Athlete = {
  id: "ath-1",
  firstName: "Lionel",
  lastName: "Messi",
  sportId: "football",
  status: "active",
  position: "Forward",
  jerseyNumber: 10,
};

const match: Match = {
  id: "match-1",
  sportId: "football",
  startTime: "2025-01-15T20:00:00Z",
  status: "finished",
  homeTeamId: "team-1",
  awayTeamId: "team-2",
  score: { home: 3, away: 1 },
};
```

## Schemas

| Schema | Description |
|---|---|
| `Sport` | Sport definition (name, positions, scoring) |
| `Athlete` | Player profile, status, physical attributes |
| `Team` | Team identity and metadata |
| `Venue` | Stadium/arena with capacity and geo coordinates |
| `Match` | Game with score, periods, and events |
| `MatchEvent` | In-game events (goals, cards, substitutions) |
| `Tournament` | Competition with stages and format |
| `Standing` | League table entry with points and record |
| `AthleteStatistics` | Per-player stats for a match or tournament |
| `TeamStatistics` | Per-team stats for a match or tournament |
| `SeasonRecord` | Aggregated season performance |

### Utility Types

- `Paginated<T>` — Paginated response wrapper
- `ApiResponse<T>` — Standard API response with error handling
- `DateRange` — Date range filter
- `SortOption` — Sort field and direction

## Development

```bash
npm install
npm run build
npm test
```

## License

MIT
