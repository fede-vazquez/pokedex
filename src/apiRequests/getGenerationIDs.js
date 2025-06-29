import { endpoints } from "./endpoints";

/**
 * Función que trae las generaciones actuales de pokemones según la API.
 * @returns {Array<number>} - Array con los distintos ids de generaciones de pokemones (ids dados por la API).
 */

export async function getGenerationIDs() {
    const req = await fetch(endpoints.GENERATIONS);
    if (!req.ok) return {};

    // Documentación para ver respuesta de la api: https://pokeapi.co/docs/v2#pokemon
    const res = await req.json();

    const data = res.results;

    // Extraigo el id de la url para luego usarla con endpoints.getPokemonIDsByGeneration.
    const ids = data.map(p => Number(p.url.split("/").reverse()[1]));

    return ids;
}
