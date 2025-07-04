import { getOptions, renderPokemons, setOptions } from "../main.js";

/**
 * Función que genera un input de búsqueda para filtrar los Pokémon por nombre.
 */
export const generateSearchInput = () => {
    const searchInputContainer = document.createElement("div");
    searchInputContainer.classList.add("search-input-container");

    const labelSearch = document.createElement("label");
    labelSearch.innerText = "Buscar por nombre:";
    labelSearch.htmlFor = "search-input";
    searchInputContainer.appendChild(labelSearch);

    const searchInput = document.createElement("input");
    searchInput.classList.add("search-input");
    searchInput.type = "search";
    searchInput.id = "search-input";

    searchInput.value = getOptions().nameToFilter || "";
    searchInput.oninput = handleSearch;
    searchInputContainer.appendChild(searchInput);

    return searchInputContainer;
};

const handleSearch = e => {
    renderPokemons(setOptions({ nameToFilter: e.target.value.trim() }));
};
