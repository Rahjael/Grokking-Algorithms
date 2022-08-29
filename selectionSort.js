/**
 * @param {number[]} array - an array of numbers to sort
 * 
 * Picks items one by one from the input array and creates a new array
 * of sorted items
 */
export function selectionSort(array) {
  const findSmallest = (array) => {
    let smallestIndex = 0;
    for (let i = 1; i < array.length; i++) {
      if (array[i] < array[smallestIndex]) {
        smallestIndex = i;
      }
    }
    return smallestIndex;
  }

  let newArr = [];

  while (array.length) {
    let index = findSmallest(array);
    newArr.push(array[index]);
    array.splice(index, 1);
  }

  return newArr;
}


/**
 * 
 * @param {number[]} array - an array to be sorted
 * 
 * Swaps the items in place modifying the original array
 */
export function selectionSortInPlace(array) {
  let smallestIndex = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[smallestIndex]) {
        smallestIndex = j;
      }
    }
    [array[i], array[smallestIndex]] = [array[smallestIndex], array[i]];
  }

  return array;
}