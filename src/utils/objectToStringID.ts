// This util makes a shop ID

// Types
import { OriginalObj } from "utils/objectToArrayOfObjects";

export const objectToStringID = (obj: OriginalObj): string => {
  let str = "";
  for (const [p, val] of Object.entries(obj)) {
    str += `-${p}-${val}`;
  }

  return str.trim().toLowerCase().replaceAll(/\s/g, "-");
}