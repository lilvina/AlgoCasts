// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //use a reverse method that will reverse the string
  //use a split method that will split each string into an array
  //use a join method that will join the string together
  // const reversed = str.split("").reverse().join("")
  // return reversed

  //second step
  //create empty string
  //for each character in the string, take the character and add it to the start of the reversed
  //return the variable reversed
  // let reversed = ''
  // for(let char of str) {
  //   reversed = char + reversed
  // }
  // return reversed

  //third step
  return str.split('').reduce((reversed, char) => {
    return char + reversed
  }, '')
}

module.exports = reverse;
