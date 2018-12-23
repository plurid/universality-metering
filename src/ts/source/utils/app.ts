import { flattenDeep } from './arrays';
import { getNodeNames } from './dom';



/**
 * const modes = ['other', 'video', 'image',
 *                'text', 'fragment', 'paragraph', 'sentence', 'word'];
 *
 * 'video' to be conflated with 'other'
 * 'fragment' may be developed at a later date
 *
 *
 * TEXT - 2
 * IMAGE - 1
 * VIDEO/CANVAS - 0
 */

export const getActiveModes = (siblings: Element[]): Array<string> => {
    const textModes = ['text', 'paragraph', 'sentence', 'word'];

    const nodeNames = new Set( flattenDeep(siblings.map(sib => getNodeNames(sib))) );

    const activeModesUnord: Array<number> = [];

    [...nodeNames].map(nodeName => {
        switch (nodeName) {
            case 'P':
                activeModesUnord.push(2);
                break;
            case 'IMG':
                activeModesUnord.push(1);
                break;
            case 'VIDEO':
            case 'CANVAS':
            case 'IFRAME':
                activeModesUnord.push(0);
                break;
            default:
                return false;
        }
    });

    const val = new Set(activeModesUnord.sort());
    const activeModes: Array<string> = [];

    [...val].map(el => {
        switch (el) {
            case 0:
                activeModes.push('other');
                break;
            case 1:
                activeModes.push('image');
                break;
            case 2:
                activeModes.push(...textModes);
                break;
        }
    });

    return activeModes;
}
