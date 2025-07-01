import { generateGenerationBtn } from "./generateGenerationBtn";
import { handleChargeGen } from "../utils/pokemonsController";
import "../styles/generation-list.css";

/**
 * Función que genera elemento ul con una lista de generaciones pokémon para su selección.
 * @param {Array<number>} genIDs - IDs de generaciones pokémon.
 * @param {HTMLElement} pokemonContainer - Elemento donde van a estár los pokemones que se van a modificar.
 * @returns {HTMLElement} - Elemento ul que contiene toda la lista de generaciones para seleccionar.
 */

export const generateGenerationList = (genIDs, pokemonContainer) => {
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

        handleChargeGen(genNumber, pokemonContainer);
    };

    for (let i = 0; i < genIDs.length; i++) {
        const genID = genIDs[i];

        const listItem = generateGenerationBtn(genID, handleClick);
        list.appendChild(listItem);
    }

    // La primera renderización le agregamos la clase active al primer elemento de la lista.
    list.firstChild.classList.add("active-gen");

    return list;
};
