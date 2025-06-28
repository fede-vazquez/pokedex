import { getAllPokemonInfo } from "./apiRequests/getAllPokemonsInfo";
import { getPokemonsIdByGeneration } from "./apiRequests/getPokemonsIdByGeneration";
import "./style.css";

const pokemonsIds = await getPokemonsIdByGeneration(1);

console.log(await getAllPokemonInfo(pokemonsIds));

document.querySelector("#app").innerHTML = `
  <div>
  </div>
`;
