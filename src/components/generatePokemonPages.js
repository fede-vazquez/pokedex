import { paginateArray } from "../utils/paginateArray";
import { generatePokemonList } from "./generatePokemonList";
import { generatePokemonPagesControllers } from "./generatePokemonPagesControllers";
import "../styles/pokemon-pages.css";
/**
 * Función que genera un section con pokemones paginados.
 * @param {Array<object>} pokemons - Lista total de pokemones para páginar.
 * @param {HTMLElement} - Elemento section con los pokemones paginados y sus controladores
 */

export const generatePokemonPages = pokemons => {
    let actualPage = 0;

    let container = document.createElement("section");

    const pagesContainer = document.createElement("div");

    container.appendChild(pagesContainer);

    const pages = paginateArray(pokemons, 20);

    /**
     * Función que cambia la página mostrada.
     * @param {Number} pageNumber - Número de la página que se quiere cargar
     */
    const handleChangePage = pageNumber => {
        if (
            pageNumber > 0 &&
            pageNumber <= pages.pagesCount &&
            pageNumber !== actualPage
        ) {
            pagesContainer.innerText = "";
            const newList = generatePokemonList(pages.getPage(pageNumber));

            pagesContainer.appendChild(newList);
            actualPage = pageNumber;
        }
    };
    // Ejecutamos por defecto en la página 1
    handleChangePage(1);

    const controllers = generatePokemonPagesControllers(
        pages.pagesCount,
        handleChangePage
    );

    container.appendChild(controllers);

    return container;
};
