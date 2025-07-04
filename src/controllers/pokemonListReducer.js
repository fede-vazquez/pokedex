import { generateLoader } from "../components/generateLoader.js";
import { getOptions } from "../main.js";
import { pokemonListController } from "./pokemonListController.js";

/**
 * Función que retorna métodos para controlar el contenido de la lista de pokemones.
 * @param {Array<Pokemon>} pokemons - Lista de pokemones inicial.
 * @param {HTMLElement} pokemonContainer - Contenedor donde estará la lista de pokemones.
 */
export const pokemonListReducer = (pokemons, pokemonContainer) => {
    const {
        sortPokemonByAttribute,
        filterPokemonByAttribute,
        handleChangeGen,
        renderList,
    } = pokemonListController();

    // Bandera para evitar peticiones repetidas a la API.
    let lastGen = getOptions().genNumber || 1;

    /**
     * Función que permite usar las acciones del reducer.
     * @param {ListOptions} listOptions - Acción que se va a ejecutar
     */
    return async function pokemonRender({
        genNumber,
        nameToFilter,
        typesToFilter,
        sortByAttribute,
    }) {
        pokemonContainer.innerHTML = generateLoader().outerHTML;

        let pokemonsCopy = [...pokemons];

        // 1. Buscar pokemones por generación.
        // 2. Filtrar por nombre.
        // 3. Filtrar por tipos.
        // 4. Ordenarlos por atributo.
        // 5. Renderizar.

        if (lastGen != genNumber) {
            pokemons = await handleChangeGen(genNumber);
            pokemonsCopy = pokemons;
            lastGen = genNumber;
        }

        pokemonsCopy = filterPokemonByAttribute(
            pokemonsCopy,
            "name",
            nameToFilter
        );

        pokemonsCopy = filterPokemonByAttribute(
            pokemonsCopy,
            "types",
            typesToFilter
        );

        pokemonsCopy = sortPokemonByAttribute(
            pokemonsCopy,
            sortByAttribute.type,
            sortByAttribute.isAsc
        );

        if (pokemonsCopy.length === 0) {
            pokemonContainer.innerHTML = "<h2>No se encontraron pokemones</h2>";
            return;
        }

        renderList(pokemonsCopy, pokemonContainer);
    };
};
