console.log("LET'S START SBA 316! Veronika Teplova's WEB APPLICATION");

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
    card.setAttribute('data-card-value', value);
    card.innerHTML = 
       ` <div class="back">${value}</div>
        <div class="front">?</div>  `;

    // click
    card.addEventListener('click', () => flipCard(card));
    cardGrid.appendChild(card);
}

/////////// card rotating function ////////////
function flipCard(card) {
    if (lockBoard) return; //block until check
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
    const isMatch = firstCard.getAttribute('data-card-value') === secondCard.getAttribute('data-card-value');
    isMatch ? disableCards() : unflipCards();
}

//disable cards if match
function disableCards() {
firstCard.classList.add('matched');
secondCard.classList.add('matched');
firstCard.removeEventListener('click', flipCard);
secondCard.removeEventListener('click', flipCard);
resetBoard();
matchedPairs++;

    //if all pairs found
    if (matchedPairs === cardSet.length / 2) {
        setTimeout(showWinModal, 500);
    }
    
}
//rotate if not match
function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        resetBoard();
    }, 1000);
}

//reset
function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}

//cards
cardSet.forEach(image => createCard(image));


/////////////////////////BUTTON////////////////////////////////

const resetButton = document.getElementById('reset-button');

resetButton.addEventListener('click', resetGame);

function resetGame() {
    cardGrid.innerHTML = '';

    firstCard = null;
    secondCard = null;
    lockBoard = false;
    matchedPairs = 0;

    // Dublicate items (x2 cards)
let cardSet = [...cardImages, ...cardImages];

// Sort cards in random mode
cardSet = cardSet.sort(() => 0.5 - Math.random());


// new cards
cardSet.forEach(cardValue => createCard(cardValue));
}


///////////////////////////win modal//////////////

//check
if (matchedPairs === cardSet.length / 2) {
    setTimeout(showWinModal, 500);
}

const winModal = document.getElementById('win-modal');
const closeModal = document.getElementById('close-modal');


function showWinModal() {
    winModal.style.display = 'block';
}


closeModal.addEventListener('click', () => {
    winModal.style.display = 'none';
});

// close if click on the background
window.addEventListener('click', (event) => {
    if (event.target == winModal) {
        winModal.style.display = 'none';
    }
});



///////////////////////name ////////////////

const nameModal = document.getElementById('name-modal');
const playerNameInput = document.getElementById('player-name');
const startGameButton = document.getElementById('start-game');
const nameError = document.getElementById('name-error');

// 
window.onload = function() {
    nameModal.style.display = 'block';
};

// 
startGameButton.addEventListener('click', () => {
    const playerName = playerNameInput.value.trim();
    if (playerName === '') {
        nameError.textContent = 'Please, enter your name';
        nameError.style.display = 'block';
    } else {
        nameError.style.display = 'none';
        nameModal.style.display = 'none';
        // show the name on the page
        const greeting = document.createElement('h2');
        greeting.textContent = `Hello, ${playerName}! Good luck!`;
        document.body.insertBefore(greeting, document.querySelector('.game-container'));
    }
});


///////////////////////timer//////////////////////////
let timerElement = document.getElementById('timer');
let secondsElapsed = 0;
let timerInterval;

function startTimer() {
    timerInterval = setInterval(() => {
        secondsElapsed++;
        timerElement.textContent = `Time: ${secondsElapsed} sec`;
    }, 1000);
}
function stopTimer() {
    clearInterval(timerInterval);
}
startTimer();
function showWinModal() {
    stopTimer();
    winModal.style.display = 'block';
}
window.onbeforeunload = function() {
    return 'The game is not saved. Do you really want to exit?';
};



/////////////////////hint button//////
