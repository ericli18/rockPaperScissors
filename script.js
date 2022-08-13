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
    if(playerChoice == "rock"){
        if(computerChoice == "rock") return "Tie. Both rock";
        else if(computerChoice == "paper") return "You lost, paper smothers rock";
        else return "You win, rock smashes scissors";
    }
    else if(playerChoice == "paper"){
        if(computerChoice == "paper") return "Tie. Both paper" 
        else if(computerChoice == "rock") return "You win, paper smothers rock";
        else return"You lost, scissors cut paper";
    }
    else{
        if(computerChoice == "scissors") return "Tie. Both scissors" 
        else if(computerChoice == "paper") return "You win, scissors cut paper";
        else return "You lost, rock smashes scissors";
    }
}

function game(){
    let computerPoints = 0;
    let playerPoints = 0;

    let playerChoice = prompt("Please type rock, paper, or scissors");
    let decision = playRound(playerChoice, getComputerChoice());
    let winner = decision.split(" ");
    if(winner[0] == "Tie."){        
    }
    else{
        if(winner[1] == "win,") playerPoints++;
        else computerPoints++;
    }
    console.log(`${decision} 
    Your points: ${playerPoints}
    Computer points: ${computerPoints}`)
    if(playerPoints === computerPoints){
        console.log("Tie!!")
    }
    else{
        console.log(computerPoints>playerPoints? "You lost :(" : "You win!!!!")
    }
}

