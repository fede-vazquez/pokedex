import { generatePokemonList } from "./components/generatePokemonList";
import { pokemonsData } from "./data/pokemonsData";
import "./style.css";

const app = document.querySelector("#app");

const list = generatePokemonList(pokemonsData);

app.appendChild(list);
