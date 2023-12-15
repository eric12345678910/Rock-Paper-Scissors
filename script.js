let roundNumber = 1;
let limit = 5;
let playerScore = 0;
let cpuScore = 0;
let li = document.createElement('li')
let roundResultsElement = document.getElementsByClassName('roundResults')


let output = {

    Player: "",
    CPU: "",
    Result: ""
};
let outputList = []

//                      MESSAGES
let winMessage = 'Win';
let loseMessage = 'Lose';
let tieMessage = 'Tie';
let champMessage = 'CONGRADULATIONS!!! YOU WON THE GAME'
let consolationMessage = 'JUST TRY AGAIN. I WON\'T TELL IF YOU DON\'T'
let errorMessage = 'Error'
let results = ''

//                      ROUND NUMBER
let roundNumberElement = document.getElementsByClassName('roundResults');
roundNumberElement[0].innerText = roundNumber;
//console.log('ROUND #', roundNumber)

//                      SCORE LIMIT
let limitElement = document.getElementsByClassName('limit');
limitElement[0].innerText = limit;
limitElement[1].innerText = limit;
//console.log('SCORE LIMIT', limit)


//                      SCORES
let playerScoreElement = document.getElementsByClassName('playerScore');
playerScoreElement[0].innerText = playerScore;

let cpuScoreElement = document.getElementsByClassName('cpuScore');
cpuScoreElement[0].innerText = cpuScore;

//                      HAND PLAYED
let playerHandElement = document.getElementsByClassName('playerHand');
let cpuHandElement = document.getElementsByClassName('cpuHand');

//                      RESULTS
let resultsElement = document.getElementsByClassName('roundResults');
resultsElement[0].innerText = results

let tie = 'Tie'


//                      COMPUTER SELECTION
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
        //console.log('Tie');
        results = tieMessage;
    }
    else if (cpuSelection == 'ROCK' && playerSelection == 'PAPER'){
        //console.log('Win');
        playerScore +=1;
        //playerScoreElement[0].innerHtml = playerScore;
        results = winMessage;   
    }
    else if (cpuSelection == 'PAPER' && playerSelection == 'SCISSORS'){
        //console.log('Win');
        playerScore +=1;
        playerScoreElement[0].innerText = playerScore;
        results = winMessage;
    }
    else if (cpuSelection == 'SCISSORS' && playerSelection == 'ROCK'){
        //console.log('Win');;
        playerScore +=1;
        playerScoreElement[0].innerText = playerScore;
        results = winMessage;
    }
    else if (cpuSelection == 'ROCK' && playerSelection == 'SCISSORS'){
        //console.log('Lose');
        cpuScore +=1;
        cpuScoreElement[0].innerText = cpuScore;
        results = loseMessage;
    }
    else if (cpuSelection == 'PAPER' && playerSelection == 'ROCK'){
        //console.log('Lose');
        cpuScore +=1;
        cpuScoreElement[0].innerText = cpuScore;
        results = loseMessage;
    }
    else if (cpuSelection == 'SCISSORS' && playerSelection == 'PAPER'){
        //console.log('Lose');
        cpuScore +=1;
        cpuScoreElement[0].innerText = cpuScore;
        results = loseMessage;
    }
    else{
        //console.log('Error');
        results = errorMessage;
    }

//                          GAME OVER
    if (playerScore == limit){
        roundNumber = 0;
        results = champMessage;

        playerScoreElement[0].innerText = '0';
        cpuScoreElement[0].innerText = '0';
    } 
    else if (cpuScore == limit){
        roundNumber = 0;
        results = consolationMessage;
        playerScoreElement[0].innerText = '0'
        cpuScoreElement[0].innerText = '0';
    } 
    else{
        resultsElement[0].innerText = ''
    }
    
//                      ORGANIZE ROUND RESULTS
    output['Player'] = playerSelection;
    output['CPU'] = cpuSelection;
    output['Result'] = results;

    outputList[(roundNumber)] = output;
    console.log('Round ',roundNumber, outputList[roundNumber])


//                      OUTPUT RESULT


    roundResultsElement[0] = outputList[roundNumber];


//                      NEXT ROUND
    roundNumber ++;

    /*
    roundNumberElement[0].innerText = roundNumber;
    playerScoreElement.innerHtml = playerScore;
    cpuScoreElement.innerHtml = cpuScore;
    resultsElement[0].innerText = results
    */

    console.log("Player: ", playerScore, "CPU:", cpuScore);
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
