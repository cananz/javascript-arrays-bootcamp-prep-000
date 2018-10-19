var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"];
  
  function addElementToBeginningOfArray(array, element) {
    return [element, ...array]
  }
  
  function destructivelyAddElementToBeginningOfArray(array, element) {
    array.unshift(element)
    return array
  }
  
  function addElementToEndOfArray(array, element) {
    return [...array, element];
  }
  
  function destructivelyAddElementToEndOfArray(array, element) {
    array.push(element)
    return array
  }
  
  function accessElementInArray(array, index) {
    return array[index]
  }
  
  function destructivelyRemoveElementFromBeginningOfArray(array) {
    array.shift()
    return array
  }
  
  function removeElementFromBeginningOfArray(array) {
    return array.slice(1);
  }
  
  function destructivelyRemoveElementFromEndOfArray(array) {
    array.pop()
    return array
  }
  
<<<<<<< HEAD
  function removeElementFromEndOfArray(array) {
    return array.slice(0, array.length - 1);
  }
=======
  function 
>>>>>>> 7be0da5c51c4cff213886359ee7821268c7513a3
