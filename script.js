//script.js//
 
const options = ["Rock", "Paper", "Scissors"]
    
function getComputerChoice(rps) {   //The randomized choice of the computer selection is below
    computerSelection = rps[Math.floor(Math.random()*rps.length)];
    console.log("comp choose", computerSelection)
    return computerSelection 
}
const buttons = document.querySelectorAll('button');
let pCounter = 0;
let cCounter = 0;

pScore = document.getElementById('pTally');
cScore = document.getElementById('cTally');

let results = document.getElementById('roundresults');
let msg = document.getElementById('message');
 
buttons.forEach((button) => {

 
  button.addEventListener('click', () => {
    console.log(button.id);
    const cSelect = getComputerChoice(options);
    const pSelect = button.id;
    
    

    if (pSelect == 'Rock' && cSelect == 'Scissors') {  // This series of if/elseif statements determines the winner and tallies the score of each side
        results.textContent = "You win! \r\n" + pSelect + " beats " + cSelect + ".";
        console.log(results.textContent)
        pCounter = ++pCounter; 
         

    }
    else if (pSelect == 'Paper' && cSelect == 'Rock') {
        results.textContent = "You win! \r\n" + pSelect + " beats " + cSelect + ".";
        pCounter = ++pCounter;  
         
    }
    else if (pSelect == 'Scissors' && cSelect == 'Paper') {
        results.textContent = "You win! \r\n" + pSelect + " beats " + cSelect + ".";
        pCounter = ++pCounter;  
           
    }
    else if (pSelect == 'Rock' && cSelect == 'Paper') {
        results.textContent = "You lose! \r\n"  + cSelect + " beats " + pSelect + ".";
        cCounter = ++cCounter
    }
    else if (pSelect == 'Paper' && cSelect == 'Scissors') {
        results.textContent = "You lose! \r\n " + cSelect + " beats " + pSelect + ".";
        cCounter = ++cCounter
    }
    else if (pSelect == 'Scissors' && cSelect == 'Rock') {
        results.textContent = "You lose! \r\n" + cSelect + " beats " + pSelect + ".";
        cCounter = ++cCounter
    }
    else if(pSelect == cSelect) {
        results.textContent = "You tied! \r\n You both picked " + cSelect + ".";
        
    }
    if (pCounter == 5) {
        msg.textContent = "Congrats. You won! Try again!"
         
    }
    if (cCounter == 5) {
        msg.textContent = "Shoot! You lost Try again!"
        
    }
    

   
    pScore.textContent = pCounter
    cScore.textContent = cCounter

     

  });
});



 