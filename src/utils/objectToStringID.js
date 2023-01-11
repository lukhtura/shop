//This util is making a shop ID

export const objectToStringID = (obj) => {
    let str = '';
    for (const [p, val] of Object.entries(obj)) {
        str += `-${p}-${val}`;
    };

    return str.trim().toLowerCase().replaceAll(/\s/g, '-');
};