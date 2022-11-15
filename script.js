//script.js//
 
const options = ["Rock", "Paper", "Scissors"]
    
function getComputerChoice(rps) {   //The randomized choice of the computer selection is below
    computerSelection = rps[Math.floor(Math.random()*rps.length)];
    console.log("comp choose", computerSelection)
    return computerSelection 
}
const buttons = document.querySelectorAll('button');

 
buttons.forEach((button) => {

 
  button.addEventListener('click', () => {
    console.log(button.id);
    const cSelect = getComputerChoice(options)
    const pSelect = button.id
    let pCounter = 0
    let cCounter = 0
    let tieCounter = 0

    if (pSelect == 'Rock' && cSelect == 'Scissors') {  // This series of if/elseif statements determines the winner and tallies the score of each side
        alert("You win! " + pSelect + " beats " + cSelect);
        pCounter = ++pCounter; 
        tally.textContent = pCounter;   
    }
    else if (pSelect == 'Paper' && cSelect == 'Rock') {
        alert("You win! " + pSelect + " beats " + cSelect);
        pCounter = ++pCounter;  
        tally.textContent = pCounter;   
    }
    else if (pSelect == 'Scissors' && cSelect == 'Paper') {
        alert("You win! " + pSelect + " beats " + cSelect);
        pCounter = ++pCounter;  
        tally.textContent = pCounter;   
    }
    else if (pSelect == 'Rock' && cSelect == 'Paper') {
        alert("You lose! " + cSelect + " beats " + pSelect);
        cCounter = ++cCounter
    }
    else if (pSelect == 'Paper' && cSelect == 'Scissors') {
        alert("You lose! " + cSelect + " beats " + pSelect);
        cCounter = ++cCounter
    }
    else if (pSelect == 'Scissors' && cSelect == 'Rock') {
        alert("You lose! " + cSelect + " beats " + pSelect);
        cCounter = ++cCounter
    }
    else if (pSelect == cSelect) {
    alert("You tied! You both picked " + pSelect);
    tieCounter = ++tieCounter;
    } 


     

  });
});



 