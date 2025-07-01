import { getAllPokemonInfo } from "../apiRequests/getAllPokemonsInfo";
import { getPokemonsIDByGeneration } from "../apiRequests/getPokemonIdsByGeneration";
import { generatePokemonPages } from "../components/generatePokemonPages";

/**
 * Función que retorna métodos para controlar el contenido de la lista de pokemones.
 * @param {Array<object>} pokemons - Lista de pokemones inicial.
 * @param {HTMLElement} pokemonContainer - Contenedor donde estará la lista de pokemones.
 */
export const pokemonListController = (pokemons, pokemonContainer) => {
    /**
     * Función que ordena los pokemones por número de pokedex y los vuelve a mostrar.
     * @param {"pokedexNumber" | "height" | "weight"} attributeName - Nombre del atributo por el que se va a ordenar
     * @param {Boolean} isAsc - True si es ascendente, false si es descendente.
     */
    function sortPokemonByAttribute(attributeName, isAsc = true) {
        pokemonContainer.innerText = "Cargando";

        pokemons.sort((a, b) =>
            isAsc
                ? a[attributeName] - b[attributeName]
                : b[attributeName] - a[attributeName]
        );

        renderList();
    }

    /**
     *
     * @param {Number} genNumber - Número de la generación que se quiere cargar
     */
    async function handleChangeGen(genNumber) {
        pokemonContainer.innerText = "Cargando";
        const ids = await getPokemonsIDByGeneration(genNumber);
        pokemons = await getAllPokemonInfo(ids);

        pokemons.sort((a, b) => a.id - b.id);

        renderList();
    }

    /**
     * Función que renderiza la lista
     */

    function renderList() {
        pokemonContainer.innerText = "";
        pokemonContainer.appendChild(generatePokemonPages(pokemons));
    }

    return {
        sortPokemonByAttribute,
        handleChangeGen,
        renderList,
    };
};
