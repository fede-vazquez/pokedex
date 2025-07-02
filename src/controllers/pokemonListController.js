import { getAllPokemonInfo } from "../apiRequests/getAllPokemonsInfo";
import { getPokemonIDsByGeneration } from "../apiRequests/getPokemonIDsByGeneration";
import { generatePokemonPages } from "../components/generatePokemonPages";

/**
 * Función que retorna métodos para controlar el contenido de la lista de pokemones.
 * @param {Array<Pokemon>} pokemons - Lista de pokemones inicial.
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
     * Función que renderiza la lista filtrada de pokemones según su nombre o tipos.
     * @param {"name" | "types"} attributeType - Nombre del pokémon por el que se va a filtrar.
     * @param {String | Array} valueToFilter - Valor por el que se va a filtrar.
     */
    function filterPokemonByAttribute(attributeType, valueToFilter) {
        let pokemonsFiltered = [];
        switch (attributeType) {
            case "name":
                pokemonsFiltered = pokemons.filter(pokemon => {
                    const name = pokemon.name.toLowerCase();
                    // @ts-ignore
                    return name.includes(valueToFilter.toLowerCase());
                });
                break;

            case "types":
                pokemonsFiltered = pokemons.filter(pokemon => {
                    // @ts-ignore
                    return valueToFilter.some(type =>
                        pokemon.typeNames.includes(type.toLowerCase())
                    );
                });
                break;
        }

        renderList(pokemonsFiltered);
    }

    /**
     * Función que renderiza la lista de pokemones según su generación.
     * @param {Number} genNumber - Número de la generación que se quiere cargar-
     */
    async function handleChangeGen(genNumber) {
        pokemonContainer.innerText = "Cargando";
        const ids = await getPokemonIDsByGeneration(genNumber);
        pokemons = await getAllPokemonInfo(ids);

        pokemons.sort((a, b) => a.id - b.id);

        renderList();
    }

    /**
     * Función que renderiza la lista
     * @param {Array<object>} newPokemons - Nuevo array de objetos que se van a renderizar (opcional)
     */

    function renderList(newPokemons = null) {
        pokemonContainer.innerText = "";
        pokemonContainer.appendChild(
            generatePokemonPages(newPokemons || pokemons)
        );
    }

    return {
        sortPokemonByAttribute,
        filterPokemonByAttribute,
        handleChangeGen,
        renderList,
    };
};
