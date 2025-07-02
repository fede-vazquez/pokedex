import { endpoints } from "../apiRequests/endpoints";
import { generatePokemonList } from "./generatePokemonList";
import { generatePokemonTypesList } from "./generatePokemonTypesList";

/**
 * Función que genera un elemento HTML con la información de un pokemon.
 * @param {*} pokemon - Información del pokemon a mostrar.
 * @returns
 */
export const generatePokemonDetails = ({
    id,
    pokedexNumber,
    name,
    typeNames,
}) => {
    const oficialArtWork = endpoints.oficialArtWorkURLsByPokemonId(id);

    const container = document.createElement("div");
    container.classList.add("pokmeon-container");

    container.innerHTML = `<div class="pokemon-container">
            <div class="pokemon-img-container type-${typeNames[0]}">
                <span class="pokedex-number">N° ${pokedexNumber}</span>
                <img src="${oficialArtWork.normal}"
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

const evolutionChain = [
    {
        id: 1,
        pokedexNumber: 1,
        name: "bulbasaur",
        height: 7,
        weight: 69,
        sprites: {
            normal: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
        },
        typeNames: ["grass", "poison"],
    },
    {
        id: 3,
        pokedexNumber: 3,
        name: "venusaur",
        height: 20,
        weight: 1000,
        sprites: {
            normal: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
            shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/3.png",
        },
        typeNames: ["grass", "poison"],
    },
    {
        id: 2,
        pokedexNumber: 2,
        name: "ivysaur",
        height: 10,
        weight: 130,
        sprites: {
            normal: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
            shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png",
        },
        typeNames: ["grass", "poison"],
    },
];
