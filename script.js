//script.js//
 

const options = ["Rock", "Paper", "Scissors"]



function getComputerChoice(rps) {   //The randomized choice of the computer selection is below
    computerSelection = rps[Math.floor(Math.random()*rps.length)];
     
    return computerSelection 
}

function revertPlay(slct) {
    idElement = document.getElementById(slct)
    idElement.style.color = 'black';
}
function revertComp(slct) {
    divId = "c"+slct 
    idElement = document.getElementById(divId)
    idElement.style.color = 'black';

}
function compTrans(slct) {
    divId = "c"+slct 
    idElement = document.getElementById(divId)
    idElement.style.color = 'white';

}

function playTrans(slct) {
    idElement = document.getElementById(slct)
    idElement.style.color = 'white';

}
 
const buttons = document.querySelectorAll('button');
let pCounter = 0;
let cCounter = 0;

pScore = document.getElementById('pTally');
cScore = document.getElementById('cTally');

let text = document.getElementById('text');
 
 
const resetButton = document.getElementsByClassName('reset');
rst = resetButton[0]
 
 
 
 
 
buttons.forEach((button) => {

  button.addEventListener('click', () => {
    const cSelect = getComputerChoice(options);
    const pSelect = button.id;

    compTrans(cSelect)
    playTrans(pSelect)

    setTimeout(() => {
      revertPlay(pSelect);
        }, 1200)
    setTimeout(() => {
      revertComp(cSelect);
      }, 1200)
         
     
/* This is broken down into various if statements to help make sense of the logic for me
    While I'm sure this code is pretty inefficient, I will try to break it down for my own
    sense.

    If the score for each player is less than 4, then the game plays on as normal. The player's
    selection triggers the random computer selection, the comparison, and then the results are 
    printed, and the score is updated.

    If the score for each player is four, then the next winner wins the entire game, the buttons
    are disabled and they can only press the try again button to refresh the page.

    If the score for one player is four, then if that player wins the next round, they win the game.
    They get the try again button, and it starts again.

*/
    if (pCounter < 4 && cCounter < 4){ 
         
        if (pSelect == 'Rock' && cSelect == 'Scissors') {  
        text.textContent = "You win this round!\r\n" + pSelect + " beats " + cSelect + ".";
            pCounter = ++pCounter; 
        }
        else if (pSelect == 'Paper' && cSelect == 'Rock') {
        text.textContent = "You win this round!\r\n" + pSelect + " beats " + cSelect + ".";
            pCounter = ++pCounter;      
        }
        else if (pSelect == 'Scissors' && cSelect == 'Paper') {
        text.textContent = "You win this round!\r\n" + pSelect + " beats " + cSelect + ".";
            pCounter = ++pCounter;      
        }
        else if (pSelect == 'Rock' && cSelect == 'Paper') {
        text.textContent = "You lose this round! \r\n"  + cSelect + " beats " + pSelect + ".";
            cCounter = ++cCounter
        }
        else if (pSelect == 'Paper' && cSelect == 'Scissors') {
        text.textContent = "You lose this round! \r\n " + cSelect + " beats " + pSelect + ".";
            cCounter = ++cCounter
        }
        else if (pSelect == 'Scissors' && cSelect == 'Rock') {
        text.textContent = "You lose this round! \r\n" + cSelect + " beats " + pSelect + ".";
            cCounter = ++cCounter
        }
        else if(pSelect == cSelect) {
        text.textContent = "You tied this round! \r\n You both picked " + cSelect + ".";
            
        } 
        pScore.textContent = pCounter
        cScore.textContent = cCounter
         

    }   
    else if (pCounter == 4 && cCounter == 4){
        if (pSelect == 'Rock' && cSelect == 'Scissors') {  
            pCounter = ++pCounter;
            text.textContent = "Great job! You won!";
            rst.style.display = 'block';   
            document.getElementById("Rock").disabled = true;
            document.getElementById("Paper").disabled = true;
            document.getElementById("Scissors").disabled = true;
        }
        else if (pSelect == 'Paper' && cSelect == 'Rock') {
            pCounter = ++pCounter;
            text.textContent = "Great job! You won!";
            rst.style.display = 'block';      
            buttonsDisable.forEach(disableButtons)
            document.getElementById("Rock").disabled = true;
            document.getElementById("Paper").disabled = true;
            document.getElementById("Scissors").disabled = true;
        }
        else if (pSelect == 'Scissors' && cSelect == 'Paper') {
            pCounter = ++pCounter;
            text.textContent = "Great job! You won!";
            rst.style.display = 'block';      
            buttonsDisable.forEach(disableButtons)
            document.getElementById("Rock").disabled = true;
            document.getElementById("Paper").disabled = true;
            document.getElementById("Scissors").disabled = true;
        }
        else if (pSelect == 'Rock' && cSelect == 'Paper') {
            cCounter = ++cCounter
            text.textContent = "Shoot! You lost";
            rst.style.display = 'block'; 
            document.getElementById("Rock").disabled = true;
            document.getElementById("Paper").disabled = true;
            document.getElementById("Scissors").disabled = true;
        }
        else if (pSelect == 'Paper' && cSelect == 'Scissors') {
            cCounter = ++cCounter
            text.textContent = "Shoot! You lost";
            rst.style.display = 'block'; 
            document.getElementById("Rock").disabled = true;
            document.getElementById("Paper").disabled = true;
            document.getElementById("Scissors").disabled = true;
        }
        else if (pSelect == 'Scissors' && cSelect == 'Rock') {
            cCounter = ++cCounter
            text.textContent = "Shoot! You lost";
            rst.style.display = 'block';   
            document.getElementById("Rock").disabled = true;
            document.getElementById("Paper").disabled = true;
            document.getElementById("Scissors").disabled = true;
        }
        else if(pSelect == cSelect) {
        text.textContent = "You tied this round! \r\n You both picked " + cSelect + ".";
            
        } 
        pScore.textContent = pCounter
        cScore.textContent = cCounter
        }
    
    else if  (pCounter == 4 && cCounter !=4) {

        if (pSelect == 'Rock' && cSelect == 'Scissors') {  
                pCounter = ++pCounter;
                text.textContent = "Great job! You won!";
                rst.style.display = 'block';   
                document.getElementById("Rock").disabled = true;
                document.getElementById("Paper").disabled = true;
                document.getElementById("Scissors").disabled = true;
            }
            else if (pSelect == 'Paper' && cSelect == 'Rock') {
                pCounter = ++pCounter;
                text.textContent = "Great job! You won!";
                rst.style.display = 'block';      
                 
                document.getElementById("Rock").disabled = true;
                document.getElementById("Paper").disabled = true;
                document.getElementById("Scissors").disabled = true;
            }
            else if (pSelect == 'Scissors' && cSelect == 'Paper') {
                pCounter = ++pCounter;
                text.textContent = "Great job! You won!";
                rst.style.display = 'block';      
                 
                document.getElementById("Rock").disabled = true;
                document.getElementById("Paper").disabled = true;
                document.getElementById("Scissors").disabled = true;
            }
            else if (pSelect == 'Rock' && cSelect == 'Paper') {
            text.textContent = "You lose this round! \r\n"  + cSelect + " beats " + pSelect + ".";
                cCounter = ++cCounter
            }
            else if (pSelect == 'Paper' && cSelect == 'Scissors') {
            text.textContent = "You lose this round! \r\n " + cSelect + " beats " + pSelect + ".";
                cCounter = ++cCounter
            }
            else if (pSelect == 'Scissors' && cSelect == 'Rock') {
            text.textContent = "You lose this round! \r\n" + cSelect + " beats " + pSelect + ".";
                cCounter = ++cCounter
            }
            else if(pSelect == cSelect) {
            text.textContent = "You tied this round! \r\n You both picked " + cSelect + ".";
                
            } 
            pScore.textContent = pCounter
            cScore.textContent = cCounter
          
        }
        else if (cCounter = 4 && pCounter != 4) {
            if (pSelect == 'Rock' && cSelect == 'Scissors') {  
                    text.textContent = "You win this round!\r\n" + pSelect + " beats " + cSelect + ".";
                    pCounter = ++pCounter; 


                }
                else if (pSelect == 'Paper' && cSelect == 'Rock') {
                text.textContent = "You win this round!\r\n" + pSelect + " beats " + cSelect + ".";
                    pCounter = ++pCounter;      
                }
                else if (pSelect == 'Scissors' && cSelect == 'Paper') {
                text.textContent = "You win this round!\r\n" + pSelect + " beats " + cSelect + ".";
                    pCounter = ++pCounter;      
                }
                else if (pSelect == 'Rock' && cSelect == 'Paper') {
                    cCounter = ++cCounter
                    text.textContent = "Shoot! You lost";
                    rst.style.display = 'block'; 
                    document.getElementById("Rock").disabled = true;
                    document.getElementById("Paper").disabled = true;
                    document.getElementById("Scissors").disabled = true;
                }
                else if (pSelect == 'Paper' && cSelect == 'Scissors') {
                    cCounter = ++cCounter
                    text.textContent = "Shoot! You lost";
                    rst.style.display = 'block'; 
                    document.getElementById("Rock").disabled = true;
                    document.getElementById("Paper").disabled = true;
                    document.getElementById("Scissors").disabled = true;
                }
                else if (pSelect == 'Scissors' && cSelect == 'Rock') {
                    cCounter = ++cCounter
                    text.textContent = "Shoot! You lost";
                    rst.style.display = 'block';   
                    document.getElementById("Rock").disabled = true;
                    document.getElementById("Paper").disabled = true;
                    document.getElementById("Scissors").disabled = true;
                }
                else if(pSelect == cSelect) {
                text.textContent = "You tied this round! \r\n You both picked " + cSelect + ".";
                    
                } 
                pScore.textContent = pCounter
                cScore.textContent = cCounter
                }

                
    });
});



 