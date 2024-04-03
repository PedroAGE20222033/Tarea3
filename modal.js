 function openModal(pokemon) {
    const modalOverlay = document.getElementById("modalOverlay");
    const modalContent = document.querySelector(".modal-content");

    modalContent.innerHTML = `
        <h2>${pokemon.name}</h2>
        <img src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.name}">
        <p>ID: #${pokemon.id}</p>
        <p>Height: ${pokemon.height}m</p>
        <p>Weight: ${pokemon.weight}kg</p>
        <p>Types: ${pokemon.types.map(type => type.type.name).join(", ")}</p>
        <!-- Agrega más información según tus necesidades -->
    `;

    modalOverlay.style.display = "flex";
}

 function closeModal() {
    const modalOverlay = document.getElementById("modalOverlay");
    modalOverlay.style.display = "none";
}

 function setCloseModalEvent() {
    const closeButton = document.getElementById("closeModal");
    closeButton.addEventListener("click", () => {
        closeModal();
    });
}
