import { getOptions, renderPokemons, setOptions } from "../main";

const options = {
    pokedexNumber: "Número de la pokedex",
    height: "Altura",
    weight: "Peso",
};

export const generateSelectToOrderList = () => {
    const selectContainer = document.createElement("div");
    selectContainer.classList.add("select-container");

    // Crea el label para el select
    const labelSelect = document.createElement("label");
    labelSelect.innerText = "Ordenar por:";
    labelSelect.htmlFor = "select-order";
    selectContainer.appendChild(labelSelect);

    // Crea el select para ordenar
    const selectOrder = document.createElement("select");
    selectOrder.id = "select-order";
    selectOrder.classList.add("select-order");

    Object.entries(options).forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.value = option[0];
        optionElement.innerText = option[1];
        selectOrder.appendChild(optionElement);
    });

    // Setea el valor del select según la opción actual
    selectOrder.value = getOptions().sortByAttribute.type;
    selectOrder.onchange = handleSelectChange;
    selectContainer.appendChild(selectOrder);

    // Crea el botón para cambiar el orden ascendente/descendente
    const orderButton = document.createElement("button");
    orderButton.classList.add("order-button");
    orderButton.innerHTML = getOptions().sortByAttribute.isAsc
        ? `Ascendente`
        : `Descendente`;

    orderButton.onclick = e => {
        const isAsc = getOptions().sortByAttribute.isAsc;
        handleSelectOrder(!isAsc);
        orderButton.innerHTML = !isAsc ? `Ascendente` : `Descendente`;
    };
    selectContainer.appendChild(orderButton);

    return selectContainer;
};

/**
 * Maneja el evento de cambio del select para ordenar la lista de Pokémon.
 * Actualiza las opciones de ordenamiento y vuelve a renderizar la lista.
 * @param {*} e - Evento de cambio del select
 */
function handleSelectChange(e) {
    const selectedValue = e.target.value;
    const isAsc = getOptions()?.sortByAttribute.isAsc;

    renderPokemons(
        setOptions({
            sortByAttribute: {
                type: selectedValue,
                isAsc: isAsc,
            },
        })
    );
}

/**
 * Maneja el evento de cambio del orden ascendente/descendente.
 * @param {*} isAsc - Indica si el orden es ascendente o descendente
 */
function handleSelectOrder(isAsc) {
    renderPokemons(
        setOptions({
            sortByAttribute: {
                type: getOptions().sortByAttribute.type,
                isAsc: isAsc,
            },
        })
    );
}
