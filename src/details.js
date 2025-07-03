import { getPokemonInfoByID } from "./apiRequests/getPokemonInfoByID";
import { generatePokemonDetails } from "./components/generatePokemonDetails";
import "./style.css";
import "./styles/details.css";

const id = new URL(String(location)).searchParams.get("id");

const pokemon = await getPokemonInfoByID(Number(id));

const app = document.querySelector("#app");

const detailContainer = generatePokemonDetails(pokemon);

app.appendChild(detailContainer);
