import { binarySearch, binarySearchIterations } from '/binary_search.js';
import { selectionSort, selectionSortInPlace } from './selectionSort.js';
import { bubbleSort } from './bubbleSort.js';
import { insertionSort } from './insertionSort.js';




/*
const randomTestArray = createSortedNumsArray(100000);

console.log('empty array:', binarySearch([], 23));
console.log(binarySearch(randomTestArray, 23));
console.log(binarySearch(randomTestArray, 126));
console.log(binarySearch(randomTestArray, 5462));
console.log(binarySearch(randomTestArray, 16548));
console.log(binarySearch(randomTestArray, 945863));
console.log(binarySearch(randomTestArray, 1654865));
console.log(binarySearch(randomTestArray, 16454865));
*/

/*
const randomArray = createRandomUnorderedArray(1000);
console.log(randomArray);
console.log(selectionSort(randomArray));
*/

/*
const randomArray = createRandomUnorderedArray(10);
console.log(randomArray);
bubbleSort(randomArray);
console.log(randomArray);
*/

const randomArray = createRandomUnorderedArray(10);
console.log(randomArray);
insertionSort(randomArray);
console.log(randomArray);








/**
 * @param {number} n - The length of the array 
 * @return {array} - an array of unsorted random integers
 */
function createRandomUnorderedArray(n) {
  const arr = new Array(n);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * n);
  }
  // console.log(arr);
  return arr;
}



/**
 * @param {number} n - The length of the array 
 * @return {array} - an array of sorted random integers
 */
 function createSortedNumsArray(n) {
  console.log(`Creating array of ${n} elements...`);
  const getRand = () => Math.floor(Math.random() * 4) + 1; // 1 - 5
  const array = new Array(n);
  array[0] = getRand();
  for(let i = 1; i < array.length; i++) {
    array[i] = array[i - 1] + getRand();
  }
  console.log(`... done.`);
  return array;
}

