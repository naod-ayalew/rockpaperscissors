
//This first section is where the computer and player selections are made
//The player choice is made lowercase so that it can satisfy the conditionals
//Rock wouldn't satisfy the conditionals beginning on line 20


const options = ["Rock", "Paper", "Scissors"] //This provides the list of options for the randomized computer to pick through
    
function getComputerChoice(rps) {   //The randomized choice of the computer selection is below
    computerSelection = rps[Math.floor(Math.random()*rps.length)];
    return computerSelection 
}

function capitalizeFirstLetter(string) {   // This function just formats the words correctly
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

let pCounter = 0;
let cCounter = 0;
let tieCounter = 0;

for (let i = 0; i <5; i++) {
    playerSelection = prompt("Make your choice between Rock, Paper, and Scissors"); //Initial prompt for the player's choice
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice(options);
    choice1 = capitalizeFirstLetter(playerSelection);  //Formats the words again for the print out later on
    choice2 = capitalizeFirstLetter(computerSelection);
    console.log(choice1, choice2);  // Displays the choices of the player and computer to the console log

    if (choice1 == 'Rock' && choice2 == 'Scissors') {  // This series of if/elseif statements determines the winner and tallies the score of each side
        alert("You win! " + choice1 + " beats " + choice2);
        pCounter = ++pCounter;    
    }
    else if (choice1 == 'Paper' && choice2 == 'Rock') {
        alert("You win! " + choice1 + " beats " + choice2);
        pCounter = ++pCounter;    
    }
    else if (choice1 == 'Scissors' && choice2 == 'Paper') {
        alert("You win! " + choice1 + " beats " + choice2);
        pCounter = ++pCounter;    
    }
    else if (choice1 == 'Rock' && choice2 == 'Paper') {
        alert("You win! " + choice2 + " beats " + choice1);
        cCounter = ++cCounter
    }
    else if (choice1 == 'Paper' && choice2 == 'Scissors') {
        alert("You lose! " + choice2 + " beats " + choice1);
        cCounter = ++cCounter
    }
    else if (choice1 == 'Scissors' && choice2 == 'Rock') {
        alert("You lose! " + choice2 + " beats " + choice1);
        cCounter = ++cCounter
    }
    else if (choice1 == choice2) {
    alert("You tied! You both picked " + choice1);
    tieCounter = ++tieCounter;
    } 
    if (i == 4 && pCounter > cCounter) { // Finally to wrap the game up, when all 5 loops are played through, the winner is determined by highest score
        alert("Congrats. You've won the game. You beat the computer " + pCounter + " games to " + cCounter + " with " + tieCounter + " tie");
    } else if (i == 4 && pCounter < cCounter) {
        alert("That's too bad! You've lost the game. The computer beat you " + cCounter + " games to " + pCounter + " with " + tieCounter + " tie");
    } else if (i == 4 && pCounter == cCounter) {
        alert("Whoa! You've tied the game at " + pCounter + " a piece with " + tieCounter + " tie.");
    } 

}


    
 
