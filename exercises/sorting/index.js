// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  // return arr.sort((a, b) => {
  //   return a - b
  // })
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < (arr.length - i - 1); j++) {
      if(arr[j] > arr[j+1]) {
        const temp = arr[j+1]
        arr[j+1] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

function selectionSort(arr) {
  //make a for loop
  // assume the element 'i' is the least in the array assign i to 'indexOfMin'
  // make another for loop and set j from i + 1 to end of array
  // see if there is an element with lower value
  // if there is, record its index
  // if the index of the current element and the index of the lowest element is not the same, swap them

  for(let i = 0; i < arr.length; i++) {
    let indexOfMin = i

    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[indexOfMin]) {
        indexOfMin = j
      }
    }
    if( indexOfMin !== i) {
      let lesser = arr[indexOfMin]
      arr[indexOfMin] = arr[i]
      arr[i] = lesser
    }
  }
  return arr
}

function mergeSort(arr) {
  if(arr.length === 1) {
    return arr
  }

  const center = Math.floor(arr.length / 2)
  const left = arr.slice(0, center)

  const right = arr.slice(center)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  // create results array
  // make a while loop to check to see if there are still elements in both arrays
  // if the first element the left half is less than first in right half
  // shift the element from left into a result arr
  // else, shift the element from right into a result arr
  // take everything from the array that still has stuff in it and put it in results

  const results = []
  while(left.length && right.length) {
    if(left[0] < right[0]) {
      results.push(left.shift())
    } else {
      results.push(right.shift())
    }
  }
  return [...results, ...left, ...right]
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
