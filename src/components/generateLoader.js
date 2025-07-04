import "../styles/loader.css";

export const generateLoader = () => {
    const loader = document.createElement("div");
    loader.classList.add("loader");
    loader.innerHTML = `
        <span class="pokeball-loader">
            <img src="/pokeball.svg" alt="Pokeball" />
        </span>
        <span class="pokeball-loader">
            <img src="/pokeball.svg" alt="Pokeball" />
        </span>
        <span class="pokeball-loader">
            <img src="/pokeball.svg" alt="Pokeball" />
        </span>
    `;
    return loader;
};
