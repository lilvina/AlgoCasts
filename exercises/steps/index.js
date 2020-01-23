// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  // from 0 to n
  // create an empty string
  // from 0 to n
  // if the current column is equal to or less than the current row
  // add a # to 'stair'
  // else, add a space to 'stair'
  // console.log 'stair'

  for(let i = 0; i < n; i++) {
    let stair = ''
    for(let j = 0; j < n; j++) {
      if(stair[j] === stair[i] || stair[j] < stair[i]) {
        stair += "#"
      } else {
        stair += " "
      }
    }
    console.log(stair)
  }
}

module.exports = steps;
