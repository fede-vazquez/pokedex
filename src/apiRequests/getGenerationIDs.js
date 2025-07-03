import { getIDFromURL } from "../utils/getIDFromUrl";
import { endpoints } from "./endpoints";

/**
 * Función que trae las generaciones actuales de pokemones según la API.
 * @returns {Promise<Array<number>>} - Array con los distintos ids de generaciones de pokemones (ids dados por la API).
 */

export async function getGenerationIDs() {
    const req = await fetch(endpoints.GENERATIONS);
    if (!req.ok)
        throw new Error("No se encontro la información de las generaciones.");
    // Documentación para ver respuesta de la api: https://pokeapi.co/docs/v2#pokemon
    const res = await req.json();

    const data = res.results;

    const ids = data.map(p => getIDFromURL(p.url));

    return ids;
}
