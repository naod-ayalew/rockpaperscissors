
//This first section is where the computer and player selections are made
//The player choice is made lowercase so that it can satisfy the conditionals
//Rock wouldn't satisfy the conditionals beginning on line 20


const options = ["rock", "paper", "scissors"] //This provides the list of options for the randomized computer to pick through
    
function getComputerChoice(rps) {   //The randomized choice of the computer selection is below
    computerSelection = rps[Math.floor(Math.random()*rps.length)];
    return computerSelection 
}

for (let i = 0; i <5; i++) {
    playerSelection = prompt("Make your choice between rock, paper, and scissors");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice(options);
    console.log(playerSelection, computerSelection);
}
    
 
