const numberOfPassengersLeft = require("../src/numberOfPassengersLeft");

it("should return 'invalid input' if result is negative", () => {
  expect(numberOfPassengersLeft([[3,0],[3,9]])).toEqual("invalid input");
});

it("should return the correct number of passengers left if input is valid", () => {
  expect(numberOfPassengersLeft([ [10,0], [3,5], [5,8] ])).toEqual(5);
  expect(numberOfPassengersLeft([ [3,0], [9,1], [4,10], [12,2], [6,1], [7,10] ])).toEqual(17);
});
