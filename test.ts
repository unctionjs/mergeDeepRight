
import mergeDeepRight from "./index.ts";

test(() => {
  expect(mergeDeepRight({alpha: "1"})({beta: "2"})).toEqual({
    alpha: "1",
    beta: "2",
  });
});

test(() => {
  expect(mergeDeepRight({gamma: {alpha: "1"}})({gamma: {beta: "2"}})).toEqual({
    gamma: {
      alpha: "1",
      beta: "2",
    },
  });
});

test(() => {
  expect(mergeDeepRight({alpha: {alpha: "1"}})({beta: {beta: "2"}})).toEqual({
    alpha: {alpha: "1"},
    beta: {beta: "2"},
  });
});

test(() => {
  expect(mergeDeepRight({alpha: {alpha: "1"}})({alpha: {alpha: "2"}})).toEqual({alpha: {alpha: "2"}});
});

test(() => {
  expect(mergeDeepRight(["a"])(["b"])).toEqual([
    "a",
    "b",
  ]);
});

test(() => {
  expect(mergeDeepRight(["a"])(["a"])).toEqual([
    "a",
    "a",
  ]);
});

test(() => {
  expect(mergeDeepRight({alpha: ["a"]})({alpha: ["a"]})).toEqual({
    alpha: [
      "a",
      "a",
    ],
  });
});
