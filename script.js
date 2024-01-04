/*
let gameNumber = 1;
let roundNumber = 1;
let scoreLimit = 3;

let playerHand = "";
let playerScore = 0;
let playerWins = 0;


let cpuHand = "";
let cpuScore = 0;
let cpuWins = 0;

let ties = 0;
let roundResult;

let outputList = [];
*/



let output = {
    'gameNumber':1,
    'roundNumber':1,

    'playerSelection':"",
    'playerScore':0,
    'playerWins':0,

    'cpuSelection':"",
    'cpuScore':0,
    'cpuWins':0,

    'ties':0,
    'roundResult':"",
    'scoreLimit':3
}
let outputList = [];


//                          GET ELEMENTS
let resultElement = document.getElementById("roundResults")
let limitElement = document.getElementsByClassName('scoreLimit');
let playerScoreElement = document.getElementsByClassName('playerScore');
let cpuScoreElement = document.getElementsByClassName('cpuScore');

let li = document.createElement('li');
playerScoreElement[0].innerText = output.playerScore;
cpuScoreElement[0].innerText = output.cpuScore;


/*                         MESSAGES
let winMessage = 'Win';
let loseMessage = 'Lose';
let tieMessage = 'Tie';
let champMessage = 'CONGRADULATIONS!!! YOU WON THE GAME'
let consolationMessage = 'JUST TRY AGAIN. I WON\'T TELL IF YOU DON\'T'
let errorMessage = 'Error'
let tie = 'Tie'
*/





//                                                      COMPUTER SELECTION
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
    return (cpuSelection);                          // return ROCK PAPER SCISSOR
}

//                                                              SINGLE ROUND
function singleRound(playerSelection){
    let cpuSelection = getCpuSelection();
    output.cpuSelection = cpuSelection;
        output.playerSelection = playerSelection;


    if (cpuSelection == playerSelection){
        output.roundResult = 'Tie';                             //roundResult = tieMessage;
    }
    else if (cpuSelection == 'ROCK' && playerSelection == 'PAPER'||    //player wins
        cpuSelection == 'PAPER' && playerSelection == 'SCISSORS'||
        cpuSelection == 'SCISSORS' && playerSelection == 'ROCK'){
            output.roundResult = 'Win';
    }
    else if (cpuSelection == 'ROCK' && playerSelection == 'SCISSORS'||
        cpuSelection == 'PAPER' && playerSelection == 'ROCK'||
        cpuSelection == 'SCISSORS' && playerSelection == 'PAPER'){
            output.roundResult = 'Lose';
    }
    else{
        output.roundResult = 'Error';
    }
    console.log(output.roundResult) // win lose or tie

    

    console.log('Single Round Output: ', output)
    
    return output                         // object with selections and result
}


/*

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

    resultElement.appendChild(li);

//                     NEXT ROUND
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
function fullGame(result){
    /*
    let output = {
        'scoreLimit':scoreLimit,
        'gameNumber':gameNumber,
        'roundNumber':result.roundNumber,
    
        'playerSelection':result.playerSelection,
        'playerScore':playerScore,
        'playerWins':playerWins,
    
        'cpuSelection':result.cpuSelection,
        'cpuScore':cpuScore,
        'cpuWins':cpuWins,
    
        'ties':ties,
        'roundResult':result.roundResult 
    }*/

    if (result.roundResult == 'Win'){
        output.playerScore++;
    }
    else if (result.roundResult == 'Lose'){
        output.cpuScore++;
    }
    else if(result.roundResult =='Tie'){
        output.ties++;
    }
    if (result.roundResult =='Win'||
        result.roundResult =='Lose'||
        result.roundResult =='Tie'){

        }
 
    if(output.playerScore == output.scoreLimit){
        output.playerWins ++;
        }
    else if(output.cpuScore == output.scoreLimit){
        output.cpuWins ++;
        }

    if (output.playerScore == output.scoreLimit || output.cpuScore == output.scoreLimit){
        output.gameNumber++
        output.roundNumber = 1,
        output.playerScore = 0,
        output.cpuScore = 0,
        //cpuWins = cpuWins,
        
        ties = 0,
        roundResult = result.roundResult
    }
    outputList.push(output)
    if (outputList.length > 1){
        console.log(outputList[outputList.length -1])
    }
    else if (outputList.length == 1){
        console.log(outputList[0])
    }
        
   //console.log('list: ', outputList[outputList.length -1])
   
   playerScoreElement[0].innerText = output.playerScore;
   cpuScoreElement[0].innerText = output.cpuScore;

}



function gameStats(){
    console.log('Game Stats: ', outputList)
}

function rock(){
    playerSelection = "ROCK";
    fullGame(singleRound('ROCK'))
    //console.log(playerSelection);
}

function paper(){
    playerSelection = "PAPER";
    fullGame(singleRound('PAPER'))
    //console.log(playerSelection);
}

function scissors(){
    playerSelection = "SCISSORS";
    fullGame(singleRound('SCISSORS'))
    //console.log(playerSelection);
}


document.getElementById("rock").addEventListener("click", rock);
document.getElementById("paper").addEventListener("click", paper);
document.getElementById("scissors").addEventListener("click", scissors);

//                          SET NUMBERS
limitElement[0].innerText = output.scoreLimit;
limitElement[1].innerText = output.scoreLimit;
