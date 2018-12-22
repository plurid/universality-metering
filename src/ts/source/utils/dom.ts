export const getAllSiblings = (element: Element) => {
    const parent: Element = element.parentElement;
    const children: Element[] = Array.from(parent.children);
    return children.filter(child => child !== element);
}
