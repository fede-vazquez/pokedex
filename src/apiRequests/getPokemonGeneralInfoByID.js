import { endpoints } from "./endpoints.js";

/**
 * Función que solicita la información general de un pokémon por su id.
 * @param {Number} searchId - Id del pokémon.
 * @returns {Promise<Pokemon>}
 */
export async function getPokemonGeneralInfoByID(searchId) {
    const req = await fetch(endpoints.pokemonById(searchId));
    if (!req.ok) throw new Error("No se encontró la información del pokemon.");

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
    // height se pasa de decímetros a centímetros (1 decímetro = 10 centímetros)
    // weight se pasa de hectograms a kilogramos (1 hectogramo = 0.1 kilogramos)
    return {
        id,
        pokedexNumber,
        name,
        height: height * 10,
        weight: weight / 10,
        sprites: { normal, shiny },
        typeNames,
    };
}
