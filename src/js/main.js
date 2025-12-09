import { printOutString } from "./modules/exercise1.js";
import { transformDoubleValue } from "./modules/exercise2.js"
import { sumAndProduct } from "./modules/exercise3.js";
import { isMatch } from "./modules/exercise4.js";

let input1Courses = prompt("Enter first array, put words separated by spaces:");
let input2Courses = prompt("Enter second array, put words separated by spaces:");
// Convertimos strings 
let student1Courses = input1Courses.split(" ");
let student2Courses = input2Courses.split(" ");

//printOutString();                                     //exercise 1
//transformDoubleValue();                               //exercise 2
//sumAndProduct();                                      //exercise 3
const msg = isMatch(student1Courses, student2Courses);  //exercise 4
console.log(msg);