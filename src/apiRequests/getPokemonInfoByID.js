import { endpoints } from "./endpoints";
import { getEvolutionChainByID } from "./getEvolutionChainByID";

/**
 * Función que solicita la información general de un pokémon por su id.
 * @param {Number} searchId - Id del pokémon.
 * @returns {Promise<DetailedPokemon>}
 */
export async function getPokemonInfoByID(searchId) {
    const req = await fetch(endpoints.pokemonById(searchId));
    if (!req.ok) throw new Error("No se encontró la información del pokemon.");
    const res = await req.json();

    const {
        id,
        id: pokedexNumber,
        name,
        height,
        weight,
        sprites: {
            other: {
                ["official-artwork"]: {
                    front_default: normal,
                    front_shiny: shiny,
                },
            },
        },
        types,
        stats,
    } = res;

    const baseStats = stats.map(({ base_stat, stat }) => {
        return { name: stat.name, base: base_stat };
    });
    const typeNames = types.map(({ type }) => type.name);

    const evolutionChain = await getEvolutionChainByID(id);

    return {
        id,
        pokedexNumber,
        name,
        height,
        weight,
        artWorks: { normal, shiny },
        typeNames,
        baseStats,
        evolutionChain,
    };
}
