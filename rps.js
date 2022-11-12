
//This first section is where the computer and player selections are made
playerSelection = prompt("Make your choice between rock, paper, and scissors");
    //The following conditional statement ensures that at least one of the options has been selected
 
const options = ["rock", "paper", "scissors"]

function getComputerChoice(rps) {
        computerSelection = rps[Math.floor(Math.random()*rps.length)]
        return computerSelection
}
computerSelection = getComputerChoice(options)

console.log( playerSelection , computerSelection)

function game(choice1, choice2) {
    if (choice1 == 'rock' && choice2 == 'scissors') {
        return 'win!'
    }
    else if (choice1 == 'paper' && choice2 == 'rock') {
        return 'win!'
    }
    else if (choice1 == 'scissors' && choice2 == 'paper') {
        return 'win!'
    }
    else if (choice1 == 'rock' && choice2 == 'paper') {
        return  'lose!'
    }
    else if (choice1 == 'paper' && choice2 == 'scissors') {
        return 'lose!'
    }
    else if (choice1 == 'scissors' && choice2 == 'rock') {
        return 'lose!'
    }
     
}

result = game(playerSelection, computerSelection)

function reportBack(results) {
    
}