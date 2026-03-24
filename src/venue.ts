/**
 * Venue and stadium schema definitions.
 */

export interface Venue {
  id: string;
  name: string;
  city?: string;
  country?: string;
  capacity?: number;
  surface?: string;
  coordinates?: GeoCoordinates;
  timezone?: string;
  metadata?: Record<string, unknown>;
}

export type VenueId = string;

export interface GeoCoordinates {
  latitude: number;
  longitude: number;
}
