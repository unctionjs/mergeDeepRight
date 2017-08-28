import mergeRight from "@unction/mergeright"
import mergeWith from "@unction/mergewith"
import isObject from "@unction/isobject"
import isArray from "@unction/isarray"

export default function mergeDeepRight (left: IterableType): Function {
  return function mergeDeepRightRight (right: IterableType): IterableType {
    if (isArray(left) && isArray(right)) {
      return mergeRight(left)(right)
    }

    if (isObject(left) && isObject(right)) {
      return mergeWith(mergeDeepRight)(left)(right)
    }

    return right
  }
}
