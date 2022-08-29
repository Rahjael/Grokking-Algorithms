/**
 * This is an IN-PLACE bubble sort.
 * 
 * @param {number[]} array - the array to sort
 */
export function bubbleSort(array) {
  let allSorted = false;
  do {
    allSorted = true;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        allSorted = false;
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      }
    }
  } while (!allSorted);
}