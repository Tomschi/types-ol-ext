import Feature from 'ol/Feature';
import SearchJSON from './SearchJSON';
/**
 * Search places using the MediaWiki API.
 * @see https://www.mediawiki.org/wiki/API:Main_page
 *
 * @constructor
 * @extends {contrSearchJSON}
 * @fires select
 * @param {Object=} Control options.
 *  @param {string} options.className control class name
 *  @param {Element | string | undefined} options.target Specify a target if you want the control to be rendered outside of the map's viewport.
 *  @param {string | undefined} options.label Text label to use for the search button, default "search"
 *  @param {string | undefined} options.placeholder placeholder, default "Search..."
 *  @param {number | undefined} options.typing a delay on each typing to start searching (ms), default 1000.
 *  @param {number | undefined} options.minLength minimum length to start searching, default 3
 *  @param {number | undefined} options.maxItems maximum number of items to display in the autocomplete list, default 10
 *  @param {function | undefined} options.handleResponse Handle server response to pass the features array to the list
 *
 *  @param {string|undefined} options.lang API language, default none
 */
export default class SearchWikipedia extends SearchJSON {
    constructor(Control?: any);
    /** Returns the text to be displayed in the menu
    *	@param {Feature} f the feature
    *	@return {string} the text to be displayed in the index
    *	@api
     */
    getTitle(f: Feature): string;
    /** Set the current language
     * @param {string} lang the current language as ISO string (en, fr, de, es, it, ja, ...)
     */
    setLang(lang: string): void;
    /**
     * @param {string} s the search string
     * @return {Object} request data (as key:value)
     * @api
     */
    requestData(s: string): any;
    /**
     * Handle server response to pass the features array to the list
     * @param {any} response server response
     * @return {Array<any>} an array of feature
     */
    handleResponse(response: any): any[];
    /** A ligne has been clicked in the menu query for more info and disatch event
    *	@param {any} f the feature, as passed in the autocomplete
    *	@api
     */
    select(f: any): void;
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
