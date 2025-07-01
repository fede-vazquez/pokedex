import { generateGenerationList } from "./components/generateGenerationList";
import { handleChargeGen } from "./utils/pokemonsController";
import "./style.css";
import { getGenerationIDs } from "./apiRequests/getGenerationIDs";

/**Contenedor principal de main */
const pokemonContainer = document.createElement("div");

const app = document.querySelector("#app");

const generationIDs = await getGenerationIDs();
const genList = generateGenerationList(generationIDs, pokemonContainer);

app.appendChild(genList);

app.appendChild(pokemonContainer);

// Ejecutamos la primera vez
handleChargeGen(1, pokemonContainer);
