// A string is considered to be in title case if each word in the string is either
// (a) capitalised (that is, only the first letter of the word is in upper case)
// or (b) considered to be an exception and put entirely into lower case
// unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case,
// given an optional list of exceptions (minor words).
// The list of minor words will be given as a string with each word separated by a space.
// Your function should ignore the case of the minor words string --
// it should behave in the same way even if the case of the minor word string is changed.

// ###Arguments (Other languages)
// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that must always be lowercase
//  except for the first word in the string.
// The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.

const titleCase = (title, minorWords) => {
  // convertstring to lower case
  // split both argument to array
  const titleArray = title.toLowerCase().split(" ");

  // check if there are any minorWords
  const minorArray = minorWords === undefined ? [] : minorWords.toLowerCase().split(" ")

  // for each word in titleArr, if not found in minorArr, cap first letter
  // still cap the first character of titleArr
  const resultArray = titleArray.map(
    (word, index) =>
      index === 0 || minorArray.indexOf(word) === -1
        ? word[0].toUpperCase() + word.substr(1)
        : word
  );

  return resultArray.join(" ");
};

module.exports = titleCase;
