
output = "This is the output of my test";
function test(){
    return output
}


function getPlayerSelection(){
    playerSelection = prompt('Rock... Paper...')
    if (!(playerSelection == 'Rock' || playerSelection == 'Paper' || playerSelection == 'Scissors')){
        return('Looks like We\'ve got a comedian over here!')
    }
    else{
        return(playerSelection)  
    }
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
    if (computerSelection.upperCase == playerSelection.upperCase){
        return ("It\'s a Tie!");
    }
    else if (computerSelection == 'ROCK' && playerSelection.upperCase == 'PAPER'){
        return('You Win! Paper covers Rock.');
    }
    else if (computerSelection == 'PAPER' && playerSelection.upperCase == 'SCISSORS'){
        return("You Win! Scissors cut Paper.")
    }
    else if (computerSelection == 'SCISSORS' && playerSelection.upperCase == 'ROCK'){
        return("You Win! Rock breaks Scissors.")
    }

    else if (computerSelection == 'ROCK' && playerSelection.upperCase == 'SCISSORS'){
        return("You lose. Rock breaks Scissors.")
    }
    else if (computerSelection == 'PAPER' && playerSelection.upperCase == 'ROCK'){
        return("You lose. Paper covers Rock.")
    }
    else if (computerSelection == 'SCISSORS' && playerSelection.upperCase == 'PAPER'){
        return("You lose. Scissors cut Paper.")
    }
    else{
        return("That didn\'t work.")
    }
}

function rockPaperScissors(){
    getPlayerSelection();
    getComputerSelection();
}


