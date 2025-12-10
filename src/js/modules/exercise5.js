/**
For each of the exercises below, assume you are starting with the following people array.

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

    1. Write a command that prints out all of the people in the list.
    2. Write the command to remove "Dani" from the array.
    3. Write the command to remove "Juan" from the array.
    4. Write the command to move "Luis" to the front of the array.
    5. Write the command to add your name to the end of the array.
    6. Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
    7. Write the command that gives the indexOf where "Maria" is located.

At the end of the exercise, there should be 4 people in the array.
 */

export function listingPeople() {
    let result = "";
    let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
    
    console.log(people);                      //1. Print out all of people
    result += "1. Initial array: " + JSON.stringify(people) + "\n\n";
    
    people.splice(people.indexOf("Dani"), 1); // 2. Remove Dani
    result += "2. After removing Dani: " + JSON.stringify(people) + "\n\n";
    
    people.splice(people.indexOf("Juan"), 1); // 3. Remove Juan
    result += "3. After removing Juan: " + JSON.stringify(people) + "\n\n";
    
    let indexLuis = people.indexOf("Luis");   // 4. Move Luis to front
    let luis = people.splice(indexLuis, 1)[0];
    people.unshift(luis);
    result += "4. After moving Luis to front: " + JSON.stringify(people) + "\n\n";
   
    people.push("Dafne");                     // 5. Add my name
    result += "5. After adding my name: " + JSON.stringify(people) + "\n\n";

    let loopResult = "Loop results: ";        // 6. Iterate and stop at Maria
    for (let person of people) {
        loopResult += person + " ";
        if (person === "Maria") {
            loopResult += "(stopped)";
            break;
        }
    }
    result += "6. " + loopResult + "\n\n";
    
    // 7. Index of Maria
    console.log("Index of Maria:", people.indexOf("Maria")); 
    result += "7. Index of Maria: " + people.indexOf("Maria") + "\n\n";
    
    // Final array
    console.log("Final array:", people);
    result += "Final array: " + JSON.stringify(people);
    
    return result;
}