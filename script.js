const rockButton = document.querySelector('.player-side .rock');
const paperButton = document.querySelector('.player-side .paper');
const scissorsButton = document.querySelector('.player-side .scissors');
const playButton = document.querySelector('.decider-text button');
let playerChoice;
let playable = false;

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if(!num) return "rock";
    else
    return num%2? "paper" : "scissors";
}

function setComputerColor(computerChoice){
    const setButton = document.querySelector(`.computer-side .${computerChoice}`);
    setButton.classList.add('chosen-computer');
}

function setPlayerColor(playerChoice){
    const setButton = document.querySelector(`.player-side .${playerChoice}`);
    setButton.classList.add('chosen-player');
}

function removeColors(){
    const buttons = document.querySelectorAll('img');
    buttons.forEach(button => {
        button.classList.remove('chosen-computer');
        button.classList.remove('chosen-player');
    });
}

function removePlayerColor() {
    const buttons = document.querySelectorAll('.player-side img');
    buttons.forEach(button => {
        button.classList.remove('chosen-player');
    });
}

function changeChoice(choice) {
    removePlayerColor();
    playerChoice = choice;
    setPlayerColor(playerChoice);
    if(playable == false)
    {
        playable = true;
        startGame();
    }
}

function checkButtons()
{
    rockButton.addEventListener('click', function(e){
        changeChoice('rock');
    });
    paperButton.addEventListener('click', function(e){
        changeChoice('paper');
    });
    scissorsButton.addEventListener('click', function(e){
        changeChoice('scissors');
    });
}

function playRound() {
    let computerChoice = getComputerChoice()
    setComputerColor(computerChoice);
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
        else return "You lost, scissors cut paper";
    }
    else{
        if(computerChoice == "scissors") return "Tie. Both scissors" 
        else if(computerChoice == "paper") return "You win, scissors cut paper";
        else return "You lost, rock smashes scissors";
    }
}

function startGame() {
    let computerPoints = 0;
    let playerPoints = 0;
    playButton.addEventListener('click', () =>
    {
        if(playerPoints < 5 && computerPoints < 5)
        {
            console.log('hello');
            let decision = playRound();
            let winner = decision.split(" ");
            if(winner[0] == "Tie."){        
            }
            else{
                if(winner[1] == "win,") playerPoints++;
                else computerPoints++;
            }
            console.log(`${decision} 
            Your points: ${playerPoints}
            Computer points: ${computerPoints}`);
            updateText(computerPoints, playerPoints);
        }
    })
}

function game(computerPoints, playerPoints){


    
}

function updateText(computerPoints, playerPoints) 
{
    const playerScore = document.querySelector('.calc-player');
    const computerScore = document.querySelector('.calc-computer');
    playerScore.textContent = playerPoints;
    computerScore.textContent = computerPoints;
}

function showModal(winner){

}




window.addEventListener('keydown', function(e){
    removeColors();
});

checkButtons();
/*
    On button click 
*/



