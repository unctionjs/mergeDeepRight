import mergeRight from "@unction/mergeright";
import mergeWith from "@unction/mergewith";
import isObject from "@unction/isobject";
import isArray from "@unction/isarray";
export default function mergeDeepRight(left) {
  return function mergeDeepRightRight(right) {
    if (isArray(left) && isArray(right)) {
      return mergeRight(left)(right);
    }

    if (isObject(left) && isObject(right)) {
      return mergeWith(mergeDeepRight)(left)(right);
    }

    return right;
  };
}
