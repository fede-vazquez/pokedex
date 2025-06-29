import { handleChangeGen } from "../main";
import { generateGenerationBtn } from "./generateGenerationBtn";

/**
 * Función que genera elemento ul con una lista de generaciones pokémon para su selección.
 * @param {Array<number>} genIDs - IDs de generaciones pokémon.
 * @param {Number} actualGenID - Generación seleccionada
 * @returns {HTMLElement} - Elemento ul que contiene toda la lista de generaciones para seleccionar.
 */

export const generateGenerationList = (genIDs, actualGenID) => {
    const list = document.createElement("ul");
    list.classList.add("generation-list");

    for (let i = 0; i < genIDs.length; i++) {
        const genID = genIDs[i];

        const listItem = generateGenerationBtn(
            genID,
            actualGenID,
            handleChangeGen
        );
        list.appendChild(listItem);
    }

    return list;
};
