import { generatePokemonDetails } from "./components/generatePokemonDetails";
import "./style.css";
import "./styles/details.css";

const pokemon = {
    id: 1,
    pokedexNumber: 1,
    name: "bulbasaur",
    height: 7,
    weight: 69,
    sprites:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    typeNames: ["grass", "poison"],
};

const id = new URL(String(location)).searchParams.get("id");

console.log(id);

const app = document.querySelector("#app");

const detailContainer = generatePokemonDetails(pokemon);

app.appendChild(detailContainer);
