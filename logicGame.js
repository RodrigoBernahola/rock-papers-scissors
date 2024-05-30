let humanScore = 0;
let computerScore = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    const randomNumber = getRandomInt(3);
    if (randomNumber === 0) {
        return 'Rock';
    } else if (randomNumber === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function checkWinner() {
    if (humanScore >= 5 || computerScore >= 5) {
        let result = 'Congratulations, the winner is: ';
        let winner = (humanScore > computerScore) ? 'Human player' : 'Computer player';
        console.log(result + winner);
        
        // Reset scores
        humanScore = 0;
        computerScore = 0;

        // Update the scores on the UI
        parrafoScore.textContent = `Human score: ${humanScore} y Computer score: ${computerScore}`;
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    console.log(humanChoice);
    console.log(computerChoice);

    let parrafoAnuncioGanador = document.createElement('p');

    if (humanChoice === 'rock') {
        if (computerChoice === 'Rock') {
            parrafoAnuncioGanador.textContent = 'Game tied, Rock vs Rock.';
        } else if (computerChoice === 'Paper') {
            parrafoAnuncioGanador.textContent = 'You lose!, Paper beats Rock';
            computerScore += 1;
        } else {
            parrafoAnuncioGanador.textContent = 'You won!, Rock beats Scissors';
            humanScore += 1;
        }
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'Paper') {
            parrafoAnuncioGanador.textContent = 'Game tied, Paper vs Paper.';
        } else if (computerChoice === 'Scissors') {
            parrafoAnuncioGanador.textContent = 'You lose!, Scissors beats Paper';
            computerScore += 1;
        } else {
            parrafoAnuncioGanador.textContent = 'You won!, Paper beats Rock';
            humanScore += 1;
        }
    } else {
        if (computerChoice === 'Scissors') {
            parrafoAnuncioGanador.textContent = 'Game tied, Scissors vs Scissors.';
        } else if (computerChoice === 'Rock') {
            parrafoAnuncioGanador.textContent = 'You lose!, Rock beats Scissors';
            computerScore += 1;
        } else {
            parrafoAnuncioGanador.textContent = 'You won!, Scissors beats Paper';
            humanScore += 1;
        }
    }

    parrafoTexto.appendChild(parrafoAnuncioGanador);
    checkWinner();
}

let menu = document.querySelector('#menu');
let parrafoTexto = document.querySelector('#TextoResultado');
let parrafoScore = document.querySelector('#Scores');

menu.addEventListener('click', (event) => {
    let target = event.target;
    let humanSelection = target.id;
    let computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    parrafoScore.textContent = `Human score: ${humanScore} y Computer score: ${computerScore}`;
});
