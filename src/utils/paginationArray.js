/**
 * Función que devuelve un objeto que contiene un array de elementos paginados y el número total de páginas.
 * @param {Array} array - Array a paginar.
 * @param {number} pageSize - Número de elementos por página.
 */

export const paginationArray = (array, pageSize) => {
    // Paginación del array con una cantidad de elementos por cada página
    const pages = [];
    for (let i = 0; i < array.length; i = i + pageSize) {
        pages.push(array.slice(i, i + pageSize));
    }

    /**
     * Método que devuelve la página por su número. (página 1 = pages[0])
     * @param {Number} - Número de página.
     * @returns {Array<object>} - Array de la página con objetos
     */
    const getPage = number => {
        return pages[number - 1] ? pages[number - 1] : [];
    };

    return {
        getPage,

        /**Cantidad de páginas */
        pagesCount: pages.length,
    };
};
