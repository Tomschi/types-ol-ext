import Feature from 'ol/Feature';
import SearchJSON from './SearchJSON';
import { AddressType } from './control';
import { Coordinate } from 'ol/coordinate';

export interface Options {
  className?: string;
  apiKey?: string;
  authentication?: string;
  target?: Element | string;
  label?: string;
  placeholder?: string;
  typing: number | undefined;
  minLength: number | undefined;
  maxItems: number | undefined;
  type: AddressType;
}
/**
 * Search places using the French National Base Address (BAN) API.
 *
 * @constructor
 * @extends {ol.control.SearchJSON}
 * @fires select
 * @param {any} options extend ol.control.SearchJSON options
 *	@param {string} options.className control class name
 *	@param {string | undefined} options.apiKey the service api key.
 *	@param {string | undefined} options.authentication: basic authentication for the service API as btoa("login:pwd")
 *	@param {Element | string | undefined} options.target Specify a target if you want the control to be rendered outside of the map's viewport.
 *	@param {string | undefined} options.label Text label to use for the search button, default "search"
 *	@param {boolean | undefined} options.reverse enable reverse geocoding, default false
 *	@param {string | undefined} options.placeholder placeholder, default "Search..."
 *	@param {number | undefined} options.typing a delay on each typing to start searching (ms), default 500.
 *	@param {integer | undefined} options.minLength minimum length to start searching, default 3
 *	@param {integer | undefined} options.maxItems maximum number of items to display in the autocomplete list, default 10
 *
 *	@param {StreetAddress|PositionOfInterest|CadastralParcel|Commune} options.type type of search. Using Commune will return the INSEE code, default StreetAddress,PositionOfInterest
 * @see {@link https://geoservices.ign.fr/documentation/geoservices/geocodage.html}
 */
export default class SearchGeoportail extends SearchJSON {
  constructor(options: Options);
  /** Returns the text to be displayed in the menu
   *	@param {ol.Feature} f the feature
   *	@return {string} the text to be displayed in the index
   *	@api
   */
  getTitle(f: Feature): string;
  /**
   * @param {string} s the search string
   * @return {Object} request data (as key:value)
   * @api
   */
  requestData(s: string): { [key: string]: any };
  /**
   * Handle server response to pass the features array to the display list
   * @param {any} response server response
   * @return {Array<any>} an array of feature
   * @api
   */
  handleResponse(response: any): any[];
  /** A ligne has been clicked in the menu > dispatch event
   * @param {any} f the feature, as passed in the autocomplete
   * @param {boolean} reverse true if reverse geocode
   * @param {ol.coordinate} coord
   * @param {*} options options passed to the event
   *	@api
   */
  select(f: Feature, reverse: boolean, coord: Coordinate, options?: any): void
  /** Search if no position and get the INSEE code
   * @param {string} s le nom de la commune
   */
  searchCommune(s: string): void;
  /** Autocomplete function (ajax request to the server)
  * @param {string} s search string
  * @param {function} cback a callback function that takes an array of {name, feature} to display in the autocomplete field
   */
  autocomplete(s: string, cback: (...params: any[]) => any): Array<any> | false;
  /** Send an ajax request (GET)
   * @param {string} url
   * @param {function} onsuccess callback
   * @param {function} onerror callback
   */
  ajax(url: string, onsuccess: (...params: any[]) => any, onerror: (...params: any[]) => any): void;
  /** Get the input field
  *	@return {Element}
  *	@api
   */
  getInputField(): Element;
  /** Force search to refresh
   */
  search(): void;
  /** Set the input value in the form (for initialisation purpose)
  *	@param {string} value
  *	@param {boolean} search to start a search
  *	@api
   */
  setInput(value: string, search: boolean): void;
  /** Save history (in the localstorage)
   */
  saveHistory(): void;
  /** Restore history (from the localstorage)
   */
  restoreHistory(): void;
  /**
   * Remove previous history
   */
  clearHistory(): void;
  /**
   * Get history table
   */
  getHistory(): void;
  /** Test if 2 features are equal
   * @param {any} f1
   * @param {any} f2
   * @return {boolean}
   */
  equalFeatures(f1: any, f2: any): boolean;
}
