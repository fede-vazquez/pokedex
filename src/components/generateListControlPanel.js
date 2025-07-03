import { generateTypesToFilterList } from "./generateTypesToFilterList";
import { generateSearchInput } from "./generateSearchInput";
import { generateSelectToOrderList } from "./generateSelectToOrderList";
import { generateGenerationSelect } from "./generateGenerationList";
import "../styles/filter-and-sort-panel.css";

/**
 * Función que devuelve un panel de controles para filtrar y ordenar.
 * @param {Array<string>} types - Nombre de los tipos por los que se podrá filtrar
 * @param {Array<number>} genIDs - IDs de las generaciones.
 * @returns {HTMLElement}
 */
export const generateListControlPanel = (types, genIDs) => {
    const container = document.createElement("section");
    container.classList.add("filter-and-sort-panel");

    // Agrega selector por generación.
    container.appendChild(generateGenerationSelect(genIDs));

    // Buscador por tipo.
    container.append(generateTypesToFilterList(types));

    // Agrega el selector para ordenar la lista.
    container.appendChild(generateSelectToOrderList());

    // Agrega el contenedor de búsqueda al panel.
    container.appendChild(generateSearchInput());

    return container;
};
