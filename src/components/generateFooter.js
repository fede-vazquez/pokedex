import "../styles/footer.css";
/**
 * Función que genera el footer.
 * @returns {HTMLElement}
 */
export const generateFooter = () => {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const footerText = document.createElement("p");
    footerText.innerText = "Pokedex API By Federico";
    footerText.style.textAlign = "center";

    footer.appendChild(footerText);
    return footer;
};
