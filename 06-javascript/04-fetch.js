const pokemonColors = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#ea7ce8',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
};

// Add your code here

const pokemonContainer = document.getElementById('pokemon-container');
const loadingSpinner = document.getElementById('loading-spinner');
const pokemonSearch = document.getElementById('pokemon-search');

const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';
const POKEMON_COUNT = 25;
let allPokemons = [];

const createPokemonCard = (pokemon) => {
  const card = document.createElement('div');
  card.classList.add('pokemon-card');

  const pokemonImage = document.createElement('img');
  pokemonImage.classList.add('pokemon-image');
  pokemonImage.src = pokemon.sprites.front_default;
  pokemonImage.alt = pokemon.name;

  const pokemonName = document.createElement('h2');
  pokemonName.classList.add('pokemon-name');
  pokemonName.textContent = pokemon.name;

  const pokemonTypes = document.createElement('div');
  pokemonTypes.classList.add('pokemon-types');
  pokemon.types.forEach(typeInfo => {
    const typeBadge = document.createElement('span');
    typeBadge.classList.add('type-badge', `type-${typeInfo.type.name}`);
    typeBadge.textContent = typeInfo.type.name;
    pokemonTypes.appendChild(typeBadge);
  });

  card.appendChild(pokemonImage);
  card.appendChild(pokemonName);
  card.appendChild(pokemonTypes);

  return card;
};

const displayPokemons = (pokemonsToDisplay) => {
  pokemonContainer.innerHTML = '';
  if (pokemonsToDisplay.length === 0) {
    pokemonContainer.innerHTML = '<p>No Pokémon matched your search.</p>';
    return;
  }
  pokemonsToDisplay.forEach(pokemon => {
    pokemonContainer.appendChild(createPokemonCard(pokemon));
  });
};

const fetchPokemons = async () => {
  loadingSpinner.style.display = 'flex';
  pokemonContainer.style.display = 'none';
  try {
    const responses = await Promise.all(
      Array.from({ length: POKEMON_COUNT }, (_, i) =>
        fetch(`${POKEAPI_BASE_URL}${i + 1}/`).then(res => res.json())
      )
    );
    allPokemons = responses;
    displayPokemons(allPokemons);
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
    pokemonContainer.innerHTML = '<p>Failed to load Pokémon. Please try again later.</p>';
  } finally {
    loadingSpinner.style.display = 'none';
    pokemonContainer.style.display = 'grid';
  }
};

pokemonSearch.addEventListener('input', (event) => {
  const query = event.target.value.toLowerCase();
  const filteredPokemons = allPokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(query) ||
    pokemon.types.some(typeInfo => typeInfo.type.name.toLowerCase().includes(query))
  );
  displayPokemons(filteredPokemons);
});

fetchPokemons();
