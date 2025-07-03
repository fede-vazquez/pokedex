/**
 * @typedef {Object} Pokemon
 * @property {Number} id - ID interno del Pokémon.
 * @property {Number} pokedexNumber - Número en la Pokedex.
 * @property {String} name - Nombre del Pokémon.
 * @property {Number} height - Altura del Pokémon.
 * @property {Number} weight - Peso del Pokémon.
 * @property {{ normal: String, shiny: String }} sprites - Sprites, normal y shiny.
 * @property {Array<String>} typeNames - Tipos del Pokémon (por ejemplo: ["grass", "poison"]).
 */

/**
 * @typedef {Object} DetailedPokemon
 * @property {Number} id - ID interno del Pokémon.
 * @property {Number} pokedexNumber - Número en la Pokedex.
 * @property {String} name - Nombre del Pokémon.
 * @property {Number} height - Altura del Pokémon.
 * @property {Number} weight - Peso del Pokémon.
 * @property {{ normal: String, shiny: String }} artWorks - Imágenes, normal y shiny.
 * @property {Array<String>} typeNames - Tipos del Pokémon (por ejemplo: ["grass", "poison"]).
 * @property {Array<{name: String}>} baseStats
 * @property {Array<Pokemon>} evolutionChain - Cadena evolutiva del pokemon.
 */

/**
 * @typedef {Object} EvolutionChain
 * @property {Array<EvolutionChain>} evolves_to - Array con las demás cadenas evolutivas.
 * @property {{name: String, url: string}} species - Datos sobre un pokemon específico.
 */

/**
 * @typedef {Object} ListOptions
 * @property {Number} [genNumber] - Número de la generación.
 * @property {String} [nameToFilter] - Nombre por el que se filtra.
 * @property {Array<string>} [typesToFilter] - Array de tipos.
 * @property {{type: "pokedexNumber" | "height" | "weight", isAsc: Boolean}} [sortByAttribute] - Atributo por el que se va a ordenar.
 * @property {Number} [lastPage] - Ultima página vista.
 */
