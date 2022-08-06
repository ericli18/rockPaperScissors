function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if(!num) return "rock";
    else
    return num%2? "paper" : "scissors";
}

function playRound(playerChoice, computerChoice = "getComputerChoice()") {
    playerChoice = playerChoice.toLowerCase();
    if(playerChoice != "rock" && playerChoice != "scissors" && playerChoice != "paper")
        return "Please enter valid input";
    if(playerChoice === "rock"){

    }
    else if(playerChoice === "paper"){

    }
    else{
        
    }
}

console.log(getComputerChoice());