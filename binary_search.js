/**
 * 
 * @param {number[]} array - They array to search through
 * @param {number} value - The value we are searching
 * @return {number} - The index of the searched element, null if not found
 * 
 * We assume the array is already sorted.
 */
export function binarySearch(array, value) {
  let lowest = 0;
  let highest = array.length - 1;
  let current;

  while (lowest <= highest) {
    // Lowest is subtracted then re-added to avoid overflow problems for large values of n
    current = Math.floor(((highest - lowest) / 2)) + lowest;
    if (array[current] < value) lowest = current + 1;
    else if (array[current] > value) highest = current - 1;
    else return current;
  }

  return null;
}




/**
 * 
 * @param {number[]} array - They array to search through
 * @param {number} value - The value we are searching
 * @param {boolean} countIterations - If it should return iterations as well
 * @return {number, number} [index, iterations]- The index in the array and the iterations
 * 
 * We assume the array is already sorted.
 */
 export function binarySearchIterations(array, value, countIterations = false) {
  let lowest = 0;
  let highest = array.length - 1;
  let current;
  let iterations = 1;

  while (lowest <= highest) {
    // Lowest is subtracted then re-added to avoid overflow problems for large values of n
    current = Math.floor(((highest - lowest) / 2)) + lowest; 

    if (array[current] < value) lowest = current + 1;
    else if (array[current] > value) highest = current - 1;
    else {
      if (countIterations) return [current, iterations];
      else return current;
    }

    // console.log('inside', value, array[current], current, iterations, lowest, highest);
    if (countIterations) iterations++;
  }

  // console.log(current, iterations, lowest, highest);

  if (countIterations) return [null, iterations];
  else return null;
}