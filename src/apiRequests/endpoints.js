// Documentación para ver respuesta de la api: https://pokeapi.co/docs/v2

const API_URL = "https://pokeapi.co/api/v2";
const POKEMONS = API_URL + "/pokemon";
const GENERATIONS = API_URL + "/generation";
const TYPES = API_URL + "/type";

/**
 * Objeto que contiene diferentes métodos para usar endpoints de forma mas simple evitando magic strings.
 * @property {string} POKEMONS - Endpoint para obtener todos los pokemones.
 * @property {function} pokemonById - Función para obtener endpoint personalizado.
 * @property {function} pokemonsByGeneration - Función para obtener endpoint personalizado.
 * @property {function} pokemonSpecieByID - Función para obtener endpoint personalizado.
 * @property {string} GENERATIONS - Endpoint para obtener todas las generaciones.
 * @property {string} TYPES - Endpoint para obtener todos los tipos.
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
        GENERATIONS + "/" + generationNumber,

    /**
     * Función que recibe un ID de pokemon y devuelve un endpoint personalizado
     * @param {Number} pokemonID - ID del pokémon.
     * @returns {String} - Endpoint personalizado para la petición de la API
     */
    pokemonSpecieByID: pokemonID => API_URL + "/pokemon-species/" + pokemonID,

    /**
     * Función que recibe un ID de una cadena evolutiva y devuelve un endpoint personalizado
     * @param {Number} evolutionChainID - ID de la cadena evolutiva.
     */
    evolutionChainByID: evolutionChainID =>
        API_URL + "/evolution-chain/" + evolutionChainID,

    GENERATIONS,
    TYPES,
});
