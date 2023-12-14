let limit = 3;
let playerScore = 0;
let cpuScore = 0;

let playerScoreElement = document.getElementsByClassName('playerScore');
let cpuScoreElement = document.getElementsByClassName('cpuScore');
let resultsElement = document.getElementsByClassName('results')

console.log(playerScoreElement);
console.log(cpuScoreElement);

/*function getPlayerSelection(){

    playerSelection = prompt('Rock... Paper...Scissors').toUpperCase().trim();
    
    while (!(playerSelection == 'ROCK' || playerSelection == 'PAPER' || playerSelection == 'SCISSORS')){
        console.log('OOPS! LOOKS LIKE SOMETHING WENT WRONG!\nDON\'T FORGET, THE THREE OPTIONS FOR ROCK, PAPER, SCISSORS ARE: \nROCK, PAPER, AND SCISSORS');
        playerSelection = prompt('Rock... Paper...Scissors').toUpperCase().trim();
    }
    return playerSelection;
}
*/


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

/*
function singleRound(playerSelection, computerSelection) {
    let tieMessage = "IT\'S A TIE";
    let winMessage = "YOU WIN!";
    let loseMessage = "YOU LOSE!";
    let errorMessage = "WELL, THAT DIDN\'T WORK";

    console.log('                ', playerSelection, ' vs ',computerSelection)
    if (computerSelection == playerSelection){
        return (tieMessage);
    }
    else if (computerSelection == 'ROCK' && playerSelection == 'PAPER'){
        return (winMessage);
    }
    else if (computerSelection == 'PAPER' && playerSelection == 'SCISSORS'){
        return (winMessage);
    }
    else if (computerSelection == 'SCISSORS' && playerSelection == 'ROCK'){
        return (winMessage);
    }
    else if (computerSelection == 'ROCK' && playerSelection == 'SCISSORS'){
        return (loseMessage);
    }
    else if (computerSelection == 'PAPER' && playerSelection == 'ROCK'){
        return(loseMessage);
    }
    else if (computerSelection == 'SCISSORS' && playerSelection == 'PAPER'){
        return(loseMessage);
    }
    else{
        return(errorMessage);
    }
};
*/
function round(playerSelection){
    let computerSelection = getComputerSelection();
    //console.log(computerSelection);
    //console.log(playerSelection);

    if (computerSelection == playerSelection){
        console.log('Tie');
    }
    else if (computerSelection == 'ROCK' && playerSelection == 'PAPER'){
        console.log('Win');
        playerScore +=1;
        playerScoreElement[0].innerHtml = playerScore;
        
    }
    else if (computerSelection == 'PAPER' && playerSelection == 'SCISSORS'){
        console.log('Win');
        playerScore +=1;
        playerScoreElement[0].innerText = playerScore;
    }
    else if (computerSelection == 'SCISSORS' && playerSelection == 'ROCK'){
        console.log('Win');;
        playerScore +=1;
        playerScoreElement[0].innerText = playerScore;
    }
    else if (computerSelection == 'ROCK' && playerSelection == 'SCISSORS'){
        console.log('Lose');
        cpuScore +=1;
        cpuScoreElement[0].innerText = cpuScore;
    }
    else if (computerSelection == 'PAPER' && playerSelection == 'ROCK'){
        console.log('Lose');
        cpuScore +=1;
        cpuScoreElement[0].innerText = cpuScore;
    }
    else if (computerSelection == 'SCISSORS' && playerSelection == 'PAPER'){
        console.log('Lose');
        cpuScore +=1;
        cpuScoreElement[0].innerText = cpuScore;
    }
    else{
        console.log('Error');
    }

    if (playerScore == limit){
        celebration();
        resultsElement[0].innerText = 'You Won'
        playerScoreElement[0].innerText = '0'
        cpuScoreElement[0].innerText = '0';

        ;
    } else if (cpuScore == limit){
        consolation();
        resultsElement[0].innerText = 'You Lost'
        playerScoreElement[0].innerText = '0'
        cpuScoreElement[0].innerText = '0';
    } else{
        resultsElement[0].innerText = ''
    }


    playerScoreElement.innerHtml = playerScore;
    cpuScoreElement.innerHtml = cpuScore;
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
