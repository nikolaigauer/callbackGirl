var words = ["Coffee", "Tea", "sourMilk", "", "spoiledKambucha"];

function map(arrToMap, cbFunc) {
  words = arrToMap
  var resultsArr = [];
  for (var i = 0; i < arrToMap.length; i++) {
    resultsArr.push(cbFunc(arrToMap[i], i, arrToMap));
  }
  return resultsArr;

}
console.log(map)


// map(words, function(word) {
//   return word.length;
// });

// // Exercise
// // Implement your own version of the built-in array map function.

// // Yours will take in two arguments.
// // The first will be an array to map and the second will be a callback function.
// // The function will return a new array based on the results of the callback function.
// var wordList = ["apple", "banana", "cherry", "durian"];
