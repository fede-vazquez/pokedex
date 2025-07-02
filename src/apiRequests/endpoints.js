const API_URL = "https://pokeapi.co/api/v2";
const POKEMONS = API_URL + "/pokemon";
const GENERATIONS = API_URL + "/generation";

/**
 * Objeto que contiene diferentes métodos para usar endpoints de forma mas simple evitando magic strings.
 * @property {string} POKEMONS - Endpoint para obtener todos los pokemones.
 * @property {function} pokemonById - Función para obtener endpoint personalizado.
 * @property {function} pokemonsByGeneration - Función para obtener endpoint personalizado.
 * @property {string} GENERATIONS - Endpoint para obtener todas las generaciones.
 */

export const endpoints = Object.freeze({
    POKEMONS,

    /**
     *  Función que recibe un id y devuelve el endpoint para obtener un pokémon por su id.
     * @param {Number} id - Número del pokémon.
     * @returns {String} - Endpoint personalizado para hacer la petición a la API
     */
    pokemonById: id => POKEMONS + "/" + id,

    /**
     * Función que recibe un número de generación y devuelve el endpoint para obtener los pokemones de dicha generación.
     * @param {Number} generationNumber - Número de la generación.
     * @returns {String} - Endpoint personalizado para hacer la petición a la API
     */
    pokemonsByGeneration: generationNumber =>
        API_URL + "/generation/" + generationNumber,

    /**
     * Función que devuelve un objeto con las URLs de los art-works originales.
     * @param {Number} id - Número del pokémon.
     * @returns {{normal: String, shiny: String}} - URLs de los art-works originales.
     */
    oficialArtWorkURLsByPokemonId: id => {
        return {
            normal: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
            shiny: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${id}.png`,
        };
    },
    GENERATIONS,
});
