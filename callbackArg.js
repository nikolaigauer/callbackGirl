
function findWaldo(arr, found) {
 // index = arr[i]   <----------------------------- I thought I needed to declare a variable called index, but this was not needed
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
       found(i);   // execute callback
    }
  }
}
function actionWhenFound(index) {             // modified the function to take the index, it is still a mystery to me where/how the index number is coming from
  console.log("Found him!");
  console.log("Found Waldo at index " + index + "!") // added a new concole.log to print
};



findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
/*
assignment:
Did you know that we can pass results via callback functions?

Modify the callback function in the previous example so that logs the index of the array where Waldo is found, ie. "Found Waldo at index 2!". (You will need to modify actionWhenFound to receive the index.)
Once you have this working, remember to commit your changes using Git. A good commit message should be concise and descriptive of the changes you have made. An example commit message: Print the index of Waldo when found.
*/