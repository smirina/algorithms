function sortby () {

  function testFunc (input) {
    console.log(input)
  }

  function linearSearch (array, key) {
    var position = 'your element is in another array'
    for (var i = 0; i < array.length; i++) {
      if (array[i] === key) {
        position = 'linear search: position: ' + i
        break;
      }
    }
    return position
  }

  function binarySearch (array, key) {
    var position = 'your element is in another array'
    var n = array.length
    var first = 0
    var last = n
    var mid = parseInt((first+last)/2)
    while(array[mid] !== key && first < last) {
      if (key < array[mid]){
          last = mid - 1;
      } else if (key > array[mid]){
          first = mid + 1;
      }
      mid = parseInt((first+last)/2)
    }
    if (array[mid] === key) {
      position = 'binary search: position: ' + mid
    }
    return position
  }

  return {
    testFunc: testFunc,
    linearSearch: linearSearch,
    binarySearch: binarySearch
  }
}
