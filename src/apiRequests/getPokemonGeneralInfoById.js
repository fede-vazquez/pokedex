import { endpoints } from "./endpoints";

// Función que trae la información de un pokemon segun el id.
export async function getPokemonGeneralInfoByid(searchId) {
    const req = await fetch(endpoints.pokemonById(searchId));
    if (!req.ok) return {};

    // Documentación para ver respuesta de la api: https://pokeapi.co/docs/v2#pokemon
    const res = await req.json();

    const {
        id,
        order,
        name,
        height,
        weight,
        sprites: { front_default: sprite },
        types,
    } = res;

    const typeNames = types.map(({ type }) => type.name);
    return { id, order, name, height, weight, sprite, typeNames };
}

/*
    id -> number
    order -> number
    name -> string
    height -> number
    weight -> number
    sprite -> string
    types -> array de objetos -> {name}
*/
