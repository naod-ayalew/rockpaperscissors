
//This first section is where the computer and player selections are made
//The player choice is made lowercase so that it can satisfy the conditionals
//Rock wouldn't satisfy the conditionals beginning on line 20
playerSelection = prompt("Make your choice between rock, paper, and scissors");
playerSelection = playerSelection.toLowerCase();
    
//This provides the list of options for the randomized computer to pick through
const options = ["rock", "paper", "scissors"]

//The randomized choice of the computer selection is below
function getComputerChoice(rps) {
        computerSelection = rps[Math.floor(Math.random()*rps.length)]
        return computerSelection
}

//This is how the win is decided, if/elseif statement to determine the outcome
//   for the user. 
function playRound(choice1, choice2) {
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
    else if (choice1 == choice2)
        return 'tie!'
     
}



//A function to turn the first letter of the selections to a capital letter 
//   This is used just to make the printout better looking.
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

//The final function combines the info from the previous two, the result (win, lose, tie)
//with the player and computer selections and alters the printout based on who won.
function reportBack(results, c1, c2) {
    c1 = capitalizeFirstLetter(c1);
    c2 = capitalizeFirstLetter(c2);
    if (results == 'win!') {
        alert("You " + results + " " + c1 + " beats " + c2 + ".")
    }  
    else if (results == 'lose!') {
        alert("You " + results + " " + c2 + " beats " + c1 + ".")
    } 
    else if (results == 'tie!'){
        alert("You " + results + " " + " You both picked " + c2 + ".")
    }

}
//This gives us the computerSelection to work with
computerSelection = getComputerChoice(options)

//This takes what the game() function returns, which is a string stating
//   win!, lose!, or tie!
result = playRound(playerSelection, computerSelection)

//This function will create the popup window with the win or loss information
reportBack(result, playerSelection, computerSelection)