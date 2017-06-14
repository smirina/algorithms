function sortby () {

  function testFunc (input) {
    console.log(input)
  }

  function linearSearch (array, key) {
    var position = 'your element is in another array'

    for (var i = 0; i < array.length; i++) {

      if (array[i] == key) {
        position = 'position: ' + i
        break;
      }
    }

    return position
  }

  return {
    testFunc: testFunc,
    linearSearch: linearSearch
  }
}
