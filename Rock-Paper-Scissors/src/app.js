let choose = Math.floor(Math.random() * 3);

function getComputerChoice() {
    if (choose === 0)
        return "Rock";
    else if (choose === 1)
        return "Paper";
    else if (choose === 2)
        return "Scissors";
}

let computerChoice = getComputerChoice();
const playerRock = document.getElementById("rock");
const playerPaper = document.getElementById("paper");
const playerScissors = document.getElementById("scissors");
const playAgain = document.getElementById("results");

playerRock.addEventListener('click', function () {
    PlayRound("Rock");
});
playerPaper.addEventListener('click', function () {
    PlayRound("Paper");
});
playerScissors.addEventListener('click', function () {
    PlayRound("Scissors");
});

function PlayRound(playerChoice) {
    if ((computerChoice === "Rock" && playerChoice === "Rock") ||
        (computerChoice === "Paper" && playerChoice === "Paper") ||
        (computerChoice === "Scissors" && playerChoice === "Scissors")) {
        playAgain.innerHTML = "<h1>" + "It's a tie, Play Again" + "</h1>";
    } else if ((computerChoice === "Rock" && playerChoice === "Paper") ||
        (computerChoice === "Paper" && playerChoice === "Scissors") ||
        (computerChoice === "Scissors" && playerChoice === "Rock")) {
        playAgain.innerHTML = "<h1>" + "Congratulation! You choose " + playerChoice + " and Computer choose " + computerChoice + "</h1>";

    } else {
        playAgain.innerHTML = "<h1>" + "Sadly! You choose " + playerChoice + " and Computer choose " + computerChoice + "</h1>";
    }
}

function Game() {
    computerChoice = getComputerChoice();
    playAgain.innerHTML = "";
}
