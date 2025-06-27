import { endpoints } from "./endpoints";

export async function getPokemonsIdByGeneration(generationNumber) {
    const req = await fetch(endpoints.pokemonsByGeneration(generationNumber));
    if (!req.ok) return [];
    const res = await req.json();

    const data = res.pokemon_species;

    // Extraigo el id de la url para luego usarla con getPokemonGeneralInfoById.
    const urls = data.map(p => Number(p.url.split("/").reverse()[1]));

    return urls;
}
