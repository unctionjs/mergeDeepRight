
import mergeDeepRight from "./index";

test("works", () => {
  expect(mergeDeepRight({alpha: "1"})({beta: "2"})).toEqual({
    alpha: "1",
    beta: "2",
  });
});

test("works", () => {
  expect(mergeDeepRight({gamma: {alpha: "1"}})({gamma: {beta: "2"}})).toEqual({
    gamma: {
      alpha: "1",
      beta: "2",
    },
  });
});

test("works", () => {
  expect(mergeDeepRight({alpha: {alpha: "1"}})({beta: {beta: "2"}})).toEqual({
    alpha: {alpha: "1"},
    beta: {beta: "2"},
  });
});

test("works", () => {
  expect(mergeDeepRight({alpha: {alpha: "1"}})({alpha: {alpha: "2"}})).toEqual({alpha: {alpha: "2"}});
});

test("works", () => {
  expect(mergeDeepRight(["a"])(["b"])).toEqual([
    "a",
    "b",
  ]);
});

test("works", () => {
  expect(mergeDeepRight(["a"])(["a"])).toEqual([
    "a",
    "a",
  ]);
});

test("works", () => {
  expect(mergeDeepRight({alpha: ["a"]})({alpha: ["a"]})).toEqual({
    alpha: [
      "a",
      "a",
    ],
  });
});
