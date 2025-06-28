/**
 * Función que genera una card de un pokémon dependiendo de la información dada y la agrega al elemento HTML dado como padre.
 * @param {Object} pokemon - Objeto que contiene la información del pokémon.
 * @param {string} pokemon.name - Nombre del pokémon.
 * @param {number} pokemon.pokedexNumber - Numero de la pokedex del pokémon.
 * @param {number} pokemon.order - Orden del pokémon.
 * @param {Array<string>} pokemon.typeNames - Nombres de los tipos del pokémon.
 * @param {string} pokemon.sprite - URL de la imagen del pokémon.
 * @param {HTMLElement} parent - Elemento padre donde se añadirá la card.
 */

export const generatePokemonCard = (
    { name, pokedexNumber, order, typeNames, sprite },
    parent
) => {
    console.log("Generating card for:", name, order, typeNames, sprite);
    const newCard = document.createElement("li");
    newCard.classList.add("pokemon-card");

    newCard.innerHTML = `
    <div class="card-header">
        <h2 class="card-name">${name}</h2>
        <span class="card-pokedex-number">${pokedexNumber}</span>
        <div class="card-img">
            <img src="${sprite}" alt="imágen de ${name}">
        </div>
    </div>
    <div class="card-info">
        <ul class="card-types">
            ${typesItems(typeNames)}
        </ul>
    </div>
    `;

    parent.appendChild(newCard);
};

// Genera elemento li con información de los tipos del pokémon.
const typesItems = pokemonTypes => {
    return pokemonTypes
        .map(type => `<li class="type-item type-${type}">${type}</li>`)
        .join("");
};
