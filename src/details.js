import { getPokemonInfoByID } from "./apiRequests/getPokemonInfoByID";
import { errorPage } from "./pages/errorPage";
import { pokemonDetails } from "./pages/pokemonDetails";
import "./style.css";

const id = new URL(String(location)).searchParams.get("id");
const app = document.querySelector("#app");

try {
    const pokemon = await getPokemonInfoByID(Number(id));
    app.appendChild(pokemonDetails(pokemon));
} catch (err) {
    console.log(err);

    app.appendChild(
        errorPage({
            errorMessage: err.message,
        })
    );
}
