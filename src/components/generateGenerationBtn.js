/**
 * Función que devuelve elemento li que va a servir para hacer búsquedas por generación.
 * @param {Number} genID - ID de la generación.
 * @param {Function} handleChangeGen - Función encargada de cambiar la generación mostrada.
 * @param {Number} lastGen - Ultima generación cargada.
 * @returns {HTMLElement} - Item botón para cambiar la generación actual.
 */

export const generateGenerationBtn = (genID, handleChangeGen, lastGen) => {
    const listItem = document.createElement("li");
    listItem.classList.add("generation-item");

    const genBtn = document.createElement("button");
    genBtn.classList.add("generation-btn");
    genBtn.innerText = `Generación: ${genID}`;

    if (genID == lastGen) listItem.classList.add("active-gen");

    genBtn.onclick = e => handleChangeGen(e.target, genID);

    listItem.appendChild(genBtn);

    return listItem;
};
