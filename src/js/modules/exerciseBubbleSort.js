/** 
Write a function that performs the bubble algorithm.
Input [3, 6, 12, 5, 100, 1]
Output [1, 3, 5, 6, 12, 100]
 */
export function bubbleSortInteractive() {
    let result = "";

    function bubbleSort(inputArray) {
      let swapped = true; // enter on the cycle

      while (swapped) {
        swapped = false;  // assume there will be no exchanges

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

    let error = true;
    while (error) {
        let option = Number(prompt("Select 1 to see an example or 2 to enter your own array:\n"));
        
        switch (option) {
            case 1: {
                let exampleArray = [3, 6, 12, 5, 100, 1];
                console.log("Original array:", exampleArray);
                let sorted = bubbleSort(exampleArray);
                console.log("Sorted array:", sorted); // Sorted array: [1, 3, 5, 6, 12, 100]
                result = `Original array: ${JSON.stringify(exampleArray)}\nSorted array: ${JSON.stringify(sorted)}`;
                error = false;
                break;
            }
            
            case 2: {
                let input = prompt("Enter numbers separated by spaces:");
                let inputArray = input.split(" ").map(Number);
                console.log("Your array:", inputArray);
                let sorted = bubbleSort(inputArray);
                console.log("Sorted array:", sorted);
                result = `Your array: ${JSON.stringify(inputArray)}\nSorted array: ${JSON.stringify(sorted)}`;
                error = false;
                break;
            }
            
            default:
                console.log("Error, please select 1 or 2");
                result = "Error, please select 1 or 2";
                break;
        }
    }
    
    return result;
}