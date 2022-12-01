/* Mostrar Stats do pokemon */

function MostrarSpan() {
  const liMostrar = document.querySelector(".mostrar");
  liMostrar.addEventListener("click", (mostrou) => {
    const pokemonSpan = document.querySelectorAll(".stats");
    pokemonSpan.forEach((item) => {
      item.classList.toggle("show-stats");
    });
  });
}
MostrarSpan();

/* Animação de rolagem */

function scrollsuave() {
  const linkRetornar = document.querySelector(".retornar");
  linkRetornar.addEventListener("click", scrollto);
  function scrollto(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
}

scrollsuave();
