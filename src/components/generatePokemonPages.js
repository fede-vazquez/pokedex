import { paginateArray } from "../utils/paginateArray";
import { generatePokemonList } from "./generatePokemonList";
import { generatePokemonPagesControllers } from "./generatePokemonPagesControllers";
import "../styles/pokemon-pages.css";
import { getOptions, setOptions } from "../main";
/**
 * Función que genera un section con pokemones paginados.
 * @param {Array<Pokemon>} pokemons - Lista total de pokemones para paginar.
 * @return {HTMLElement} - Elemento section con los pokemones paginados y sus controladores
 */

export const generatePokemonPages = pokemons => {
    let container = document.createElement("section");

    const pagesContainer = document.createElement("div");

    container.appendChild(pagesContainer);

    const pages = paginateArray(pokemons, 20);

    // Bandera para saber la ultima página
    let lastPage = getOptions().lastPage || 1;

    /**
     * Función que cambia la página mostrada.
     * @param {Number} pageNumber - Número de la página que se quiere cargar
     */
    const handleChangePage = pageNumber => {
        if (pageNumber > 0 && pageNumber <= pages.pagesCount) {
            pagesContainer.innerText = "";
            const newList = generatePokemonList(pages.getPage(pageNumber));

            pagesContainer.appendChild(newList);
            setOptions({ lastPage: pageNumber });
            lastPage = pageNumber;
        }
    };

    // Ejecutamos por defecto en ultima página
    handleChangePage(lastPage);

    /**
     * Función para cambiar el estilo de la página seleccionada.
     * @param {Number} pageNumber - Número de la página.
     * @param {HTMLElement} target - Elemento HTML que disparó el evento.
     */
    const handleClick = (pageNumber, target) => {
        const lastElement = document.querySelector(".active-page.active-page");
        lastElement?.classList.remove("active-page");

        target.classList.add("active-page");
        handleChangePage(pageNumber);
    };

    const controllers = generatePokemonPagesControllers(
        pages.pagesCount,
        handleClick,
        lastPage
    );

    container.appendChild(controllers);

    return container;
};
