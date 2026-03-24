/**
 * Common utility types and helpers.
 */

export interface Paginated<T> {
  data: T[];
  total: number;
  page: number;
  perPage: number;
  hasNextPage: boolean;
}

export interface TimestampedEntity {
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ApiError;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

export type SortDirection = "asc" | "desc";

export interface SortOption {
  field: string;
  direction: SortDirection;
}

export interface DateRange {
  from: string;
  to: string;
}
