import { getAllPokemonInfo } from "../apiRequests/getAllPokemonsInfo.js";
import { getPokemonIDsByGeneration } from "../apiRequests/getPokemonIDsByGeneration.js";
import { generatePokemonPages } from "../components/generatePokemonPages.js";

/**
 * Función que retorna métodos para controlar el contenido de la lista de pokemones.
 */
export const pokemonListController = () => {
    /**
     * Función que ordena los pokemones por un atributo.
     * @param {Array<Pokemon>} pokemons - Array de pokemones
     * @param {"pokedexNumber" | "height" | "weight"} attributeName - Nombre del atributo por el que se va a ordenar
     * @param {Boolean} isAsc - True si es ascendente, false si es descendente.
     * @return {Array<Pokemon>} - Array de pokemones ordenado.
     */
    function sortPokemonByAttribute(pokemons, attributeName, isAsc = true) {
        return pokemons.sort((a, b) =>
            isAsc
                ? a[attributeName] - b[attributeName]
                : b[attributeName] - a[attributeName]
        );
    }

    /**
     * Función que renderiza la lista filtrada de pokemones según su nombre o tipos.
     * @param {Array<Pokemon>} pokemons - Array de pokemones
     * @param {"name" | "types"} attributeType - Nombre del pokémon por el que se va a filtrar.
     * @param {String | Array<string>} valueToFilter - Valor por el que se va a filtrar.
     * @return {Array<Pokemon>} - Array de pokemones filtrado.
     */
    function filterPokemonByAttribute(pokemons, attributeType, valueToFilter) {
        if (valueToFilter.length == 0) return pokemons;
        switch (attributeType) {
            case "name":
                return pokemons.filter(pokemon => {
                    const name = pokemon.name.toLowerCase();
                    return name.includes(String(valueToFilter).toLowerCase());
                });

            case "types":
                return pokemons.filter(pokemon => {
                    // Bandera para saber si todos los tipos del buscados son iguales al del pokemon.
                    let allTypes = true;
                    // @ts-ignore
                    valueToFilter.forEach(type => {
                        if (!pokemon.typeNames.includes(type)) {
                            allTypes = false;
                        }
                    });
                    return allTypes;
                });
        }
    }

    /**
     * Función que devuelve una lista de pokemones según su generación.
     * @param {Number} genNumber - Número de la generación que se quiere cargar-
     */
    async function handleChangeGen(genNumber) {
        const ids = await getPokemonIDsByGeneration(genNumber);
        const pokemons = await getAllPokemonInfo(ids);

        return pokemons.sort((a, b) => a.id - b.id);
    }

    /**
     * Función que renderiza la lista
     * @param {Array<object>} pokemons - Nuevo array de objetos que se van a renderizar
     * @param {HTMLElement} pokemonContainer - Contenedor donde se va a renderizar la lista.
     */
    function renderList(pokemons, pokemonContainer) {
        pokemonContainer.appendChild(generatePokemonPages(pokemons));
    }

    return {
        sortPokemonByAttribute,
        filterPokemonByAttribute,
        handleChangeGen,
        renderList,
    };
};
