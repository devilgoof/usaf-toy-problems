/*
`solutionReturningFunction` currently returns an array of elements, but only some of them will be defined at runtime.
 Remove elements from the returned array that are undefined when outerFunction is invoked.

 Do NOT modify this file except for removing elements from the
 array `solutionReturningFunction` returns.

 You won't be able to solve this by simply copying and pasting this into the console!
 You will need to examine the variables and functions that are being referenced and invoked!

 If you need a refresher on scopes:
 https://css-tricks.com/javascript-scope-closures/
 https://medium.com/@ashcoca/scopes-in-javascript-a-simple-and-visual-explanation-1427a55c29fa
 */

var outerFunction = function() {
  var eight = function eight(eight) {
    return 'eight';
  }(); // <-- What are these parenthesis doing??

  var aFunction = function () {
    var one = 'one';

    var anInnerFunction = function () {
      var two = 'two';
      return one;
    };

    return anInnerFunction;
  };

  var anotherFunction = function () {
    var three = 'three';

    var anotherInnerFunction = function () {
      var four = 'four';
      return four;
    };

    var yetAnotherInnerFunction = function () {
      return four;
    };

    return yetAnotherInnerFunction;
  };

  var five = 'five';

  var solutionReturningFunction = function () {
    var six = aFunction();
    var seven = anotherFunction();

    // Remove elements from this array that are undefined when outerFunction is invoked
    return [one, two, three, four, five, six(), seven(), eight];
  };



  var solution = solutionReturningFunction();

  return solution;
};
