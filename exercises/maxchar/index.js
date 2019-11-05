// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  //create an empty object to store our data
  //loop over each character of the string
  //if no character is found, set the character equal to 1
  // otherwise, character will increase
  const chars = {}
  let max = 0
  let maxCharacter = ''
  for(let char of str) {
    if(!chars[char]) {
      chars[char] = 1
    } else {
      chars[char]++
    }
  }
  for(let char in chars) {
    if(chars[char] > max) {
      max = chars[char]
      maxCharacter = char
    }
  }
  return maxCharacter
}

module.exports = maxChar;
