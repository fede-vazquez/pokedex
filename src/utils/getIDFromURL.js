/**
 * Función que extrae el ID de las url de la API. (En este caso todos los endpoints lo tienen al final)
 * @param {String} url - URL del que vamos a extraer el ID.
 * @return {Number} - ID de la URL.
 * @example "https://pokeapi.co/api/v2/pokemon/1/" -> 1
 */
export const getIDFromURL = url => Number(url.split("/").reverse()[1]);
