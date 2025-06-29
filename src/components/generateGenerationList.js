import { handleChangeGen } from "../main";
import { generateGenerationBtn } from "./generateGenerationBtn";
import "../styles/generation-list.css";

/**
 * Función que genera elemento ul con una lista de generaciones pokémon para su selección.
 * @param {Array<number>} genIDs - IDs de generaciones pokémon.
 * @returns {HTMLElement} - Elemento ul que contiene toda la lista de generaciones para seleccionar.
 */

export const generateGenerationList = genIDs => {
    const list = document.createElement("ul");
    list.classList.add("generation-list");

    const handleClick = (element, genNumber) => {
        const selectedItem = document.querySelector(".active-gen");
        selectedItem?.classList.remove("active-gen");

        element.classList.add("active-gen");

        handleChangeGen(genNumber);
    };

    for (let i = 0; i < genIDs.length; i++) {
        const genID = genIDs[i];

        const listItem = generateGenerationBtn(genID, handleClick);
        list.appendChild(listItem);
    }

    // Ejecutamos la primera vez que se genera la lista.
    handleClick(list.firstChild, 1);

    return list;
};
