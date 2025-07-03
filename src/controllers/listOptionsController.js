/**@type {ListOptions} */
let defaultListOptions = {
    genNumber: 1,
    nameToFilter: "",
    typesToFilter: [],
    sortByAttribute: { type: "pokedexNumber", isAsc: true },
    lastPage: 1,
};

/**
 * Función que controla las opciones de la lista que renderiza la vista del home.
 */
export function listOptionsController() {
    // Carga por defecto si no existe
    if (!sessionStorage.getItem("ListOptions"))
        sessionStorage.setItem(
            "ListOptions",
            JSON.stringify(defaultListOptions)
        );

    /**
     * Función que setea y devuelve las nuevas opciones al listOptions.
     * @param {ListOptions} newOptions - Nuevas opciones del renderizado.
     * @returns {Object} - Nuevo objeto de opciones modificado.
     */
    const setOptions = newOptions => {
        const newListOptions = { ...getOptions(), ...newOptions };

        sessionStorage.setItem("ListOptions", JSON.stringify(newListOptions));
        return newListOptions;
    };

    /**
     * Función que devuelve las opciones de renderizado del sessionStorage.
     * @return {ListOptions}
     */
    const getOptions = () => JSON.parse(sessionStorage.getItem("ListOptions"));

    return {
        setOptions,
        getOptions,
    };
}
