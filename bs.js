const array = require('./array')

function createLargeSortedArray (length = 1000) {
  return Array.from(Array(length)).map(() => Math.floor(Math.random() * 10000)).sort((a, b) => a - b)
}

function binarySearch (array, value) {
  let numIterations = 0
  let low = 0, high = array.length - 1

  while (low <= high) {
    numIterations++
    let mid = Math.floor((low + high) / 2)

    if (array[mid] === value) return [array[mid], numIterations]
    else if (array[mid] < value) low = mid + 1 
    else high = mid -1
  }

  return [-1, numIterations]
}

function linearSearch (array, value) {
  let numIterations = 0

  for (let i = 0; i < array.length; i++) {
    numIterations++

    if (array[i] === value) {
      return [array[i], numIterations]
    }
  }

  return [-1, numIterations]
}

const [ value1, numIterations1 ] = binarySearch(array, 5784)
const [ value2, numIterations2 ] = linearSearch(array, 5784)

console.log(`Binary Search - Value found: ${value1} Iterations: ${numIterations1}`)
console.log(`Linear Search - Value found: ${value2} Iterations: ${numIterations2}`)