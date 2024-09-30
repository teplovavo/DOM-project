console.log("LET'S START SBA 316! Veronika Teplova's WEB APPLICATION")

//items
const cardImages = [
    '🍭', '🍬', '🍫', '🍩', '🍪',
    '🍰', '🍦', '🍧', '🍿', '🍎'
];
console.log(cardImages);

// Dublicate items (x2 cards)
let cardSet = [...cardImages, ...cardImages];

// Sort cards in random mode
cardSet = cardSet.sort(() => 0.5 - Math.random());

const cardGrid = document.getElementById('card-grid');
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matchedPairs = 0;














