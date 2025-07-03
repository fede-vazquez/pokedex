import { generatePokemonList } from "../components/generatePokemonList";
import { generatePokemonTypesList } from "../components/generatePokemonTypesList";
import "../styles/details.css";

/**
 * Función que genera un elemento HTML con la información de un pokemon.
 * @param {DetailedPokemon} pokemon - Información del pokemon a mostrar.
 * @returns {HTMLElement} - Elemento contenedor de la información del pokemon.
 */
export const pokemonDetails = ({
    pokedexNumber,
    name,
    height,
    weight,
    artWorks,
    typeNames,
    baseStats,
    evolutionChain,
}) => {
    const container = document.createElement("div");
    container.classList.add("pokemon-container");

    container.innerHTML = `<div class="pokemon-container">
            <div class="pokemon-img-container type-${typeNames[0]}">
                <span class="pokedex-number">N° ${pokedexNumber}</span>
                <img src="${artWorks.normal}"
                    alt="imagen de ${name}">
            </div>

            <div class="more-details-pokemon">
                <h1>${name.replace(name[0], name[0].toUpperCase())}</h1>
                ${generatePokemonTypesList(typeNames).outerHTML}

                <div class="evolution-chain">
                    <h2>Cadena evolutiva</h2>
                    ${generatePokemonList(evolutionChain).outerHTML}
                </div>
            </div>
        </div>`;

    return container;
};
