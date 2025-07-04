import { getGenerationIDs } from "./apiRequests/getGenerationIDs.js";
import { getPokemonIDsByGeneration } from "./apiRequests/getPokemonIDsByGeneration.js";
import { getAllPokemonInfo } from "./apiRequests/getAllPokemonsInfo.js";
import { generateListControlPanel } from "./components/generateListControlPanel.js";
import { pokemonListReducer } from "./controllers/pokemonListReducer.js";
import { listOptionsController } from "./controllers/listOptionsController.js";
import { getTypeNames } from "./apiRequests/getTypeNames.js";
import { errorPage } from "./pages/errorPage.js";
import { generateHeader } from "./components/generateHeader.js";
import { generateFooter } from "./components/generateFooter.js";
import "./style.css";

const app = document.querySelector("#app");
export const { getOptions, setOptions } = listOptionsController();

// List de pokemones
let pokemons = [];

// Contenedor principal de los pokemones
const pokemonContainer = document.createElement("div");

try {
    // Lista para navegar entre generaciones
    const generationIDs = await getGenerationIDs();

    // Panel controlador para filtrar y ordenar.
    const typesList = await getTypeNames();

    const pokemonsIds = await getPokemonIDsByGeneration(getOptions().genNumber);
    pokemons = await getAllPokemonInfo(pokemonsIds);

    app.appendChild(generateHeader());
    app.appendChild(generateListControlPanel(typesList, generationIDs));
    app.appendChild(pokemonContainer);
    app.appendChild(generateFooter());
} catch (error) {
    app.appendChild(
        errorPage({
            errorMessage: error.message,
        })
    );
}
export const renderPokemons = pokemonListReducer(pokemons, pokemonContainer);

renderPokemons(getOptions());
