import { generateGenerationBtn } from "./generateGenerationBtn";
import "../styles/generation-list.css";
import { handleChangeGen } from "../main";

/**
 * Función que genera elemento ul con una lista de generaciones pokémon para su selección.
 * @param {Array<number>} genIDs - IDs de generaciones pokémon.
 * @returns {HTMLElement} - Elemento ul que contiene toda la lista de generaciones para seleccionar.
 */

export const generateGenerationList = genIDs => {
    const list = document.createElement("ul");
    list.classList.add("generation-list");

    /**
     * Función que cambia la generación mostrada además del estílo de botones.
     * @param {HTMLElement} element - Elemento que dispara el handle.
     * @param {*} genNumber - Número de generación a la cual se va a cambiar.
     */
    const handleClick = (element, genNumber) => {
        const selectedItem = document.querySelector(".active-gen");
        selectedItem?.classList.remove("active-gen");

        element.classList.add("active-gen");

        handleChangeGen(genNumber);
    };

    // Cargar cada botón para cambiar la generación.
    for (let i = 0; i < genIDs.length; i++) {
        const genID = genIDs[i];

        const listItem = generateGenerationBtn(genID, handleClick);
        list.appendChild(listItem);
    }

    // Botón para pedir todas las generaciones.
    const allGenBtn = document.createElement("button");
    allGenBtn.classList.add("generation-btn");
    allGenBtn.innerText = "Todas";
    list.append(allGenBtn);

    // La primera renderización le agregamos la clase active al primer elemento de la lista.
    list.firstChild.classList.add("active-gen");

    return list;
};
