document.addEventListener('DOMContentLoaded', () => {
    const characterContainer = document.getElementById('characters');

    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
            const characters = data.results;
            characters.forEach(character => {
                const characterCard = document.createElement('div');
                characterCard.classList.add('character-card', 'colorful-border');

                characterCard.innerHTML = `
                    <img src="${character.image}" alt="${character.name}">
                    <h2>${character.name}</h2>
                    <p>Especie: ${character.species}</p>
                    <p>Género: ${character.gender}</p>
                    <p>Estado: ${character.status}</p>
                `;

                characterCard.addEventListener('click', () => {
                    characterCard.style.borderColor = getRandomColor();
                });

                characterContainer.appendChild(characterCard);
            });
        })
        .catch(error => console.error('Error fetching characters:', error));
});

function getRandomColor() {
    const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722'];
    return colors[Math.floor(Math.random() * colors.length)];
}
