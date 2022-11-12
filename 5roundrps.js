
//This first section is where the computer and player selections are made
//The player choice is made lowercase so that it can satisfy the conditionals
//Rock wouldn't satisfy the conditionals beginning on line 20


const options = ["Rock", "Paper", "Scissors"] //This provides the list of options for the randomized computer to pick through
    
function getComputerChoice(rps) {   //The randomized choice of the computer selection is below
    computerSelection = rps[Math.floor(Math.random()*rps.length)];
    return computerSelection 
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

let pCounter = 0;

for (let i = 0; i <5; i++) {
    playerSelection = prompt("Make your choice between Rock, Paper, and Scissors");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice(options);
    choice1 = capitalizeFirstLetter(playerSelection);
    choice2 = capitalizeFirstLetter(computerSelection);
    console.log(choice1, choice2);

    if (choice1 == 'Rock' && choice2 == 'Scissors') {
        alert("You win! " + choice1 + " beats " + choice2);
        pCounter = ++pCounter;
        console.log(pCounter)
    }
    else if (choice1 == 'Paper' && choice2 == 'Rock') {
        alert("You win! " + choice1 + " beats " + choice2);
        pCounter = ++pCounter;
        console.log(pCounter)
    }
    else if (choice1 == 'Scissors' && choice2 == 'Paper') {
        alert("You win! " + choice1 + " beats " + choice2);
        pCounter = ++pCounter;
        console.log(pCounter)
    }
    else if (choice1 == 'Rock' && choice2 == 'Paper') {
        alert("You win! " + choice1 + " beats " + choice2);
        
    }
    else if (choice1 == 'Paper' && choice2 == 'Scissors') {
        alert("You lose! " + choice1 + " beats " + choice2);
        
    }
    else if (choice1 == 'Scissors' && choice2 == 'Rock') {
        alert("You lose! " + choice1 + " beats " + choice2);
        
    }
    else if (choice1 == choice2)
    alert("You lose! " + choice1 + " beats " + choice2)
        

}
    
 
