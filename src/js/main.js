import { printOutString } from "./modules/exercise1.js";
import { transformDoubleValue } from "./modules/exercise2.js";
import { sumAndProduct } from "./modules/exercise3.js";
import { courseMatch } from "./modules/exercise4.js";
import { listingPeople } from "./modules/exercise5.js";
import { bubbleSortInteractive } from "./modules/exerciseBubbleSort.js";

/**
 * Cambia el fondo según el ejercicio.
 * - Por defecto: lluvia tranquila (bg-rain)
 * - Ejercicio 6: burbujas (bg-bubbles)
 */
function setBackgroundForExercise(exerciseNumber) {
    const body = document.body;
    body.classList.remove("bg-rain", "bg-bubbles");

    if (exerciseNumber === 6) {
        body.classList.add("bg-bubbles");
    } else {
        body.classList.add("bg-rain");
    }
}

/**
 * Ejecuta el ejercicio correspondiente.
 */
function runExercise(exerciseNumber) {
    switch (exerciseNumber) {
        case 1:
            printOutString();
            break;
        case 2:
            transformDoubleValue();
            break;
        case 3:
            sumAndProduct();
            break;
        case 4:
            courseMatch();
            break;
        case 5:
            listingPeople();
            break;
        case 6:
            bubbleSortInteractive();
            break;
        default:
            console.warn("Ejercicio no válido:", exerciseNumber);
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

            // Cambiar fondo
            setBackgroundForExercise(exerciseNumber);

            // Ejecutar ejercicio
            runExercise(exerciseNumber);
        });
    });
}

// Esperar a que el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
    initMenu();
    // Fondo inicial = lluvia
    setBackgroundForExercise(0);
});
