import { getOptions, renderPokemons, setOptions } from "../main";
import { generateTypesToFilterList } from "./generateTypesToFilterList";
import "../styles/filter-and-sort-panel.css";
/**
 * Función que devuelve un panel de controles para filtrar.
 * @param {Array<string>} types - Nombre de los tipos por los que se podrá filtrar
 * @returns
 */
export const generateFilterAndSortPanel = types => {
    const container = document.createElement("section");
    container.classList.add("filter-and-sort-panel");

    // Buscador por tipo.
    container.append(generateTypesToFilterList(types));

    // Buscador por nombre.
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

    // Agrega el contenedor de búsqueda al panel.
    container.appendChild(searchInputContainer);

    return container;
};

const handleSearch = e => {
    renderPokemons(setOptions({ nameToFilter: e.target.value.trim() }));
};
