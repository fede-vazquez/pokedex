import { getPokemonInfoByID } from "./apiRequests/getPokemonInfoByID";
import { pokemonDetails } from "./pages/pokemonDetails";
import "./style.css";
import "./styles/details.css";

const id = new URL(String(location)).searchParams.get("id");

const pokemon = await getPokemonInfoByID(Number(id));

const app = document.querySelector("#app");

app.appendChild(pokemonDetails(pokemon));
