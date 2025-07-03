/**
 * Función que devuelve componente ul con los controles para cambiar entre páginas.
 * @param {Number} totalPages - Número total de páginas.
 * @param {Function} handleClick - Función que re renderiza la lista de pokemones según el número la página.
 * @param {Number} lastPage - Ultima página cargada.
 * @return {HTMLElement} - Elemento ul con controladores para la paginación.
 */
export const generatePokemonPagesControllers = (
    totalPages,
    handleClick,
    lastPage
) => {
    const controllersContainer = document.createElement("ul");
    controllersContainer.classList.add("controllers-container");

    // Por cada página agregamos un li que al apretarlo se re renderiza la página de pokemones.
    for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
        const listItem = document.createElement("li");
        listItem.classList.add("page-number-controller");

        if (pageNumber == lastPage) listItem.classList.add("active-page");
        listItem.innerText = String(pageNumber);

        listItem.onclick = e => handleClick(pageNumber, e.target);

        controllersContainer.appendChild(listItem);
    }

    return controllersContainer;
};
