/**
    let student1Courses = ['Math', 'English', 'Programming'];
    let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
 */

function isMatch(firstCourses,secondCourses){
    const resultArray = []; 
    for(const course1 of firstCourses){
        for(const course2 of secondCourses){
            if (course1 === course2){
                resultArray.push(course1); 
                //console.log(`The course they have in common is ${resultArray}`);
            }
        }
    }
    
    if (resultArray.length === 0) {
        return "There are no courses in common.";
    }

    if (resultArray.length === 1) {
        return `The course they have in common is ${resultArray[0]}`;
    }

    return `The courses they have in common are: ${resultArray.join(", ")}`;
}

/*
//let student1Courses = ['Math', 'English', 'Programming'];
//let student2Courses = ['Geography', 'Spanish', 'Programming'];

let input1Courses = prompt("Enter first array, put words separated by spaces:");
let input2Courses = prompt("Enter second array, put words separated by spaces:");

/ Convertimos strings
let student1Courses = input1Courses.split(" ");
let student2Coursess = input2Courses.split(" ");
*/
//isMatch(input1Courses, input2Courses);

export {isMatch}