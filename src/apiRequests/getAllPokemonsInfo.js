import { getPokemonGeneralInfoByID } from "./getPokemonGeneralInfoByID.js";

/**
 * Función para solicitar la información de pokemones según un array de ids dado.
 * @param {Array<number>} pokemonIds - Array de ids de pokemones.
 * @returns {Promise<Array<Pokemon>>} - Array con promesas que devuelven la información de cada pokémon.
 */

export function getAllPokemonInfo(pokemonIds) {
    const requests = [];

    pokemonIds.forEach(id => {
        requests.push(getPokemonGeneralInfoByID(id));
    });

    return Promise.all(requests);
}
