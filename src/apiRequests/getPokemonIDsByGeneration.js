import { endpoints } from "./endpoints";

/**
 * Función que solicita los ids de los pokemones de una generación.
 * @param {*} generationNumber - Número de la generación.
 * @returns {Promise<Array<number>>} - Array de ids de los pokemones de la generación.
 */

export async function getPokemonsIDByGeneration(generationNumber) {
    const req = await fetch(endpoints.pokemonsByGeneration(generationNumber));
    if (!req.ok) return [];
    const res = await req.json();

    const data = res.pokemon_species;

    // Extraigo el id de la url para luego usarla con getPokemonGeneralInfoById.
    const ids = data.map(p => Number(p.url.split("/").reverse()[1]));

    return ids;
}
