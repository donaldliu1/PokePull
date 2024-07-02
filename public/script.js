document.getElementById('pull-button').addEventListener('click', async () => {
    const response = await fetch('/simulate_pull', { method: 'POST' });
    const data = await response.json();
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = '';



    data.pulls.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';

        const nameElement = document.getElementById('name')
        const rarityElement = document.getElementById('rarity')
        const valueElement = document.getElementById('value')

        nameElement.innerHTML = 'Name: ';
        rarityElement.innerHTML = 'Rating :';
        valueElement.innerHTML = 'Value: ';

        const cardImage = document.createElement('img');
        cardImage.src = card.images.large;

        const cardName = document.createElement('h3');
        cardName.textContent = card.name;

        const cardValue = document.createElement('h3');
        cardValue.textContent = `$ ${card.cardmarket.prices.averageSellPrice}`;

        const cardRating = document.createElement('h3');
        const oneStar = ["Common"];
        const twoStars = ["Uncommon"];
        const threeStars = ["Rare", "Rare Holo", "Promo"];
        const fourStars = ["Rare Holo EX", "Rare Holo GX", "Rare Holo LV.X", "Rare Holo Star", "Rare Holo V", "Rare Holo VMAX", "Rare Prime", "Rare Shining", "Rare Shiny", "Rare Shiny GX", "Rare Ultra", "Rare BREAK", "Rare Prism Star", "Rare ACE"];
        const fiveStars = ["Amazing Rare", "LEGEND", "Rare Rainbow", "Rare Secret"];

        if (oneStar.includes(card.rarity)) {
            cardRating.innerHTML = "&#9733;";
        } else if (twoStars.includes(card.rarity)) {
            cardRating.innerHTML = "&#9733;&#9733;";
        } else if (threeStars.includes(card.rarity)) {
            cardRating.innerHTML = "&#9733;&#9733;&#9733;";
        } else if (fourStars.includes(card.rarity)) {
            cardRating.innerHTML = "&#9733;&#9733;&#9733;&#9733;";
        } else if (fiveStars.includes(card.rarity)) {
            cardRating.innerHTML = "&#9733;&#9733;&#9733;&#9733;&#9733;";
        }

        cardElement.appendChild(cardImage);
        rarityElement.appendChild(cardRating);
        nameElement.appendChild(cardName);
        valueElement.appendChild(cardValue);
        cardsContainer.appendChild(cardElement);
    });
});
