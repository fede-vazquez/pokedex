import "../styles/pokemon-card-list.css";

import { generatePokemonCard } from "./generatePokemonCard";

/**
 * Función que genera una lista de cards de pokemones dada una lista de pokemones.
 * @param {Array<object>} pokemonList - lista de pokemones.
 * @return {HTMLElement} - Section con lista de pokemones.
 */
export const generatePokemonList = pokemonList => {
    const listContainer = document.createElement("section");
    listContainer.classList.add("pokemon-list-container");

    const list = document.createElement("ul");
    list.classList.add("pokemon-list");

    pokemonList.forEach(pokemon => {
        list.appendChild(generatePokemonCard(pokemon));
    });

    listContainer.appendChild(list);

    return listContainer;
};
