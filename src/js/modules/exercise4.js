/**
    let student1Courses = ['Math', 'English', 'Programming'];
    let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
 */

export function courseMatch() {
    let result = "";

    function isMatch(firstCourses, secondCourses) {
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
            return `The common course is: ${resultArray[0]}`;
        }
        
        return `Common courses: ${resultArray.join(", ")}`;
    }

    function isMatchOptimize(firstCourses, secondCourses) {
        const common = firstCourses.filter(course => secondCourses.includes(course));
        
        if (common.length === 0) {
            return "There are no courses in common.";
        }
        
        if (common.length === 1) {
            return `The common course is: ${common[0]}`;
        }
        
        return `Common courses: ${common.join(", ")}`;
    }

    let error = true;
    while (error) {
        let option = Number(prompt("Select 1 for original version or 2 for optimized version:\n"));
        
        switch (option) {
            case 1:
            case 2:
                let input1 = prompt("Enter first array (words separated by spaces):");
                let input2 = prompt("Enter second array (words separated by spaces):");
                
                let student1Courses = input1.split(" ");
                let student2Courses = input2.split(" ");
                
                if (option === 1) {
                    result = isMatch(student1Courses, student2Courses);
                } else {
                    result = isMatchOptimize(student1Courses, student2Courses);
                }

                console.log(message);
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