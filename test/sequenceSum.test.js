const sequenceSum = require("../src/sequenceSum");

it("should return 0 if begin value is greater than the end", () => {
  expect(sequenceSum(2,1,1)).toEqual(0);
});

it("should return begin value if step === end", () => {
  expect(sequenceSum(2,2,2)).toEqual(2);
});

it("should return sum of sequence otherwise?", () => {
    expect(sequenceSum(2,6,2)).toEqual(12);
    expect(sequenceSum(1,5,1)).toEqual(15);
  });