import { endpoints } from "./endpoints";
import { getEvolutionChainByID } from "./getEvolutionChainByID";

/**
 * Función que solicita la información general de un pokémon por su id.
 * @param {Number} searchId - Id del pokémon.
 * @returns {Promise<DetailedPokemon>}
 */
export async function getPokemonInfoByID(searchId) {
    const req = await fetch(endpoints.pokemonById(searchId));
    if (!req.ok) {
        console.log(req);
        throw new Error(`No se encontró el pokémon con id ${searchId}.`);
    }

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

    // height se pasa de decímetros a centímetros (1 decímetro = 10 centímetros)
    // weight se pasa de hectograms a kilogramos (1 hectogramo = 0.1 kilogramos)
    return {
        id,
        pokedexNumber,
        name,
        height: height * 10,
        weight: height / 10,
        artWorks: { normal, shiny },
        typeNames,
        baseStats,
        evolutionChain,
    };
}
