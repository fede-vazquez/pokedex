import { getOptions, renderPokemons, setOptions } from "../main";

export const generateGenerationSelect = genIDs => {
    const container = document.createElement("div");
    container.classList.add("generation-select-container");

    const selectLabel = document.createElement("label");
    selectLabel.textContent = "Selecciona una generación:";
    selectLabel.htmlFor = "generation-select";
    container.appendChild(selectLabel);

    // Bandera para saber la última generación.
    let lastGen = getOptions().genNumber || 1;

    const select = document.createElement("select");
    select.id = "generation-select";
    select.value = String(lastGen) || String(1);
    select.onchange = e => handleChange(e);
    container.appendChild(select);

    /**
     * Función que cambia la generación mostrada.
     * @param {*} e - Evento de cambio del select.
     */
    const handleChange = e => {
        const genNumber = Number(e.target.value);
        lastGen = genNumber;
        renderPokemons(setOptions({ genNumber, lastPage: 1 }));
    };

    // Cargar cada opción para cambiar la generación.
    for (let i = 0; i < genIDs.length; i++) {
        const genID = genIDs[i];
        const option = document.createElement("option");

        option.selected = genID == lastGen;
        option.value = genID;
        option.textContent = `Generación ${genID}`;
        select.appendChild(option);
    }

    return container;
};
