import { generateGenerationBtn } from "./generateGenerationBtn";
import "../styles/generation-list.css";
import { getOptions, renderPokemons, setOptions } from "../main";

/**
 * Función que genera elemento ul con una lista de generaciones pokémon para su selección.
 * @param {Array<number>} genIDs - IDs de generaciones pokémon.
 * @returns {HTMLElement} - Elemento ul que contiene toda la lista de generaciones para seleccionar.
 */

export const generateGenerationList = genIDs => {
    const list = document.createElement("ul");
    list.classList.add("generation-list");

    // Bandera para saber la última página.
    let lastGen = getOptions().genNumber || 1;

    /**
     * Función que cambia la generación mostrada además del estilo de botones.
     * @param {HTMLElement} element - Elemento que dispara el handle.
     * @param {Number} genNumber - Número de generación a la cual se va a cambiar.
     */
    const handleClick = (element, genNumber) => {
        const selectedItem = document.querySelector(".active-gen");
        selectedItem?.classList.remove("active-gen");

        element.parentElement.classList.add("active-gen");

        lastGen = genNumber;
        renderPokemons(setOptions({ genNumber, lastPage: 1 }));
    };

    // Cargar cada botón para cambiar la generación.
    for (let i = 0; i < genIDs.length; i++) {
        const genID = genIDs[i];

        const listItem = generateGenerationBtn(genID, handleClick, lastGen);
        list.appendChild(listItem);
    }

    return list;
};
