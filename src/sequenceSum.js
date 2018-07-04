// Your task is to make function, which returns the sum of a sequence of integers.
// The sequence is defined by 3 non-negative values: begin, end, step.
// If begin value is greater than the end, function should returns 0

const sequenceSum = (begin, end, step) => {
  if (begin > end) return 0
  var result = begin
  for (let inc = begin + step; inc <= end; inc+=step){
  result += inc
  }
  return result
};

module.exports = sequenceSum;