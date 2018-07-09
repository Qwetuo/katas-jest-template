const findMostFrequent = require("../src/findMostFrequent");

it("should return correct element with the highest frequency", () => {
  expect(findMostFrequent([1, 1, 2, 3])).toEqual(new Set([1]));
});

it("should return correct elements when there are multiple element types with the same max frequency", () => {
  let input1 = findMostFrequent([1, 1, 2, 2, 3, 3, 4, 5, 6]);
  let input2 = findMostFrequent([1, 1, "2", "2", 3]);
  let input3 = findMostFrequent([1, 1, "1", "1", 3]);
  expect(input1).toEqual(new Set([1, 2, 3]));
  expect(input2).toEqual(new Set([1, "2"]));
  expect(input3).toEqual(new Set([1, "1"]));
});
