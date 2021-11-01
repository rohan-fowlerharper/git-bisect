#!/usr/bin/env node
const { binarySearch, linearSearch } = require('./lib')
const array = require('./array')

const userInput = Number(process.argv[2])

const [ value1, index1, numIterations1 ] = binarySearch(array, Number(process.argv[2]))
const [ value2, index2, numIterations2 ] = linearSearch(array, Number(process.argv[2]))

console.log(`Binary Search - Value found: ${value1} at index: ${index1}, Iterations: ${numIterations1}`)
console.log(`Linear Search - Value found: ${value2} at index: ${index1}, Iterations: ${numIterations2}`)