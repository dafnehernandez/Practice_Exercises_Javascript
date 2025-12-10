//Copy the code below into your workspace:
let arr = ["This", "is", "a", "sentence."];

export function printOutString() {
    // Array original del ejercicio
    let arr = ["This", "is", "a", "sentence."];
    
    // Mostrar el array original
    let result = "Array original: " + JSON.stringify(arr) + "\n\n";
    
    // Unir el array en una frase
    let sentence = arr.join(" ");
    
    // Agregar la frase al resultado
    result += "Frase completa: " + sentence;
    
    console.log("Resultado ejercicio 1:", sentence);
    
    return result;
}