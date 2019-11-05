// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  //use a toString method that will convert a number to a string
  //then use the split, reverse and join method to reverse the number
  return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n)
}

module.exports = reverseInt;
