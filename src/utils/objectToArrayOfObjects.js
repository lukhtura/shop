export const objectToArrayOfObjects = (obj) => {
    const arr = [];
    for (const [key, value] of Object.entries(obj)) {
        arr.push({ name: key, value });
    };
    return arr;
};