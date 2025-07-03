import { getGenerationIDs } from "./apiRequests/getGenerationIDs";
import { getPokemonIDsByGeneration } from "./apiRequests/getPokemonIDsByGeneration";
import { getAllPokemonInfo } from "./apiRequests/getAllPokemonsInfo";
import { generateListControlPanel } from "./components/generateListControlPanel";
import { pokemonListReducer } from "./controllers/pokemonListReducer";
import { listOptionsController } from "./controllers/listOptionsController";
import { getTypeNames } from "./apiRequests/getTypeNames";
import { errorPage } from "./pages/errorPage";
import { generateHeader } from "./components/generateHeader";
import { generateFooter } from "./components/generateFooter";
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
