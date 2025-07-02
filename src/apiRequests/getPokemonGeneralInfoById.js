import { endpoints } from "./endpoints";

/**
 * Función que solicita la información general de un pokémon por su id.
 * @param {number} searchId - Id del pokémon.
 * @returns {Promise<{id: number, pokedexNumber: number, name: string, height: number, weight: number, sprites: {normal: String, shiny: String}, typeNames: Array<string>}>}
 */
export async function getPokemonGeneralInfoByID(searchId) {
    const req = await fetch(endpoints.pokemonById(searchId));
    if (!req.ok) return {};
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
