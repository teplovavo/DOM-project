console.log("LET'S START SBA 316! Veronika Teplova's WEB APPLICATION")

//items
const cardImages = [
    '🍭', '🍬', '🍫', '🍩', '🍪', '🍰', '🍦', '🍧', '🍿', '🍎'
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

///////////////////////////////////////create cards in DOM/////////////
function createCard(value) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = 
       ` <div class="front">${value}</div>
        <div class="back">?</div>  `;

// click
card.addEventListener('click', () => flipCard(card));
cardGrid.appendChild(card);


}


/////////// card rotating function ////////////

function flipCard(card) {
    if (lockboard) return; //block until check
    if (card === firstCard) return; //cant return the same card

    card.classList.add('flipped');

    if (!firstCard) {
        firstCard = card;
        return;
    }
    secondCard = card;
    checkForMatch();

}

// check if match
function checkForMatch() {
    const isMatch
}






