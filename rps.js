playerSelection = prompt("Make your choice between rock, paper, and scissors")
const options = ["rock", "paper", "scissors"]
function getComputerChoice(rps) {
     computerSelection = rps[Math.floor(Math.random()*options.length)]
    return computerSelection
}