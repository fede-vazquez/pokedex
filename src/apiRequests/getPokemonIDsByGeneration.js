import { getIDFromURL } from "../utils/getIDFromURL";
import { endpoints } from "./endpoints";

/**
 * Función que solicita los ids de los pokemones de una generación.
 * @param {Number} generationNumber - Número de la generación.
 * @returns {Promise<Array<number>>} - Array de ids de los pokemones de la generación.
 */

export async function getPokemonIDsByGeneration(generationNumber) {
    const req = await fetch(endpoints.pokemonsByGeneration(generationNumber));
    if (!req.ok)
        throw new Error(
            "No se pudo obtener la información de las generaciones."
        );

    const res = await req.json();

    const data = res.pokemon_species;

    // Extraigo el id de la url para luego usarla con getPokemonGeneralInfoById.
    const ids = data.map(p => getIDFromURL(p.url));

    return ids;
}
