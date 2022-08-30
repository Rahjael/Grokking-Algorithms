/**
 * IN-PLACE insertion sort
 * @param {number[]} array - the array to sort
 */
export function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      // console.log(array);
      if(array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
}