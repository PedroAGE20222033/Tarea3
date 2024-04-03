// filtrarPokemon.js

function filtrarPokemonByType(type, listaPokemon) {
    listaPokemon.innerHTML = "";

    for (let i = 1; i <= 151; i++) {
        fetch(URL + i)
            .then((response) => response.json())
            .then(data => {
                if (type === "ver-todos") {
                    mostrarPokemon(data);
                } else {
                    const tipos = data.types.map(type => type.type.name);
                    if (tipos.some(tipo => tipo.includes(type))) {
                        mostrarPokemon(data);
                    }
                }
            })
            .catch(error => console.error('Error obteniendo datos de Pokémon:', error));
    }
}

function setFilterButtonsEvent(botonesHeader, listaPokemon) {
    botonesHeader.forEach(boton => boton.addEventListener("click", (event) => {
        const botonId = event.currentTarget.id;
        filtrarPokemonByType(botonId, listaPokemon);
    }));
}
