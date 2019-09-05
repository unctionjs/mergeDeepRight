import mergeRight from "@unction/mergeright";
import mergeWith from "@unction/mergewith";
import isObject from "@unction/isobject";
import isArray from "@unction/isarray";
import {EnumerableType} from "./types";

export default function mergeDeepRight<A> (left: EnumerableType<A>) {
  return function mergeDeepRightRight (right: EnumerableType<A>): EnumerableType<A> {
    if (isArray(left) && isArray(right)) {
      return mergeRight(left)(right);
    }

    if (isObject(left) && isObject(right)) {
      return mergeWith(mergeDeepRight)(left)(right);
    }

    return right;
  };
}
