const getMiddleCharacter = require("../src/getMiddleChar");

test("should return 1 characters if length of string is odd", () => {
  const result = getMiddleCharacter("testing");
  expect(result).toBe("t");
});

test("should return 2 characters if length of string is even", () => {
  expect(getMiddleCharacter("test")).toEqual("es");
});
