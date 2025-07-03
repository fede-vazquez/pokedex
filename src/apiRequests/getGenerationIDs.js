import { getIDFromURL } from "../utils/getIDFromURL";
import { endpoints } from "./endpoints";

/**
 * Función que trae las generaciones actuales de pokemones según la API.
 * @returns {Promise<Array<number>>} - Array con los distintos ids de generaciones de pokemones (ids dados por la API).
 */

export async function getGenerationIDs() {
    const req = await fetch(endpoints.GENERATIONS);
    if (!req.ok)
        throw new Error("No se encontró la información de las generaciones.");

    const res = await req.json();

    const data = res.results;

    const ids = data.map(p => getIDFromURL(p.url));

    return ids;
}
