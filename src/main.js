import { getPokemonGeneralInfoByid } from "./apiRequests/getPokemonGeneralInfoById";
import "./style.css";

const poke = await getPokemonGeneralInfoByid(1);

document.querySelector("#app").innerHTML = `
  <div>
  </div>
`;
