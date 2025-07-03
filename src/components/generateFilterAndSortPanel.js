import { filterPokemonByAttribute } from "../main";

export const generateFilterAndSortPanel = () => {
    const container = document.createElement("section");
    const searchInput = document.createElement("input");
    searchInput.type = "search";
    searchInput.oninput = handleSearch;

    container.append(searchInput);

    return container;
};

const handleSearch = e => {
    filterPokemonByAttribute("name", e.target.value.trim());
};
