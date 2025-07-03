/**
 * Función que genera una lista de tipos seleccionados para el filtro de pokemones.
 * @param {Array<string>} types - Lista de tipos seleccionados
 * @param {Function} handleClick - Función que maneja el evento de eliminar un tipo del filtro
 * @returns {HTMLElement} - Elemento ul con los tipos seleccionados
 */
export const generateSelectedTypesList = (types, handleClick) => {
    const typesList = document.createElement("ul");
    typesList.classList.add("selected-types-list");

    types.forEach(type => {
        const typeItem = document.createElement("li");
        typeItem.classList.add("type-item", `type-${type}`);
        typeItem.innerText = type;
        typeItem.onclick = e => handleClick(e);

        typesList.appendChild(typeItem);
    });

    return typesList;
};
