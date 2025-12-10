/** 
Write a function that performs the bubble algorithm.
Input [3, 6, 12, 5, 100, 1]
Output [1, 3, 5, 6, 12, 100]
 */

function bubbleSort(inputArray) {

  let swapped = true;  // enter on the cycle

  while (swapped) {
    swapped = false;   // assume there will be no exchanges

    for (let i = 0; i < inputArray.length - 1; i++) {

      if (inputArray[i] > inputArray[i + 1]) {
        
        //Swapping using a temporary variable
        let temp = inputArray[i];
        inputArray[i] = inputArray[i + 1];
        inputArray[i + 1] = temp;

        swapped = true; 
      }

    }

  }

  return inputArray;
}

/* Testing
let myArray = [5, 1, 4, 2, 8];
let sortedArray = bubbleSort(myArray);  
console.log("Sorted array:", sortedArray); // Output: [1, 2, 4, 5, 8]  
*/

let myArray = [3, 6, 12, 5, 100, 1];
console.log("Input array:", myArray);
let sortedArray = bubbleSort(myArray);  
console.log("Sorted array:", sortedArray); // Sorted array: [1, 3, 5, 6, 12, 100]