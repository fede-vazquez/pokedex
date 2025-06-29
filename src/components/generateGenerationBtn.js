/**
 * Función que devuelve elemento li que va a servir para hacer búsquedas por generación.
 * @param {Number} genID - ID de la generación.
 * @param {Number} actualGenID - ID de la generación actual.
 * @param {Function} handleChangeGen - Función encargada de cambiar la generación mostrada.
 * @returns {HTMLElement} - Item botón para cambiar la generación actual.
 */

export const generateGenerationBtn = (genID, actualGenID, handleChangeGen) => {
    const listItem = document.createElement("li");
    listItem.classList.add("generation-item");
    if (genID === actualGenID) listItem.classList.add("active-gen");

    const genBtn = document.createElement("button");
    genBtn.classList.add("generation-btn");
    genBtn.innerText = `Generación: ${genID}`;

    if (genID !== actualGenID) genBtn.onclick = () => handleChangeGen(genID);

    listItem.appendChild(genBtn);

    return listItem;
};
