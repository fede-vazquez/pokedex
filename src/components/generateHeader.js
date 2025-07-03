import "../styles/headers.css";

/**
 * Función que genera el header.
 * @returns {HTMLElement}
 */
export const generateHeader = () => {
    const header = document.createElement("header");

    const logoContainer = document.createElement("a");
    logoContainer.href = "/";
    logoContainer.classList.add("header-logo-container");

    const logo = document.createElement("div");
    logo.classList.add("header-logo");
    logo.innerHTML = `<img src="/pokeball.svg" alt="Pokedex Logo">`;
    logo.classList.add("logo");
    logoContainer.appendChild(logo);

    const title = document.createElement("h2");
    title.innerText = "Pokedex";
    logoContainer.appendChild(title);

    header.appendChild(logoContainer);

    const homeLink = document.createElement("a");
    homeLink.href = "/";
    homeLink.innerText = "Inicio";
    header.appendChild(homeLink);

    return header;
};
