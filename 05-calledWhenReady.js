/*
Write a function that takes the number of times the callback needs to be called before
being executed as the first parameter and the callback function as the second parameter

Example:

// This is our callback function, it just logs hello
var called = function() {
	console.log('hello');
};

// We're storing our function in a variable here...hm....is this a hint?
// What might this mean our function is returning?
var afterCalled = calledWhenReady(3, called);

afterCalled(); // -> nothing is printed
afterCalled(); // -> nothing is printed
afterCalled(); // -> 'hello' is printed
*/

function calledWhenReady(timesBefore, callback) {
  // YOUR CODE HERE
};
