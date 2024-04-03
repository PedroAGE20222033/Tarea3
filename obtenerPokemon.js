function getPokemonData(id) {
    return fetch(URL + id)
        .then((response) => response.json())
        .catch(error => console.error('Error obteniendo datos de Pokémon:', error));
}
