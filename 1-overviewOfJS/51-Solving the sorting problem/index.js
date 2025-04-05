const singleNumbers = [9, 8, 7, 6, 5, 4, 3, 2, 1]

console.log('Original Array: ', singleNumbers)

console.log("sorted Array: ", singleNumbers.sort())


//----------------------------------------------------------------
const numbers = [101, 2, 98]

console.log('Original Array: ', numbers)

console.log("problem sorting Array: ", numbers.sort())


//----------------------------------------------------------------
const numbers1 = [101, 2, 98]

console.log('Original Array: ', numbers1)

console.log("solving the sorting problem Array: ", numbers1.sort((a, b) => {
   return  a - b
}))