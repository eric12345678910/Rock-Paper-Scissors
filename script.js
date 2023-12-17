let roundNumber = 0;
let scoreLimit = 3;
let playerHand = "";
let cpuHand = "";
let roundResult;
let playerScore = 0;
let cpuScore = 0;

let outputList = [];


//                          GET ELEMENTS
let resultElement = document.getElementById("roundResults")
let limitElement = document.getElementsByClassName('scoreLimit');
let playerScoreElement = document.getElementsByClassName('playerScore');
let cpuScoreElement = document.getElementsByClassName('cpuScore');

let li = document.createElement('li');


//                          MESSAGES
let winMessage = 'Win';
let loseMessage = 'Lose';
let tieMessage = 'Tie';
let champMessage = 'CONGRADULATIONS!!! YOU WON THE GAME'
let consolationMessage = 'JUST TRY AGAIN. I WON\'T TELL IF YOU DON\'T'
let errorMessage = 'Error'
let tie = 'Tie'


//                          SET NUMBERS
limitElement[0].innerText = scoreLimit;
limitElement[1].innerText = scoreLimit;
playerScoreElement[0].innerText = playerScore;
cpuScoreElement[0].innerText = cpuScore;



//                          COMPUTER SELECTION
function getCpuSelection(){
    let randomInt;
    let cpuSelection;

    randomInt = Math.floor(Math.random() * 3) +1 ;
    if (randomInt == 1){
        cpuSelection = 'ROCK';
    }
    else if (randomInt == 2){
        cpuSelection = 'PAPER';
    }
    else if (randomInt == 3){
        cpuSelection = 'SCISSORS';
    }
    return (cpuSelection);
}

//                      PLAYER SELECTION
function round(playerSelection){
    let cpuSelection = getCpuSelection();

    if (cpuSelection == playerSelection){
        roundResult = tieMessage;
        roundNumber++;
    }
    else if (cpuSelection == 'ROCK' && playerSelection == 'PAPER'){
        roundResult = winMessage;
        playerScore++;
        roundNumber++;   
    }
    else if (cpuSelection == 'PAPER' && playerSelection == 'SCISSORS'){
        roundResult = winMessage;
        playerScore++;
        roundNumber++;
    }
    else if (cpuSelection == 'SCISSORS' && playerSelection == 'ROCK'){
        roundResult = winMessage;
        playerScore++;
        roundNumber++;
    }
    else if (cpuSelection == 'ROCK' && playerSelection == 'SCISSORS'){
        roundResult = loseMessage;
        cpuScore++;
        roundNumber++;
    }
    else if (cpuSelection == 'PAPER' && playerSelection == 'ROCK'){
        roundResult = loseMessage;
        cpuScore++;
        roundNumber++;
    }
    else if (cpuSelection == 'SCISSORS' && playerSelection == 'PAPER'){
        roundResult = loseMessage;
        cpuScore++;
        roundNumber++;
    }
    else{
        roundResult = errorMessage;
    }

    console.log("Round Number:", roundNumber, 
                " Result:", roundResult, 
                " Player Selection:", playerSelection, 
                " CPU Selection:", cpuSelection, 
                " Player Score:", playerScore, 
                " CPU Score:", cpuScore);
   

    

//                          GAME OVER
    if (playerScore == scoreLimit){
        roundResult = champMessage;

        //playerScoreElement[0].innerText = '0';
        //cpuScoreElement[0].innerText = '0';
    } 
    else if (cpuScore == scoreLimit){
        roundResult = consolationMessage;
        playerScoreElement[0].innerText = playerScore;
        cpuScoreElement[0].innerText = cpuScore;
    } 

    let result = "Round Number:" + roundNumber +
                " Result:" + roundResult +
                " Player Selection:" + playerSelection +
                " CPU Selection:" + cpuSelection +
                " Player Score:" + playerScore +
                " CPU Score:" + cpuScore ;











//                      APPENDING

 //   resultElement.appendChild((output['result']));

    li = document.createElement('li');
    li.innerText = result;
   


    resultElement.appendChild(li)


//                      NEXT ROUND
    playerScoreElement[0].innerText = playerScore;
    cpuScoreElement[0].innerText = cpuScore;

}


//////////////////////////////////////////////////////////////




/*
function rockPaperScissors(){
    let round = 0;
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < limit || computerScore < limit) {
        if (playerScore == limit){
            console.log("FINAL SCORE      USER ",playerScore, "CPU ", computerScore, "\nYOU WIN!!!!!");
            break;
        }
        else if (computerScore == limit){
            console.log("FINAL SCORE      USER ",playerScore, "CPU ", computerScore, "\nYOU LOSE!!!!!");
            break;
        }

        console.log('');
        console.log('ROUND ', round, '        USER ', playerScore, '    CPU ', computerScore );
        result = singleRound(  getPlayerSelection(), getComputerSelection() );

        if (result.includes('WIN')){
            playerScore++;
            round++;
            console.log('                 YOU WIN');
        } 
        else if (result.includes('LOSE')){
            computerScore++;
            round++;
            console.log('                 YOU LOSE');
        }
        else if (result.includes('TIE' || "THAT DIDN\'T WORK.")){
            round++;
            console.log('                 IT\'S A TIE!\n');
        }
    }
}
*/


function rock(){
    playerSelection = "ROCK";
    round('ROCK')
    //console.log(playerSelection);
}

function paper(){
    playerSelection = "PAPER";
    round('PAPER')
    //console.log(playerSelection);
}

function scissors(){
    playerSelection = "SCISSORS";
    round('SCISSORS')
    //console.log(playerSelection);
}


document.getElementById("rock").addEventListener("click", rock);
document.getElementById("paper").addEventListener("click", paper);
document.getElementById("scissors").addEventListener("click", scissors);

