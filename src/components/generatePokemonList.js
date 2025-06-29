import { generatePokemonCard } from "./generatePokemonCard";

/**
 * Función que genera una lista de cards de pokemones dada una lista de pokemones.
 * @param {Array<object>} pokemonList - lista de pokemones.
 * @return {HTMLElement} - Ul de pokemones.
 */
export const generatePokemonList = pokemonList => {
    const list = document.createElement("ul");
    list.classList.add("pokemon-list");

    pokemonList.forEach(pokemon => {
        list.appendChild(generatePokemonCard(pokemon));
    });

    return list;
};
