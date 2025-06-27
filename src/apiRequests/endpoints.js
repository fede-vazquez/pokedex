const API_URL = "https://pokeapi.co/api/v2";
const POKEMONS = API_URL + "/pokemon";

// Objeto que contiene diferentes métodos para usar endpoints de forma mas simple evitando magic strings.
export const endpoints = Object.freeze({
    POKEMONS,
    pokemonById: id => POKEMONS + "/" + id,
    pokemonsByGeneration: generationNumber =>
        API_URL + "/generation/" + generationNumber,
});
