export const checkModes = (element: Element): string | Array<string> | boolean => {
    const textModes = ['text', 'fragment', 'paragraph', 'sentence', 'word'];

    switch (element.nodeName) {
        case 'P':
            return textModes;
        case 'IMG':
            return 'image';
        case 'VIDEO':
            return 'video';
        case 'CANVAS':
        case 'IFRAME':
            return 'other';
        case 'DIV':
            // console.log('DIV -- recursivity');
            // console.log(element.children);
            const arr = Array.from(element.children);
            let a = arr.map(el => checkModes(el));
            console.log(a);
        default:
            return false;
    }
}
