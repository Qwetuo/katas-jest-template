// Find the most frequent element or elements in the list.
// find_most_frequent([1, 1, 2, 3]) == set([1])
// find_most_frequent([1, 1, 2, 2, 3]) == set([1, 2])
// find_most_frequent([1, 1, '2', '2', 3]) == set([1, '2'])

const findMostFrequent = array => {
  // Get array of unique elements
  const uniqueArr = array.reduce((accArr, curr) => {
    return accArr === curr ? accArr : [...accArr, curr];
  }, []);

  // For each unique elements, run filter on original array to get a list of sub arrays,
  // each containing only its own element (eg. [1, 1], [2], [3])
  let consolArr = [];
  uniqueArr.forEach(value => {
    let matchedItems = array.filter(item => item === value);
    // add each of these arrays to consolidated array (array of subarrays)
    consolArr.push(matchedItems);
  });

  // Find highest frequency number
  let maxFreq = consolArr.reduce((max, subArray) => {
    return subArray.length > max ? subArray.length : max;
  }, 0);

  let answer = new Set();
  // Loop through consolidated array again, this time only retrieving the subarrays whose
  // length is == maxFreq
  consolArr.forEach(subArr => {
    subArr.length === maxFreq ? answer.add(subArr[0]) : null;
  });

  return answer;
};

module.exports = findMostFrequent;
