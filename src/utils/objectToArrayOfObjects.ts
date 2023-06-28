export interface OriginalObj {
  [key: string]: string;
}


export const objectToArrayOfObjects = (obj: OriginalObj) => {

  const arr = [];

  for (const [key, value] of Object.entries(obj)) {
    arr.push({ name: key, value });
  }

  return arr;
}