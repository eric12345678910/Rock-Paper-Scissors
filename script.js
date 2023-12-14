let roundNumber = 1;
let limit = 5;
let playerScore = 0;
let cpuScore = 0;

let winMessage = 'Yon won that one';
let loseMessage = 'You lost that round';
let tieMessage = 'It\'s a tie!';
let champMessage = 'CONGRADULATIONS'
let consolationMessage = 'JUST TRY AGAIN. I WON\'T TELL IF YOU DON\'T'
let errorMessage = 'Error'




let results = ''

let roundNumberElement = document.getElementsByClassName('round');
roundNumberElement[0].innerText = roundNumber;
console.log('round number', roundNumberElement)

let limitElement = document.getElementsByClassName('limit');
limitElement[0].innerText = limit;
limitElement[1].innerText = limit;
console.log('limit number', limitElement)

let playerScoreElement = document.getElementsByClassName('playerScore');
playerScoreElement[0].innerText = playerScore;

let cpuScoreElement = document.getElementsByClassName('cpuScore');
cpuScoreElement[0].innerText = cpuScore;

let playerHandElement = document.getElementsByClassName('playerHand');
let cpuHandElement = document.getElementsByClassName('cpuHand');

let resultsElement = document.getElementsByClassName('results');
resultsElement[0].innerText = results

let tie = 'Tie'



console.log(playerScoreElement);
console.log(cpuScoreElement);



function getComputerSelection(){
    let randomInt;
    let computerSelection;

    randomInt = Math.floor(Math.random() * 3) +1 ;
    if (randomInt == 1){
        computerSelection = 'ROCK';
    }
    else if (randomInt == 2){
        computerSelection = 'PAPER';
    }
    else if (randomInt == 3){
        computerSelection = 'SCISSORS';
    }
    return (computerSelection);
}

function round(playerSelection){
    let computerSelection = getComputerSelection();

    playerHandElement[0].innerText = playerSelection;
    cpuHandElement[0].innerText = computerSelection;

    if (computerSelection == playerSelection){
        console.log('Tie');
        results = tieMessage;
    }
    else if (computerSelection == 'ROCK' && playerSelection == 'PAPER'){
        console.log('Win');
        playerScore +=1;
        playerScoreElement[0].innerHtml = playerScore;
        results = winMessage;
        
    }
    else if (computerSelection == 'PAPER' && playerSelection == 'SCISSORS'){
        console.log('Win');
        playerScore +=1;
        playerScoreElement[0].innerText = playerScore;
        results = winMessage;
    }
    else if (computerSelection == 'SCISSORS' && playerSelection == 'ROCK'){
        console.log('Win');;
        playerScore +=1;
        playerScoreElement[0].innerText = playerScore;
        results = winMessage;
    }
    else if (computerSelection == 'ROCK' && playerSelection == 'SCISSORS'){
        console.log('Lose');
        cpuScore +=1;
        cpuScoreElement[0].innerText = cpuScore;
        results = loseMessage;
    }
    else if (computerSelection == 'PAPER' && playerSelection == 'ROCK'){
        console.log('Lose');
        cpuScore +=1;
        cpuScoreElement[0].innerText = cpuScore;
        results = loseMessage;
    }
    else if (computerSelection == 'SCISSORS' && playerSelection == 'PAPER'){
        console.log('Lose');
        cpuScore +=1;
        cpuScoreElement[0].innerText = cpuScore;
        results = loseMessage;
    }
    else{
        console.log('Error');
        results = errorMessage;
    }

    if (playerScore == limit){
        roundNumber = 0;
        resultsElement[0].innerText = champMessage;
        playerScoreElement[0].innerText = '0';
        cpuScoreElement[0].innerText = '0';

        ;
    } else if (cpuScore == limit){
        roundNumber = 0;
        resultsElement[0].innerText = consolationMessage;
        playerScoreElement[0].innerText = '0'
        cpuScoreElement[0].innerText = '0';
    } else{
        resultsElement[0].innerText = ''
    }
    
    roundNumber ++;
    roundNumberElement[0].innerText = roundNumber;

    playerScoreElement.innerHtml = playerScore;
    cpuScoreElement.innerHtml = cpuScore;
    resultsElement[0].innerText = results


    console.log("Player: ", playerScore, "CUP:", cpuScore);
    //console.log('player element', playerScoreElement);
    //console.log('cpu element', cpuScoreElement);
}


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



function celebration(){
    console.log('           YOU WIN             ');
    playerScore = 0;
    cpuScore = 0;
}

function consolation(){
    console.log('           YOU LOSE            ')
    playerScore = 0;
    cpuScore = 0;
}





//playerScoreElement.innerHtml = playerScore;
//cpuScoreElement.innerHtml = cpuScore;
