import { generateGenerationList } from "./components/generateGenerationList";
import { getGenerationIDs } from "./apiRequests/getGenerationIDs";
import { pokemonListController } from "./controllers/pokemonListController";
import "./style.css";
import { getPokemonsIDByGeneration } from "./apiRequests/getPokemonIdsByGeneration";
import { getAllPokemonInfo } from "./apiRequests/getAllPokemonsInfo";

const app = document.querySelector("#app");

// Lista para navegar entre generaciones
const generationIDs = await getGenerationIDs();
const genList = generateGenerationList(generationIDs);
app.appendChild(genList);

// Contenedor principal de los pokemones
const pokemonContainer = document.createElement("div");
pokemonContainer.innerHTML = "Cargando";
app.appendChild(pokemonContainer);

const pokemonsIds = await getPokemonsIDByGeneration(1);
const pokemons = await getAllPokemonInfo(pokemonsIds);

export const { sortPokemonByAttribute, handleChangeGen, renderList } =
    pokemonListController(pokemons, pokemonContainer);

sortPokemonByAttribute("pokedexNumber");
