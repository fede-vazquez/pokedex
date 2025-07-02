import "../styles/type-list.css";

/**
 * Función que devuelve una lista con los tipos del pokemon.
 * @param {Array<string>} types - Lista de tipos.
 * @return {HTMLElement} - Elemento HTML
 */
export const generatePokemonTypesList = types => {
    const typesContainer = document.createElement("div");
    typesContainer.classList.add("types-container");

    typesContainer.innerHTML = "<h5>Tipos</h5>";

    const typeList = document.createElement("ul");
    typeList.classList.add("card-types");
    types.forEach(type => {
        typeList.appendChild(typeItem(type));
    });

    typesContainer.appendChild(typeList);

    return typesContainer;
};

// Genera elemento li con información de los tipos del pokémon.
const typeItem = type => {
    const typeElement = document.createElement("li");
    typeElement.innerHTML = `<li class="type-item type-${type}">${type}</li>`;

    return typeElement;
};
