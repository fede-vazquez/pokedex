const API_URL = "https://pokeapi.co/api/v2";
const POKEMONS = API_URL + "/pokemon";

/**
 * Objeto que contiene diferentes métodos para usar endpoints de forma mas simple evitando magic strings.
 * @property {string} POKEMONS - Endpoint para obtener todos los pokemones.
 * @property {function} pokemonById - Función que recibe un id y devuelve el endpoint para obtener un pokémon por su id.
 * @property {function} pokemonsByGeneration - Función que recibe un número de generación y devuelve el endpoint para obtener los pokemones de dicha generación.
 */

export const endpoints = Object.freeze({
    POKEMONS,
    pokemonById: id => POKEMONS + "/" + id,
    pokemonsByGeneration: generationNumber =>
        API_URL + "/generation/" + generationNumber,
});
