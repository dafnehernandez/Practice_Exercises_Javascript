/** 
Write a function that performs the bubble algorithm.
Input [3, 6, 12, 5, 100, 1]
Output [1, 3, 5, 6, 12, 100]
 */

export function bubbleSort(inputArray) {
    let swapped = true;

    while (swapped) {
        swapped = false;

        for (let i = 0; i < inputArray.length - 1; i++) {
            if (inputArray[i] > inputArray[i + 1]) {
                let temp = inputArray[i];
                inputArray[i] = inputArray[i + 1];
                inputArray[i + 1] = temp;
                swapped = true;
            }
        }
    }
    
    return inputArray;
}

export function bubbleSortInteractive() {
    let result = "";

    function bubbleSort(inputArray) {
        let swapped = true; // enter on the cycle

        while (swapped) {
            swapped = false;  // assume there will be no exchanges

            for (let i = 0; i < inputArray.length - 1; i++) {
                if (inputArray[i] > inputArray[i + 1]) {
                    // Swapping using a temporary variable
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
                
                // Mostrar el array original antes de ordenar
                console.log("Original array:", [3, 6, 12, 5, 100, 1]);
                
                // Ordenar el array
                bubbleSort(exampleArray);
                
                // Mostrar el array ordenado
                console.log("Sorted array:", exampleArray);
                
                // Crear string del resultado
                result = "Original array: [3, 6, 12, 5, 100, 1]\n";
                result += "Sorted array: " + JSON.stringify(exampleArray);
                
                error = false;
                break;
            }

            case 2: {
                let input = prompt("Enter numbers separated by spaces:");
                
                if (!input || input.trim() === "") {
                    result = "Error: No numbers entered. Please enter numbers separated by spaces.";
                    console.log("Error: No numbers entered");
                    break;
                }
                
                let inputArray = input.split(" ").map(Number);
                
                // Verificar si hay valores no numéricos
                if (inputArray.some(isNaN)) {
                    result = "Error: Please enter only numbers separated by spaces.";
                    console.log("Error: Non-numeric values detected");
                    break;
                }
                
                // Guardar el array original como string antes de ordenar
                let originalArrayString = JSON.stringify(inputArray);
                
                console.log("Your array before sort:", inputArray);
                
                // Ordenar el array
                bubbleSort(inputArray);
                
                console.log("Sorted array:", inputArray);
                
                result = "Original array: " + originalArrayString + "\n";
                result += "Sorted array: " + JSON.stringify(inputArray);
                
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

