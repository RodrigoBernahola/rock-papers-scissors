let humanScore = 0;
let computerScore = 0;


function  getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function getComputerChoice() {
    randomNumber = getRandomInt(3);
    if (randomNumber === 0) {
        return 'Rock';
    }

    else if (randomNumber === 1) {
        return 'Paper'
    }

    else {
        return 'Scissors'
    }
}

//console.log(getComputerChoice())


function getHumanChoice() {
    const res = prompt('Ingrese su opcion');
    return res;
}

//console.log(getHumanChoice());


function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();
    console.log(humanChoice)
    console.log(computerChoice)
    if (humanChoice === 'rock') {
        if (computerChoice === 'Rock') {
            console.log('Game tied, Rock vs Rock.');
            return 'Tie';
        }

        else if (computerChoice === 'Paper') {
            console.log('You lose!, Paper beats Rock');
            computerChoice += 1;
            return 'Computer';
        }

        else {
            console.log('You won!, Rock beats Scissors');
            humanScore += 1;
            return 'Player'
        }
    }

    else if (humanChoice === 'paper') {
        if (computerChoice === 'Paper') {
            console.log('Game tied. Paper vs paper');
            return 'Tie';
        }

        else if (computerChoice === 'Scissors') {
            console.log('You lose!, Scissors beats Paper');
            computerScore += 1;
            return 'Computer';
        }

        else {
            console.log('You won!, Paper beats Rock');
            humanScore += 1;
            return 'Player';
        }
    }

    else {
        if (computerChoice === 'Scissors') {
            console.log('Game tied, Scissors vs Scissors')
            return 'Tie'
        }

        else if(computerChoice === 'Rock') {
            console.log('You lose!, Rock beats Scissors');
            computerScore += 1;
            return 'Computer'
        }

        else {
            console.log('You won!, Scissors beats Paper');
            humanScore += 1;
            return 'Player'
        }
    }
}


// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();
// console.log(humanSelection);
// console.log(computerSelection)

// playRound(humanSelection, computerSelection);
// console.log(`Human score: ${humanScore} y Computer score: ${computerScore}`)




function playGame() {
    // for (let i = 0 ; i <= 5; i++) {
    //     numberHumanChoice = parseInt(prompt('Ingrese su opcion: '));
    //     humanChoice = getHumanChoice(numberHumanChoice);
    //     computerChoice = getComputerChoice();
    //     playRound(humanChoice, computerChoice)
    // }

    // if (humanScore > computerScore) {
    // console.log('Player won the game')
    // }

    // else if (humanScore < computerScore){
    //     console.log('Computer won the game')
    // }

    // else {
    //     console.log('Game tied')
    // }
}


let menu = document.querySelector('#menu');

menu.addEventListener('click', (event) => {

    let target = event.target;
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    switch(target.id) {

        case 'Rock':
            playRound(humanSelection, computerSelection)
            break;
        
        case 'Paper':
            playRound(humanSelection, computerSelection)
            break;

        case 'Scissors':
            playRound(humanSelection, computerSelection)
    }

}

)

// playGame()