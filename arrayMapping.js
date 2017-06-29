// array mapping exercise
var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

//added a function to `result`. 'result' maps out the keys of `input`.
// the anonymous function takes the `value` of the keys and are then returned manipulated
// the value of keys x and y are forced to be put in the power of two with `math.pow`
// they are squared with `math.sqrt, and for the results to be logged as true, are then rounded with `math.round`
var result = input.map(function(value){
  return Math.round(Math.sqrt(Math.pow(value.x,2) + Math.pow(value.y,2)));
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);