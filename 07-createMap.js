/*
Return an array containing the results of applying a callback to each element in an array.

Does this sound familiar? It should. Your job is basically to build the array method MAP.

Note: Do NOT use map to solve this! That's cheating!
Feel free to use any other array method if you so desire.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

Example:
// This is our callback
var addOne = (num) => {
  return num + 1;
};

myMap([1, 2, 3], addOne);
--> Returns [2, 3, 4]

*/
// Return an array containing the results of applying a callback to each element in an array.

// Does this sound familiar? It should. Your job is basically to build the array method MAP.

const myMap = (array, callback) => {
  // Create a copy of the input array
  var output = [];
  array.forEach(item => output.push(callback(item)))
  return output;
};

// Example callback function
var addOne = (num) => {
  return num + 1;
};

// Demo
console.log(myMap([1, 2, 3], addOne));
