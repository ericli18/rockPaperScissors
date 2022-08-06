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
        return computerChoice == "rock"? "Tie. Both rock" : (computerChoice == "paper"? "You lost, paper smothers rock" : 
        "You win, rock smashes scissors");
    }
    else if(playerChoice === "paper"){
        return computerChoice == "paper"? "Tie. Both paper" : (computerChoice == "rock"? "You win, paper smothers rock" : 
        "You lost, scissors cut paper");
    }
    else{
        return computerChoice == "scissors"? "Tie. Both scissors" : (computerChoice == "paper"? "You win, scissors cut paper" : 
        "You lost, rock smashes scissors");
    }
}

function game(){
    let computerPoints = 0;
    let playerPoints = 0;
    for(let i = 0; i < 5; i++)
    {
        let playerChoice = prompt("Please type rock, paper, or scissors");
        let decision = playRound(playerChoice, getComputerChoice());
        let winner = split(decision);
        if(winner[0] === "Tie."){
            computerPoints++;
            playerPoints++;
        }
        else{
            if(winner[1] == "win") playerPoints++;
            else computerPoints++;
        }
        console.log(`${decision} 
        Your points: ${playerPoints}
        Computer points: ${computerPoints}`)
    }
}

game();