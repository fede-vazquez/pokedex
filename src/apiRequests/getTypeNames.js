import { endpoints } from "./endpoints.js";

/**
 * Función que trae los tipos de los pokemones según la API.
 * @returns {Promise<Array<string>>} - Array con los distintos tipos de los pokemones.
 */

export async function getTypeNames() {
    // Primer petición para saber la cantidad de pokemones
    const cantTypesReq = await fetch(endpoints.TYPES + "?limit=1");
    if (!cantTypesReq.ok)
        throw new Error("No se encontró la información de los tipos.");

    const cantTypesRes = await cantTypesReq.json();
    const totalTypes = cantTypesRes.count;

    // Pido todos los tipos con un query param
    const typesReq = await fetch(endpoints.TYPES + "?limit=" + totalTypes);
    if (!typesReq.ok)
        throw new Error("No se encontró la información de los tipos.");

    const typesRes = await typesReq.json();

    const types = typesRes.results.map(type => type.name);

    return types;
}

/*
Ejemplo de lo que devuelve la API.
{
    "count": 21,
    "next": "https://pokeapi.co/api/v2/type?offset=1&limit=1",
    "previous": null,
    "results": [
        {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
        }
    ]
}
 */
