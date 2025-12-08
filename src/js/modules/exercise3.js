/**
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.

 */

  /**
   * reduce() is one of the most powerful methods in JavaScript arrays.
    It is used to convert an entire array into a single value, step by step.
   */

export function sumAndProduct() {

    function multiplyValue(array){
    return array.reduce((value, index) => value * index, 1);
  }

    function additionValue(array){
    return array.reduce((value, index) => value + index, 0);
  }

  let error = true;
  while (error) {
    let option = Number(prompt("There is an array whose sum and product will be displayed., select 1 if you want to see an example or 2 to enter your own numbers: \n"));
  
    switch (option) {
      case 1:
        let exampleArr = [1,2,3,4];
        console.log(`Given an array: ${JSON.stringify(exampleArr)} the sum is: ${additionValue(exampleArr)} The product is: ${multiplyValue(exampleArr)}`);
        error = false;
        break;

      case 2:
        let input = prompt("Enter numbers separated by spaces:");
        let arr = input.split(" ").map(Number);

        console.log(`Given an array: ${JSON.stringify(arr)} the sum is: ${additionValue(arr)} The product is: ${multiplyValue(arr)}`);
        error = false;
        break;

      default:
        console.log("Error, please select 1 or 2");
        break;
    }
  } 
}
