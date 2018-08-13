const { aliquotSum , isPerfect, isAbundant, isDeficient } = require("../src/perfectNumber");

describe("aliquotSum", () => {
    test('should return the sum of the divisors of the num', () => {
        expect(aliquotSum(6)).toEqual(6);   
    });
})

describe("isPerfect", () => {
    test('should return true', () => {
        expect(isPerfect(28)).toBe(true);
    });
    test('should return false', () => {
        expect(isPerfect(7)).toBe(false);
    })
})

describe("isAbundant", () => {
    test('should return true', () => {
        expect(isAbundant(12)).toBe(true);
    });
    test('should return false', () => {
        expect(isAbundant(28)).toBe(false);
    });
})

describe("isDeficient", () => {
    test('should return true', () => {
        expect(isDeficient(15)).toBe(true);
    });
    test('should return false', () => {
        expect(isDeficient(28)).toBe(false);
    });
})