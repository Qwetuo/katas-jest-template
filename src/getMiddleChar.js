const getMiddleCharacter = string => {
    const length = string.length;
    const middle = length / 2;
    const isOdd = length % 2 === 1;
  
    console.log(middle+1)
    return string.substring(isOdd ? middle : middle - 1, middle + 1);
  };
  
  module.exports = getMiddleCharacter;