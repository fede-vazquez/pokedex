import { endpoints } from "./endpoints";

/**
 * Función que solicita la información general de un pokémon por su id.
 * @param {Number} searchId - Id del pokémon.
 * @returns {Promise<Pokemon>}
 */
export async function getPokemonGeneralInfoByID(searchId) {
    const req = await fetch(endpoints.pokemonById(searchId));
    if (!req.ok) throw new Error("No se encontro la información del pokemon.");

    // Documentación para ver respuesta de la api: https://pokeapi.co/docs/v2#pokemon
    const res = await req.json();

    const {
        id,
        id: pokedexNumber,
        name,
        height,
        weight,
        sprites: { front_default: normal, front_shiny: shiny },
        types,
    } = res;

    const typeNames = types.map(({ type }) => type.name);
    return {
        id,
        pokedexNumber,
        name,
        height,
        weight,
        sprites: { normal, shiny },
        typeNames,
    };
}
