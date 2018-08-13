// https://github.com/thoughtworks-jumpstart/morning-katas/blob/master/katas/perfectNumbers.md

const aliquotSum = num => {
    const numberArray = Array.from({ length: num - 1 }, (v, i) => i + 1);
  
    return numberArray.reduce((accumulator, number) => {
      return num % number === 0 ? accumulator + number : accumulator;
    });
  };
  
  const isPerfect = num => {
    return aliquotSum(num) === num;
  };
  
  const isAbundant = num => {
    return aliquotSum(num) > num;
  };
  
  const isDeficient = num => {
    return aliquotSum(num) < num;
  };
  
  module.exports = {
    aliquotSum,
    isPerfect,
    isAbundant,
    isDeficient
  };