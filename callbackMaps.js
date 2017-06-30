var words = ["wurd", "WOOOORDS", "WORDS", "weeerd", "Wordy"]; // this is the array I want to map

function map(arrToMap, cbFunc) {                          // created the function `map` with the two arguments called for in the assignment
  var resultsArr = [];                                   // created and empty array to push the results of the function `cbFunc`
  for (var i = 0; i < arrToMap.length; i++) {           // this for loop runs for the length of the array input
    resultsArr.push(cbFunc(arrToMap[i], i, arrToMap));  // this is somewhat mysterious to me, but I know that `.push` is pushing the counting results of the function `cbFunc`
  }
  return resultsArr;                                     // this stops the function
}

// below I am declaring the variable `answer` to hold the return of the function map,
// the array `words` have been plotted in to be manipulated in the `map` function
var answer = map(words, function(word) {
  return word.length;                   // this counts the characters of the individual words
})

console.log(answer) // prints the answer to the assignment to the terminal





// // Exercise
// // Implement your own version of the built-in array map function.

// // Yours will take in two arguments.
// // The first will be an array to map and the second will be a callback function.
// // The function will return a new array based on the results of the callback function.
// var wordList = ["apple", "banana", "cherry", "durian"];
