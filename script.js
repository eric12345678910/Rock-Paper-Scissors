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
let gameOver = ""//game over message

//                          GET ELEMENTS


let limitElement = document.getElementsByClassName('scoreLimit');
limitElement[0].innerText = output.scoreLimit;
limitElement[1].innerText = output.scoreLimit;

let playerScoreElement = document.getElementsByClassName('playerScore');
playerScoreElement[0].innerText = output.playerScore;

let cpuScoreElement = document.getElementsByClassName('cpuScore');
cpuScoreElement[0].innerText = output.cpuScore;






//                                                      COMPUTER SELECTION
function getCpuSelection(){
    let randomInt;
    let cpuSelection;

    randomInt = Math.floor(Math.random() * 3) +1 ;
    if (randomInt == 1){
        cpuSelection = 'rock';
    }
    else if (randomInt == 2){
        cpuSelection = 'paper';
    }
    else if (randomInt == 3){
        cpuSelection = 'scissors';
    }
    return (cpuSelection);                          // return ROCK PAPER SCISSOR
}

//                                                              SINGLE ROUND
function singleRound(playerSelection){
    let cpuSelection = getCpuSelection();
    output.cpuSelection = cpuSelection;
        output.playerSelection = playerSelection;

    if (cpuSelection == playerSelection){
        output.roundResult = 'tie';                             //roundResult = tieMessage;
    }
    else if (cpuSelection == 'rock' && playerSelection == 'paper'||    //player wins
        cpuSelection == 'paper' && playerSelection == 'scissors'||
        cpuSelection == 'scissors' && playerSelection == 'rock'){
            output.roundResult = 'win'
    }
    else if (cpuSelection == 'rock' && playerSelection == 'scissors'||
        cpuSelection == 'paper' && playerSelection == 'rock'||
        cpuSelection == 'scissors' && playerSelection == 'paper'){
            output.roundResult = 'lose';
    }
    else{
        output.roundResult = 'Error';
    }
    console.log('Single Round Output: ', output)
    return output                         // object with selections and result
}

function fullGame(result){


    if (result.roundResult == 'win'){
        output.playerScore++;
    }
    else if (result.roundResult == 'lose'){
        output.cpuScore++;
    }
    else if(result.roundResult =='tie'){
        output.ties++;
    }

    if(output.playerScore == output.scoreLimit){
        output.playerWins ++;
        gameOver = "you win"
        }
    else if(output.cpuScore == output.scoreLimit){
        output.cpuWins ++;
        gameOver = "you did not win that one"
    }



    outputList.push(output)
   
    playerScoreElement[0].innerText = output.playerScore;
    cpuScoreElement[0].innerText = output.cpuScore;

    console.log('PLAYER SCORE:', output.playerScore)
    console.log('CPU SCORE:', output.cpuScore)

    let roundNumberElement = document.getElementById('roundNumber')
    roundNum = document.createElement('ul');
    roundNum.innerText = output.roundNumber;
    roundNumberElement.prepend(roundNum);

    let playerSelectionElement = document.getElementById('playerSelection')
    ul = document.createElement('ul');
    ul.innerText = output.playerSelection;
    playerSelectionElement.prepend(ul);

    let resultElement = document.getElementById('roundResult')
    ul = document.createElement('ul');
    ul.innerText = output.roundResult;
    resultElement.prepend(ul);

    let cpuSelectionElement = document.getElementById('cpuSelection')
    ul = document.createElement('ul');
    ul.innerText = output.cpuSelection;
    cpuSelectionElement.prepend(ul);

    if (output.playerScore == output.scoreLimit || output.cpuScore == output.scoreLimit){
        output.gameNumber++
        output.roundNumber = 0,
        output.playerScore = 0,
        output.cpuScore = 0,
        output.ties = 0,
        output.roundResult = "";
        let roundNumberElement = document.getElementById('roundNumber')
        roundNum = document.createElement('ul');
        roundNum.innerText = "-";
        roundNumberElement.prepend(roundNum);

        let playerSelectionElement = document.getElementById('playerSelection')
        ul = document.createElement('ul');
        ul.innerText = "-";
        playerSelectionElement.prepend(ul);

        let resultElement = document.getElementById('roundResult')
        ul = document.createElement('ul');
        ul.innerText = gameOver;
        resultElement.prepend(ul);

        let cpuSelectionElement = document.getElementById('cpuSelection')
        ul = document.createElement('ul');
        ul.innerText = "-";
        cpuSelectionElement.prepend(ul);

        
    }
    output.roundNumber ++;
    console.log('SCORe LIMIITTTTT', output.scoreLimit)

}


function gameStats(){
    console.log('Game Stats: ', outputList)
}

function rock(){
    playerSelection = "rock";
    fullGame(singleRound('rock'))
    //console.log(playerSelection);
}

function paper(){
    playerSelection = "paper";
    fullGame(singleRound('paper'))
    //console.log(playerSelection);
}

function scissors(){
    playerSelection = "scissors";
    fullGame(singleRound('scissors'))
    //console.log(playerSelection);
}


document.getElementById("rock").addEventListener("click", rock);
document.getElementById("paper").addEventListener("click", paper);
document.getElementById("scissors").addEventListener("click", scissors);

//                          SET NUMBERS

