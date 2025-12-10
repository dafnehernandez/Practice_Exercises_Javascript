/**
Write a function that:
  - Takes in an array of numbers.
  - Doubles the value of each number in the array.
  - Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
 just for debug 
 
  const prompt = require("prompt-sync")(); */

export function transformDoubleValue() {
    let result = "";

    function doubleValue(array){
        return array.map(value => value * 2);  
    }

    let error = true;
    while (error) {
        let option = Number(prompt("With an array where each value will be doubled, select 1 if you want to see an example or 2 to enter your own numbers: \n"));
    
        switch (option) {
            case 1:
                let exampleArr = [4,8,12,16,32];
                result = `Original array: ${JSON.stringify(exampleArr)}\nNew array: ${JSON.stringify(doubleValue(exampleArr))}`;
                console.log(`Original array is: ${JSON.stringify(exampleArr)}`);
                console.log(`New array is: ${JSON.stringify(doubleValue(exampleArr))}`);
                error = false;
                break;

            case 2:
                let input = prompt("Enter numbers separated by spaces:");
                let arr = input.split(" ").map(Number);
                result = `Your original array: ${JSON.stringify(arr)}\nNew array: ${JSON.stringify(doubleValue(arr))}`;
                console.log(`Your original array is: ${JSON.stringify(arr)}`);
                console.log(`New array is: ${JSON.stringify(doubleValue(arr))}`);
                error = false;
                break;

            default:
                result = "Error, please select 1 or 2";
                console.log("Error, please select 1 or 2");
                break;
        }
    }
    
    return result;
}

//Note: Create an if for select if you just watch an example o put your own array