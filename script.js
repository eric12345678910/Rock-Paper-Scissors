
output = "This is the output of my test";
function test(){
    return(output)
}


function getPlayerSelection(){

    playerSelection = prompt('Rock... Paper...Scissors').toUpperCase().trim()
    
    while (!(playerSelection == 'ROCK' || playerSelection == 'PAPER' || playerSelection == 'SCISSORS')){
        console.log('OOPS! LOOKS LIKE SOMETHING WENT WRONG!\nDON\'T FORGET, THE THREE OPTIONS FOR ROCK, PAPER, SCISSORS ARE: \nROCK, PAPER, AND SCISSORS');
        playerSelection = prompt('Rock... Paper...Scissors').toUpperCase().trim();
    }
    return playerSelection;
}


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
        return (loseMessage)
    }
    else if (computerSelection == 'PAPER' && playerSelection == 'ROCK'){
        return(loseMessage)
    }
    else if (computerSelection == 'SCISSORS' && playerSelection == 'PAPER'){
        return(loseMessage)
    }
    else{
        return(errorMessage)
    }
}

function rockPaperScissors(){
    let limit = 5;
    let round = 1;
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < limit || computerScore < limit) {
        if (playerScore == limit){
            console.log("FINAL SCORE      USER ",playerScore, "CPU ", computerScore, "\nYOU WIN!!!!!")
            break
        }
        else if (computerScore == limit){
            console.log("FINAL SCORE      USER ",playerScore, "CPU ", computerScore, "\nYOU LOSE!!!!!")
            break
        }

        console.log('')
        console.log('ROUND ', round, '        USER ', playerScore, '    CPU ', computerScore )
        result = singleRound(  getPlayerSelection(), getComputerSelection() )

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


