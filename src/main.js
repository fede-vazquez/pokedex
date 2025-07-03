import { generateGenerationList } from "./components/generateGenerationList";
import { getGenerationIDs } from "./apiRequests/getGenerationIDs";
import { pokemonListController } from "./controllers/pokemonListController";
import { getPokemonIDsByGeneration } from "./apiRequests/getPokemonIDsByGeneration";
import { getAllPokemonInfo } from "./apiRequests/getAllPokemonsInfo";
import "./style.css";
import { generateFilterAndSortPanel } from "./components/generateFilterAndSortPanel";
import { pokemonListReducer } from "./controllers/pokemonListReducer";
import { listOptionsController } from "./controllers/listOptionsController";

const app = document.querySelector("#app");

// Lista para navegar entre generaciones
const generationIDs = await getGenerationIDs();
const genList = generateGenerationList(generationIDs);
app.appendChild(genList);

// Panel controlador para filtrar y ordenar.
// app.appendChild(generateFilterAndSortPanel());

// Contenedor principal de los pokemones
const pokemonContainer = document.createElement("div");
app.appendChild(pokemonContainer);

export const { getOptions, setOptions } = listOptionsController();

const pokemonsIds = await getPokemonIDsByGeneration(getOptions().genNumber);
const pokemons = await getAllPokemonInfo(pokemonsIds);

export const renderPokemons = pokemonListReducer(pokemons, pokemonContainer);

/**@type {ListOptions} */
let defaultListOptions = {
    genNumber: 1,
    nameToFilter: "",
    typesToFilter: [],
    sortByAttribute: { type: "pokedexNumber", isAsc: true },
    lastPage: 1,
};

renderPokemons(getOptions() || defaultListOptions);
