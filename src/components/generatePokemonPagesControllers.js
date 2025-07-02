/**
 *
 * @param {Number} totalPages - Número total de páginas.
 * @param {Function} handleChangePage - Función que re renderiza la lista de pokemones según el número la página.
 * @return {HTMLElement} - Elemento ul con controladores para la paginación.
 */
export const generatePokemonPagesControllers = (
    totalPages,
    handleChangePage
) => {
    const controllersContainer = document.createElement("ul");
    controllersContainer.classList.add("controllers-container");

    // Por cada página agregamos un li que al apretarlo se re renderice la página de pokemones.
    for (let page = 1; page <= totalPages; page++) {
        const listItem = document.createElement("li");
        listItem.classList.add("page-number-controller");
        listItem.innerText = String(page);

        listItem.onclick = () => handleChangePage(page);

        controllersContainer.appendChild(listItem);
    }

    return controllersContainer;
};
