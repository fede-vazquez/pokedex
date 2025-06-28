// Función que devuelve un array de pokemones.

import { getPokemonGeneralInfoByid } from "./getPokemonGeneralInfoById";

// pokemonIds: Number[]
export async function getAllPokemonInfo(pokemonIds) {
    const requests = [];

    pokemonIds.forEach(id => {
        requests.push(getPokemonGeneralInfoByid(id));
    });

    return Promise.all(requests);
}
