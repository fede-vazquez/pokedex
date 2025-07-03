import { getIDFromURL } from "../utils/getIDFromURL";
import { endpoints } from "./endpoints";
import { getAllPokemonInfo } from "./getAllPokemonsInfo";

/**
 * Función que devuelve los pokemones de la cadena evolutiva de un pokemon específico.
 * @param {Number} id - ID del pokémon por el que se va a buscar su cadena evolutiva.
 * @return {Promise<Array<Pokemon>>}
 */
export async function getEvolutionChainByID(id) {
    const speciesReq = await fetch(endpoints.pokemonSpecieByID(id));
    const { evolution_chain } = await speciesReq.json();
    const evolutionChainID = Number(getIDFromURL(evolution_chain.url));

    const evoReq = await fetch(endpoints.evolutionChainByID(evolutionChainID));
    const { chain: evolutionChain } = await evoReq.json();

    const pokemonIDsFromEvolutionChain = [];
    recursiveChain(evolutionChain);

    /**
     * Función recursiva que busca cada id de la cadena evolutiva y lo agrega al contenedor pokemonIDsFromEvolutionChain.
     * @param {EvolutionChain} evolutionChain - Objecto que contiene cadena evolutiva
     */
    function recursiveChain({ species, evolves_to }) {
        pokemonIDsFromEvolutionChain.push(getIDFromURL(species.url));
        if (evolves_to.length > 0) {
            evolves_to.forEach(evo => recursiveChain(evo));
        }
    }

    // Si es 1 significa que no tiene evoluciones.
    if (pokemonIDsFromEvolutionChain.length === 1) return [];

    const pokemons = await getAllPokemonInfo(pokemonIDsFromEvolutionChain);
    return pokemons;
}

/*
    evolutionChain.species.url
    evolves_to[0].species.url
    evolutionChain.evolves_to[0].evolves_to[0].species.url
*/
