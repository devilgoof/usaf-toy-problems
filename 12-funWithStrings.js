// Given 3 words, return the sum of their lengths.
// getLengthOfThreeWords('some', 'other', 'words');
// --> 14

const getLengthOfThreeWords = (string1, string2, string3) => {
  return string1.length + string2.length + string3.length 
};


// Given a word, return an array containing every character in the word.
// getAllLetters('Radagast');
// --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']

const getAllLetters = (string) => {
  return string.split('');
};


// Given a sentence, return an array containing every word in the sentence.
// getAllWords('Radagast the Brown');
// --> ['Radagast', 'the', 'Brown']

const getAllWords = (string) => {
  return string.trim().split(" ")
};


// Given an array, return the longest string in the given array.
// Note: If there are ties, return the first element to appear.
// getLongestElement(['one', 'two', 'three']);
// --> 'three'

var length = 0
var longest;
const getLongestElement = (array) => {
  for(var i=0; i < array.length; i++){
    if(array[i].length > length){
    var length = array[i].length;
    longest = array[i];
    }
  }
};


/*
  Given an array of elements of mixed data types, return the shortest string within the given array.

  Notes:
  If there are ties, it should return the first element to appear in the given array.
  Expect the given array to have values other than strings.
  If the given array is empty, it should return an empty string.
  If the given array contains no strings, it should return an empty string.

  findShortestWord([4, 'two', 2, 'three']);
  --> 'two'
*/

const findShortestWord = (array) => {
  // your code here
};
