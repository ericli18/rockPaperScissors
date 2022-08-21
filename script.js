const rockButton = document.querySelector('.player-side .rock');
const paperButton = document.querySelector('.player-side .paper');
const scissorsButton = document.querySelector('.player-side .scissors');
const playButton = document.querySelector('.decider-text button');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
let playerChoice;
let playable = false;
let buttonStatus = true;

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

function removeComputerColor(){
    const buttons = document.querySelectorAll('.computer-side img');
    buttons.forEach(button => {
        button.classList.remove('chosen-computer');
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
    let wins = 5;
    playButton.addEventListener('click', () =>
    {
        if(playerPoints < wins && computerPoints < wins)
        {
            if(buttonStatus)
            {
                buttonStatus = false;
                let decision = playRound();
                let winner = decision.split(" ");
                if(winner[0] == "Tie."){       
                    updateMiddle(decision, 2); 
                }
                else{
                    if(winner[1] == "win,") 
                    {
                        playerPoints++;
                        updateMiddle(decision, 1);
                    }
                    else 
                    {
                        computerPoints++;
                        updateMiddle(decision, 0);
                    }

                }
                if(computerPoints == wins || playerPoints == wins)
                {
                    showModal(playerPoints > computerPoints);
                }
                updateText(computerPoints, playerPoints);
            }
            else
            {
                clearMiddle();
            }
        }
    });
}

function clearMiddle() {
    buttonStatus = true;
    playButton.innerText = "Play";
    removeComputerColor();
    const middle = document.querySelector('.decider-text .display');
    middle.innerText = "";
}

function updateMiddle(message, winner)
{
    const middle = document.querySelector('.decider-text .display');
    middle.innerText = message;
    middle.style.color = winner == 0? "#996888" : winner == 1? "#04724D" : "black";
    playButton.innerText = "Continue"
}

function updateText(computerPoints, playerPoints) 
{
    const playerScore = document.querySelector('.calc-player');
    const computerScore = document.querySelector('.calc-computer');
    playerScore.textContent = playerPoints;
    computerScore.textContent = computerPoints;
}

function showModal(winner){

    const modal = document.getElementById('modal');
    modal.classList.add('active');
    overlay.classList.add('active');
    const modalBody = document.getElementById('body-content');
    if(winner)
    {
        modalBody.innerText = "You win!!!"
    }
    else
    {
        modalBody.innerText = "You lost :("
    }

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            closeModal(modal);
            startGame();
            updateText(0, 0);
            removeComputerColor();
            clearMiddle();
        });
    });
}

function closeModal(modal)
{
    modal.classList.remove('active');
    overlay.classList.remove('active');
}




window.addEventListener('keydown', function(e){
    removeComputerColor();
});

checkButtons();
/*
    On button click 
*/



