
// Below is the original for loop which has been refactored into a forEach function

// function findWaldo(arr, found) {
//  // index = arr[i]                     <----------------------------- I thought I needed to declare a variable called index, but this was not needed
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {
//        found(i);                                       // execute callback, added the i (index number?)
//     }
//   }
// }

var findWaldo = function(arr, found) {                  // refactored the above for loop to a forEach funciton
  arr.forEach(function(name, index) {
    if (name === "Waldo") {                           // when the `name` "Waldo" is found, execute the `found` function which calls the `actionWhenFound` function
      found(index);
    }

  });
}

function actionWhenFound(index) {             // modified the function to take the index, it is still a mystery to me where/how the index number is coming from
  console.log("Found him!");
  console.log("Found Waldo at index " + index + "!"); // added a new concole.log to print
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound); //




