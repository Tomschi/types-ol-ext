import { Coordinate } from 'ol/coordinate';

/** Compute great circle bearing of two points.
 * @See http://www.movable-type.co.uk/scripts/latlong.html for the original code
 * @param {ol.coordinate} origin origin in lonlat
 * @param {ol.coordinate} destination destination in lonlat
 * @return {number} bearing angle in radian
 */
export function greatCircleBearing(origin: Coordinate, destination: Coordinate): number;

export interface ComputeDestinationPointOptions {
  /** normalize longitude beetween -180/180, deafulet true */
  normalize?: boolean;
  /** sphere radius, default 6371008.8 */
  radius?: number;
}

/** 
 * Computes the destination point given an initial point, a distance and a bearing
 * @See http://www.movable-type.co.uk/scripts/latlong.html for the original code
 * @param {ol.coordinate} origin stating point in lonlat coords
 * @param {number} distance
 * @param {number} bearing bearing angle in radian
 * @param {*} options
 *  @param {boolean} normalize normalize longitude beetween -180/180, deafulet true
 *  @param {number|undefined} options.radius sphere radius, default 6371008.8
 */
export function computeDestinationPoint(origin: Coordinate, distance: number, bearing: number, options?: ComputeDestinationPointOptions): [number, number];

export interface GreatCircleTrackOptions {
  /** distance between point along the track in meter, default 1km (1000) */
  distance?: number;
  /** sphere radius, default 6371008.8 */
  radius?: number;
}

/** Calculate a track along the great circle given an origin and a destination
 * @param {ol.coordinate} origin origin in lonlat
 * @param {ol.coordinate} destination destination in lonlat
 * @param {number} distance distance between point along the track in meter, default 1km (1000)
 * @param {number|undefined} radius sphere radius, default 6371008.8
 * @return {Array<ol.coordinate>}
 */
export function greatCircleTrack(origin: Coordinate, destination: Coordinate, options?: GreatCircleTrackOptions): Coordinate[];
