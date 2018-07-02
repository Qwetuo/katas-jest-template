const splitTheBill = require("../src/splitTheBill");

it("should tell the amount each person should receive after spiltting their total bill", () => {
  expect(splitTheBill({A: 20, B: 15, C: 10})).toEqual({A: 5, B: 0, C: -5});
  expect(splitTheBill({A: 40, B: 25, C: 10})).toEqual({A: 15, B: 0, C: -15});
  expect(splitTheBill({P1: 40, P2: 25, P3: 10, P4: 20, P5: 5})).toEqual({P1: 20, P2: 5, P3: -10, P4: 0, P5: -15});
});

it("should split bills with decimal values", () => {
  expect(splitTheBill({A: 20.4, B: 15.5, C: 10.6})).toEqual({A: 4.9, B: 0, C: -4.9});
  expect(splitTheBill({'Person 1': 40.1, 'Person 2': 25.3, 'Person 3': 10.9})).toEqual({'Person 1': 14.67, 'Person 2': -0.13, 'Person 3': -14.53});
});