export const flattenDeep = (arr: any) => {
    return arr.reduce(
        (acc: any, val: any) => Array.isArray(val) ?
            acc.concat(flattenDeep(val)) : acc.concat(val), []
    );
}
