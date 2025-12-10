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
function listingPeople () {
  let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

  console.log(people); //1. Print out all of people

  people.splice(people.indexOf("Dani"), 1); // 2. Remove Dani

  people.splice(people.indexOf("Juan"), 1); // 3. Remove Juan

  let indexLuis = people.indexOf("Luis"); // 4. Move Luis to the beginning of the array
  let luis = people.splice(indexLuis, 1)[0]; 
  people.unshift(luis);

  people.push("Dafne"); //5. Add my name at the end

  // 6. iterate through this array and after console.log Maria
  for (let person of people) {
      console.log(person);
      if (person === "Maria"){
        break;
      } 
  }

  console.log("Index of Maria:", people.indexOf("Maria")); //7. Obtain index of Maria

  console.log("Final array:", people) //Final result
}

export {listingPeople}