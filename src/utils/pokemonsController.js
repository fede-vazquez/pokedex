import { getAllPokemonInfo } from "../apiRequests/getAllPokemonsInfo";
import { getPokemonsIDByGeneration } from "../apiRequests/getPokemonIdsByGeneration";
import { generatePokemonPages } from "../components/generatePokemonPages";

const ids = await getPokemonsIDByGeneration(1);
let pokemons = await getAllPokemonInfo(ids);

/**
 * Función que ordena los pokemones por número de pokedex y los vuelve a mostrar.
 * @param {Boolean} isAsc - True si es ascendente, false si es descendente.
 * @param {Array<string>} pokemonContainer - Contenedor de los pokemones
 */

export function handleSortPokemonByPokedexNumber(isAsc, pokemonContainer) {
    pokemonContainer.innerText = "Cargando";

    const copia = pokemons.sort((a, b) => {
        return isAsc ? a.id - b.id : a.id + b.id;
    });

    pokemonContainer.innerText = "";
    pokemonContainer.appendChild(generatePokemonPages(copia));
}

/**
 *
 * @param {Number} genNumber - Número de la generación que se quiere cargar
 * @param {Array<string>} pokemonContainer - Contenedor de los pokemones por generación
 */

export async function handleChargeGen(genNumber, pokemonContainer) {
    pokemonContainer.innerText = "Cargando";
    const ids = await getPokemonsIDByGeneration(genNumber);
    pokemons = await getAllPokemonInfo(ids);

    const pokemonSorts = pokemons.sort((a, b) => a.id - b.id);

    pokemonContainer.innerText = "";
    pokemonContainer.appendChild(generatePokemonPages(pokemonSorts));
}
