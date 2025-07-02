import { generatePokemonTypesList } from "./generatePokemonTypesList";

/**
 * Función que genera una card de un pokémon dependiendo de la información dada.
 * @param {Object} pokemon - Objeto que contiene la información del pokémon.
 * @param {string} pokemon.id - ID del pokémon.
 * @param {string} pokemon.name - Nombre del pokémon.
 * @param {number} pokemon.pokedexNumber - Numero de la pokedex del pokémon.
 * @param {Array<string>} pokemon.typeNames - Nombres de los tipos del pokémon.
 * @param {{normal: String, shiny: String}} pokemon.sprites - Objeto que contiene las URLs de los sprites de los pokemones.
 * @returns {HTMLElement} - Elemento li con información del pokémon.
 */

export const generatePokemonCard = ({
    id,
    name,
    pokedexNumber,
    typeNames,
    sprites,
}) => {
    console.log(sprites);

    const newCard = document.createElement("li");
    newCard.classList.add("pokemon-card");
    newCard.classList.add(`type-${typeNames[0]}`);
    newCard.innerHTML = `
    <a href="/details?id=${id}">
        <div class="card-header">
            <h2>${name.replace(name[0], name[0].toUpperCase())}</h2>
            <span>N° ${pokedexNumber}</span>
        </div>
        <div class="card-info">
        ${generatePokemonTypesList(typeNames).outerHTML}
            <div class="card-img">
                <img src="${sprites.normal}" alt="imagen de ${name}">
            </div>

        </div>
    </a>
    `;

    return newCard;
};
