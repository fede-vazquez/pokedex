import { getOptions, renderPokemons, setOptions } from "../main";
import { generateSelectedTypesList } from "./generateSelectedTypesList";

export const generateTypesToFilterList = types => {
    // Lee los últimos tipos desde el sessionStorage
    let lastTypes = getOptions().typesToFilter || [];

    /**
     * Función que maneja el evento del selector de tipos.
     * @param {*} event - Evento del selector de tipos
     */
    const handleChange = event => {
        const filterTypes = getOptions().typesToFilter;

        // Si ya existe el tipo termino la ejecución y limpio el select.
        if (filterTypes.includes(event.target.value)) {
            event.target.value = "";
            return;
        }

        // Si es nuevo vuelvo a renderizar los pokemones
        renderPokemons(
            setOptions({
                lastPage: 1,
                typesToFilter: [...filterTypes, event.target.value],
            })
        );

        // Vuelve a renderizar la lista de tipos seleccionados, modificando el contenedor existente para no perder los eventos.
        const newSelectedTypes = generateSelectedTypesList(
            filterTypes.concat(event.target.value),
            handleClick
        );
        selectedTypesContainer.replaceWith(newSelectedTypes);
        selectedTypesContainer = newSelectedTypes;

        // Vuelve a limpiar el selector de tipos
        event.target.value = "";
    };

    /**
     * Función que maneja el evento de eliminar un tipo del filtro.
     * @param {*} event - Evento del botón de eliminar tipo
     */
    const handleClick = event => {
        console.log(event.target.innerText);

        // Elimina el tipo del filtro
        const newTypes = getOptions().typesToFilter.filter(
            t => t !== event.target.innerText.toLowerCase()
        );
        renderPokemons(setOptions({ lastPage: 1, typesToFilter: newTypes }));

        // Vuelve a renderizar la lista de tipos seleccionados, modificando el contenedor existente para no perder los eventos.
        const newSelectedTypes = generateSelectedTypesList(
            newTypes,
            handleClick
        );
        selectedTypesContainer.replaceWith(newSelectedTypes);
        selectedTypesContainer = newSelectedTypes;
    };

    // Contenedor general para los tipos a filtrar.
    const container = document.createElement("div");
    container.classList.add("types-to-filter-container");

    // Selector de tipos.
    const labelSelector = document.createElement("label");
    labelSelector.innerText = "Filtrar por tipo:";
    labelSelector.htmlFor = "types-selector";
    container.appendChild(labelSelector);

    const typesSelector = document.createElement("select");
    typesSelector.id = "types-selector";

    typesSelector.onchange = event => {
        handleChange(event);
    };

    // Opción que se ve por defecto en el selector.
    const typeItem = document.createElement("option");
    typeItem.value = "";
    typeItem.disabled = true;
    typeItem.selected = true;
    typeItem.innerText = "Selecciona un tipo";
    typesSelector.appendChild(typeItem);

    types.forEach(type => {
        const typeItem = document.createElement("option");
        typeItem.value = type;
        typeItem.innerText = type;
        typesSelector.appendChild(typeItem);
    });

    container.appendChild(typesSelector);

    // Crea un contenedor para los tipos seleccionados
    let selectedTypesContainer = generateSelectedTypesList(
        lastTypes,
        handleClick
    );
    container.appendChild(selectedTypesContainer);

    return container;
};
