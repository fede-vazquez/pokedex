import { generateTypesToFilterList } from "./generateTypesToFilterList";
import { generateSearchInput } from "./generateSearchInput";
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

    // Agrega el contenedor de búsqueda al panel.
    container.appendChild(generateSearchInput());

    return container;
};
