import { Interaction } from 'ol/interaction';

export interface Options {
    handleLongTouchEvent: ((...params: any[]) => any) | undefined;
    delay: number | undefined;
}
/** Interaction to handle longtouch events
 * @constructor
 * @extends {Interaction}
 * @param {olx.interaction.LongTouchOptions}
 * 	@param {function | undefined} options.handleLongTouchEvent Function handling "longtouch" events, it will receive a mapBrowserEvent.
 *	@param {interger | undefined} options.delay The delay for a long touch in ms, default is 1000
 */
export default class LongTouch extends Interaction {
    constructor(options: Options);
}
