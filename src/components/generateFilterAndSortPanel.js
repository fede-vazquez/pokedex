import { getOptions, renderPokemons, setOptions } from "../main";

export const generateFilterAndSortPanel = () => {
    const container = document.createElement("section");
    const searchInput = document.createElement("input");
    searchInput.type = "search";
    searchInput.value = getOptions().nameToFilter || "";
    searchInput.oninput = handleSearch;

    container.append(searchInput);

    return container;
};

const handleSearch = e => {
    renderPokemons(setOptions({ nameToFilter: e.target.value.trim() }));
};
