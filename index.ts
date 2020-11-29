import mergeRight from "@unction/mergeright";
import mergeWith from "@unction/mergewith";
import isObject from "@unction/isobject";
import isArray from "@unction/isarray";

export default function mergeDeepRight<A> (left: Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string) {
  return function mergeDeepRightRight (right: Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string): Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string {
    if (isArray(left) && isArray(right)) {
      return mergeRight(left)(right);
    }

    if (isObject(left) && isObject(right)) {
      return mergeWith(mergeDeepRight)(left)(right);
    }

    return right;
  };
}
