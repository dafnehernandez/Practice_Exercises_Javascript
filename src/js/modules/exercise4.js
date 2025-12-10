/**
    let student1Courses = ['Math', 'English', 'Programming'];
    let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
 */

export function isMatch(firstCourses, secondCourses) {
    const resultArray = [];

    for (const course1 of firstCourses) {
        for (const course2 of secondCourses) {
            if (course1 === course2) {
                resultArray.push(course1);
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

export function isMatchOptimize(firstCourses, secondCourses) {
    const result = firstCourses.filter(course => secondCourses.includes(course));

    if (result.length === 0) {
        return "There are no courses in common.";
    }

    if (result.length === 1) {
        return `The course they have in common is ${result[0]}`;
    }

    return `The courses they have in common are: ${result.join(", ")}`;
}

export function courseMatch() {
    let option = Number(prompt("Select 1 for original version or 2 for optimized version:\n"));
    
    if (option !== 1 && option !== 2) {
        return "Error: Please select 1 or 2";
    }
    
    // ask courses
    let input1 = prompt("Enter first array (words separated by spaces):");
    let input2 = prompt("Enter second array (words separated by spaces):");
    
    if (!input1 || !input2) {
        return "Error: Both arrays must be provided";
    }
    
    let student1Courses = input1.split(" ").filter(course => course.trim() !== "");
    let student2Courses = input2.split(" ").filter(course => course.trim() !== "");
    
    console.log("Student 1 courses:", student1Courses);
    console.log("Student 2 courses:", student2Courses);
    
    let message;
    if (option === 1) {
        message = isMatch(student1Courses, student2Courses);
    } else {
        message = isMatchOptimize(student1Courses, student2Courses);
    }
    
    console.log(message);
    return message;
}