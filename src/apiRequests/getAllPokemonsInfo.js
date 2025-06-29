import { getPokemonGeneralInfoByID } from "./getPokemonGeneralInfoByID";

/**
 * Función para solicitar la información de pokemones según un array de ids dado.
 * @param {Array<number>} pokemonIds - Array de ids de pokemones.
 * @returns {Promise<Array<{id: number, pokedexNumber: number, name: string, height: number, weight: number, sprite: string, typeNames: Array<string>}>>} - Array con promesas que devuelven la información de cada pokémon.
 */

export async function getAllPokemonInfo(pokemonIds) {
    const requests = [];

    pokemonIds.forEach(id => {
        requests.push(getPokemonGeneralInfoByID(id));
    });

    return Promise.all(requests);
}
