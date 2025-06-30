import { getGenerationIDs } from "./apiRequests/getGenerationIDs";
import { generateGenerationList } from "./components/generateGenerationList";
import { getAllPokemonInfo } from "./apiRequests/getAllPokemonsInfo";
import { getPokemonsIDByGeneration } from "./apiRequests/getPokemonIdsByGeneration";
import { generatePokemonPages } from "./components/generatePokemonPages";
import "./style.css";

const app = document.querySelector("#app");

const generationIDs = await getGenerationIDs();
const genList = generateGenerationList(generationIDs);

app.appendChild(genList);
const pokemonContainer = document.createElement("div");

app.appendChild(pokemonContainer);

export async function handleChangeGen(genNumber) {
    const ids = await getPokemonsIDByGeneration(genNumber);
    let pokemons = await getAllPokemonInfo(ids);

    pokemonContainer.innerText = "";
    pokemonContainer.appendChild(generatePokemonPages(pokemons));
}
