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
let playerSelectionElement = document.getElementById("playerSelection")

let cpuSelectionElemeElement = document.getElementById("roundResults")
let limitElement = document.getElementsByClassName('scoreLimit');
let playerScoreElement = document.getElementsByClassName('playerScore');
let cpuScoreElement = document.getElementsByClassName('cpuScore');

let li = document.createElement('li');
playerScoreElement[0].innerText = output.playerScore;
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
            output.playerScore ++;
    }
    else if (cpuSelection == 'rock' && playerSelection == 'scissors'||
        cpuSelection == 'paper' && playerSelection == 'rock'||
        cpuSelection == 'scissors' && playerSelection == 'paper'){
            output.roundResult = 'lose';
            output.cpuScore ++;
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

    console.log('here is the input that the function is running', result)

    if (output.playerScore == output.scoreLimit || output.cpuScore == output.scoreLimit){
        output.gameNumber++
        output.roundNumber = 1,
        output.playerScore = 0,
        output.cpuScore = 0,
        //cpuWins = cpuWins,
        
        ties = 0,
        roundResult = output.roundResult
    }
    if (result.roundResult == 'Win'){
        output.playerScore++;
    }
    else if (result.roundResult == 'Lose'){
        output.cpuScore++;
    }
    else if(result.roundResult =='Tie'){
        output.ties++;
    }
    /*if (result.roundResult =='Win'||
        result.roundResult =='Lose'||
        result.roundResult =='Tie'){

        }*/
 
    if(output.playerScore == output.scoreLimit){
        output.playerWins ++;
        }
    else if(output.cpuScore == output.scoreLimit){
        output.cpuWins ++;
        }


    outputList.push(output)
    console.log('here is that output list you asked for. ', outputList)
    if (outputList.length > 1){
        console.log(outputList[outputList.length -1])
    }
    else if (outputList.length == 1){
        console.log(outputList[0])
    }
        
   //console.log('list: ', outputList[outputList.length -1])
   
   playerScoreElement[0].innerText = output.playerScore;
   cpuScoreElement[0].innerText = output.cpuScore;

   console.log('PLAYER SCORE:', output.playerScore)
   console.log('CPU SCORE:', output.cpuScore)
   

    let playerSelectionElement = document.getElementById('playerSelection')
    playerSelect = document.createElement('ul');
    playerSelect.innerText = output.playerSelection;
    playerSelectionElement.prepend(playerSelect);

    let resultElement = document.getElementById('roundResult')
    resultCol = document.createElement('ul');
    resultCol.innerText = output.roundResult;
    resultElement.prepend(resultCol);

    let cpuSelectionElement = document.getElementById('cpuSelection')
    cpuSelect = document.createElement('ul');
    cpuSelect.innerText = output.cpuSelection;
    cpuSelectionElement.prepend(cpuSelect);



    /*

    ul2 = document.createElement('ul');
    ul2.innerText = output.playerSelection;
    let rowElement = document.getElementById('playerSelection');
    playerSelectionElement.appendChild(ul2);
*/
//let playerSelectionElement = document.getElementById("playerSelection")
    let colElement = document.getElementById('playerSelection')
    col = document.createElement('ul');
    col.innerText = output.playerSelection;
    

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
limitElement[0].innerText = output.scoreLimit;
limitElement[1].innerText = output.scoreLimit;
