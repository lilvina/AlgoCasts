// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  //create empty array of arrays called 'results'
  // create a counter variable, starting at 1
  // as long as (start column <= end column) and (start row <= end row)
  // loop from start column to end column
  // at results[start row][i] assign counter variable
  //increment counter
  // increment start row
  // loop from start row to end row
  // at results[i][end column] assign counter variable
  // decrement end row
  // repeat for other two sides
  const results = []

  for(let i = 0; i < n; i++){
    results.push([])
  }
  let counter = 1
  let startColumn = 0
  let endColumn = n - 1
  let startRow = 0
  let endRow = n - 1

  while(startColumn <= endColumn && startRow <= endRow) {
    //top row
    for(let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter
      counter++
    }
    startRow++
    // right column
    for(let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter
      counter++
    }
    endColumn--

    // bottom row
    for(let i = endColumn; i >= startColumn; i--){
      results[endRow][i] = counter
      counter++
    }
    endRow--

    //start column
    for(let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter
      counter++
    }
    startColumn++
  }
  return results
}

module.exports = matrix;
