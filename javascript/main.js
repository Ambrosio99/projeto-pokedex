const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");

const maxRecords = 200;
const limit = 12;
let offset = 0;

function convertPokemonToLi(pokemon) {
  return `
  <li>
  <div class="pokemon ${pokemon.type}">
  <div class="nomber">
    <span class="name">${pokemon.name}</span> 
    <span class="number">#${pokemon.number}</span>
  </div>

    <div class="detail">
      <ol class="types">
        ${pokemon.types
          .map((type) => `<li class="type bg-${type}">${type}</li>`)
          .join("")}
      </ol>

      <img src="${pokemon.photo}" alt="${pokemon.name}">
    </div>
    <span class="stats">
      <div class="box-stats">
        <div class="content-stats">
          <p class="stats-qs">HP</p>
          <span class="stats-decoration"></span>
          <p class="stats-rs">${pokemon.hp}</p>
        </div>
        <div class="content-stats">
          <p class="stats-item">Attack</p>
          <span class="stats-decoration"></span>
          <p class="stats-rs">${pokemon.atk}</p>
        </div>
        <div class="content-stats">
          <p class="stats-item">Defense</p>
          <span class="stats-decoration"></span>
          <p class="stats-rs">${pokemon.def}</p>
        </div>
        <div class="content-stats">
          <p class="stats-item">Sp.Attack</p>
          <span class="stats-decoration"></span>
          <p class="stats-rs">${pokemon.spatk}</p>
        </div>
        <div class="content-stats">
          <p class="stats-item">Sp.Defense</p>
          <span class="stats-decoration"></span>
          <p class="stats-rs">${pokemon.spdef}</p>
        </div>
        <div class="content-stats">
          <p class="stats-item">Speed</p>
          <span class="stats-decoration"></span>
          <p class="stats-rs">${pokemon.speed}</p>
        </div>
      </div>
    </span>
</li>
    `;
}
function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join("");
    pokemonList.innerHTML += newHtml;
  });
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener("click", () => {
  offset += limit;
  const qtdRecordsWithNexPage = offset + limit;

  if (qtdRecordsWithNexPage >= maxRecords) {
    const newLimit = maxRecords - offset;
    loadPokemonItens(offset, newLimit);

    loadMoreButton.parentElement.removeChild(loadMoreButton);
  } else {
    loadPokemonItens(offset, limit);
  }
});
