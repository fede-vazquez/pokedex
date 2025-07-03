import "../styles/error-page.css";

export const errorPage = ({ errorMessage }) => {
    // Contenedor
    const container = document.createElement("div");
    container.classList.add("error-container");

    // Titulo y mensaje de error
    const title = document.createElement("h1");
    title.classList.add("error-title");
    title.textContent = "Error";
    container.appendChild(title);

    const message = document.createElement("p");
    message.classList.add("error-message");
    message.textContent = errorMessage;
    container.appendChild(message);

    // Botón para volver al home
    const button = document.createElement("a");
    button.classList.add("error-btn");
    button.textContent = "Volver al Home";
    button.href = "/";
    container.appendChild(button);

    return container;
};
