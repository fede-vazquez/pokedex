import { generatePokemonList } from "./components/generatePokemonList";
import { pokemonsData } from "./data/pokemonsData";
import "./style.css";
import { paginationArray } from "./utils/paginationArray";

const app = document.querySelector("#app");

const pages = paginationArray(pokemonsData, 20);

const list = generatePokemonList(pages.getPage(2));

app.appendChild(list);
