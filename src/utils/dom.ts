export const getAllSiblings = (element: Element) => {
    const parent: Element = element.parentElement;
    const children: Element[] = Array.from(parent.children);
    return children.filter(child => child !== element);
}


export const getNodeNames = (element: Element): any => {
    if (element.nodeName === 'DIV') {
        return Array.from(element.children)
             .map(child => getNodeNames(child));
    }

    return element.nodeName;
}
