let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let getMessage = document.getElementById("qst")
let getSum = document.getElementById("sum-el")
let getCards = document.getElementById("cards-el")

function getRandomCard() {
    let randomNumer = Math.floor(Math.random() * 13) + 1
    if (randomNumer > 10)
        return 10
    else if (randomNumer === 1)
        return 11
    else
        return randomNumer
}

function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    isAlive = true;
    renderGame()
}

function renderGame() {
    if (sum < 21) {
        message = "Do you want to draw a new card ? 🙂"
    }
    else if (sum === 21) {
        message = "Congratulation! 🥳"
        hasBlackJack = true;
    }
    else {
        message = "Good luck next game 😭"
        isAlive = false;
    }
    getMessage.textContent = message;
    getSum.textContent = "Sum: " + sum;
    getCards.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        getCards.textContent += cards[i] + " ";
    }
}

function drawCard() {
    if (isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard();
        cards.push(newCard)
        sum += newCard;
    }
    renderGame()
}
