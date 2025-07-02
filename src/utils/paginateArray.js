/**
 * Función que pagina un array dado en uno solo.
 * @param {Array} array - Array a paginar.
 * @param {Number} pageSize - Número de elementos por página.
 * @returns Objeto con un método para seleccionar una página y una variable para saber la cantidad de páginas.
 */
export const paginateArray = (array, pageSize) => {
    // Paginación del array con una cantidad de elementos por cada página
    const pages = [];
    for (let i = 0; i < array.length; i = i + pageSize) {
        pages.push(array.slice(i, i + pageSize));
    }

    /**
     * Método que devuelve la página por su número. (página 1 = pages[0])
     * @param {Number} pageNumber - Número de página.
     * @returns {Array<object>} - Array de la página con objetos
     */
    const getPage = pageNumber => {
        return pages[pageNumber - 1] ? pages[pageNumber - 1] : [];
    };

    return {
        getPage,

        /**Cantidad de páginas */
        pagesCount: pages.length,
    };
};
