import { printOutString } from "./modules/exercise1.js";
import { transformDoubleValue } from "./modules/exercise2.js";
import { sumAndProduct } from "./modules/exercise3.js";
import { courseMatch } from "./modules/exercise4.js";
import { listingPeople } from "./modules/exercise5.js";
import { bubbleSortInteractive } from "./modules/exerciseBubbleSort.js";


/**
 * Muestra el resultado en la página
 */
function showResult(message) {
    const resultOutput = document.getElementById('result-output');
    if (resultOutput) {
        resultOutput.textContent = message;
        // Opcional: agregar estilos para el resultado
        resultOutput.style.fontWeight = '600';
        resultOutput.style.color = '#2b6cb0';
    }
    
    // También mostrar en consola para debug
    console.log("Resultado:", message);
}


/**
 * Cambia el fondo según el ejercicio.
 * - Por defecto: estrellas con container gris claro
 * - Ejercicio 6: burbujas con container blanco
 */
function setBackgroundForExercise(exerciseNumber) {
    const body = document.body;
    const appContainer = document.querySelector('.app-container');
    const bubblesContainer = document.getElementById('bubbles-container');
    const nightContainer = document.querySelector('.night');
    
    // Remover todas las clases de fondo
    body.classList.remove("bg-bubbles", "bg-stars");
    appContainer.classList.remove("white-bg");
    
    // Ocultar/mostrar contenedores de fondo
    if (bubblesContainer) {
        bubblesContainer.style.display = 'none';
    }
    if (nightContainer) {
        nightContainer.style.display = 'block';
    }
    
    // Configurar para ejercicio 6
    if (exerciseNumber === 6) {
        body.classList.add("bg-bubbles");
        appContainer.classList.add("white-bg");
        
        if (bubblesContainer) {
            bubblesContainer.style.display = 'block';
        }
        if (nightContainer) {
            nightContainer.style.display = 'none';
        }
    } else {
        // Para otros ejercicios: fondo normal
        body.classList.add("bg-stars");
        if (nightContainer) {
            nightContainer.style.display = 'block';
        }
    }
}

/**
 * Ejecuta el ejercicio correspondiente y muestra el resultado.
 */
function runExercise(exerciseNumber) {
    // Limpiar resultado anterior
    showResult("");
    
    let result;
    
    switch (exerciseNumber) {
        case 1:
            result = printOutString();
            break;
        case 2:
            result = transformDoubleValue();
            break;
        case 3:
            result = sumAndProduct();
            break;
        case 4:
            result = courseMatch();
            break;
        case 5:
            result = listingPeople();
            break;
        case 6:
            result = bubbleSortInteractive();
            break;
        default:
            result = "Ejercicio no válido";
            console.warn("Ejercicio no válido:", exerciseNumber);
    }
    
    // Mostrar el resultado
    if (result !== undefined) {
        showResult(result);
    }
}


/**
 * Inicializa el menú: añade listeners a los botones.
 */
function initMenu() {
    const buttons = document.querySelectorAll(".menu-btn");

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const exerciseNumber = Number(btn.dataset.exercise);
            
            console.log("Botón clickeado:", exerciseNumber); // Para debug
            
            // Cambiar fondo primero
            setBackgroundForExercise(exerciseNumber);
            
            // Ejecutar ejercicio
            runExercise(exerciseNumber);
        });
    });
}

// Esperar a que el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM cargado"); // Para debug
    initMenu();
    // Fondo inicial = estrellas
    setBackgroundForExercise(0);
});

