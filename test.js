
var sortby = sortby()

var Arr = [1, 4, 19, 7, 999, 38, 2, 5, 12, 27, 50, 100]
var sortedArr = [0, 1, 2,13, 19, 58, 99]

console.log(Arr)
console.log(sortedArr)

sortby.testFunc('test')

console.log(sortby.linearSearch(Arr, 7))
console.log(sortby.sentinelLinearSearch(Arr, 19))
console.log(sortby.binarySearch(sortedArr, 2))
