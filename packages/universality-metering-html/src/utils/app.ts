import { flattenDeep } from './arrays';
import { getNodeNames } from './dom';



/**
 * const modes = ['other', 'video', 'image',
 *                'text', 'fragment', 'paragraph', 'sentence', 'word'];
 *
 * 'video' to be conflated with 'other'
 * 'fragment' may be developed at a later date or maybe it's not needed
 * for fragmentational selection, select 'word' and hold shift and click
 * on words for multiple selection
 *
 * TEXT - 2
 * IMAGE - 1
 * VIDEO/CANVAS - 0
 */
export const getActiveSelectors = (siblings: Element[]): string[] => {
    const textSelectors = ['text', 'fragment', 'paragraph', 'sentence', 'word'];
    const nodeNames = new Set( flattenDeep(siblings.map(sib => getNodeNames(sib))) );
    const activeSelectorsUnord: number[] = [];
    const activeSelectors: string[] = [];

    [...nodeNames].map(nodeName => {
        switch (nodeName) {
            case 'P':
                activeSelectorsUnord.push(2);
                break;
            case 'IMG':
                activeSelectorsUnord.push(1);
                break;
            case 'VIDEO':
            case 'CANVAS':
            case 'IFRAME':
                activeSelectorsUnord.push(0);
                break;
            default:
                return false;
        }
    });

    const val = new Set(activeSelectorsUnord.sort());

    [...val].map(el => {
        switch (el) {
            case 0:
                activeSelectors.push('other');
                break;
            case 1:
                activeSelectors.push('image');
                break;
            case 2:
                activeSelectors.push(...textSelectors);
                break;
        }
    });

    return activeSelectors;
}
