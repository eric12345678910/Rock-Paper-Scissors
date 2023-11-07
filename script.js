
output = "This is the output of my test";
function test(){
    return output
}

let computerSelection;

function getComputerChoice(){
    let randomInt;
    let computerChoice;
    randomInt = Math.floor(Math.random() * 3) +1 ;
    if (randomInt == 1){
        computerChoice = 'Rock';
    }
    else if (randomInt == 2){
        computerChoice = 'Paper';
    }
    else if (randomInt == 3){
        computerChoice = 'Scissors';
    }
    return computerChoice;
    computerSelection = computerChoice;
}

function rockPaperScissors(playerSelection, computerSelection) {

    if (computerSelection.toUpperCase() == playerSelection.toUpperCase()){
        return ("It\'s a Tie!");
    }
    else if (computerSelection.toUpperCase == 'Rock' && playerSelection.toUpperCase == 'Paper'){
        return('You Win! Paper covers Rock.');
    }
    else if (computerSelection.toUpperCase == 'Paper' && playerSelection.toUpperCase == 'Scissors'){
        return("You Win! Scissors cut Paper.")
    }
    else if (computerSelection.toUpperCase == 'Scissors' && playerSelection.toUpperCase == 'Rock'){
        return("You Win! Rock breaks Scissors.")
    }

    else if (computerSelection.toUpperCase == 'Rock' && playerSelection.toUpperCase == 'Scissors'){
        return("You lose. Rock breaks Scissors.")
    }
    else if (computerSelection.toUpperCase == 'Paper' && playerSelection.toUpperCase == 'Rock'){
        return("You lose. Paper covers Rock.")
    }
    else if (computerSelection.toUpperCase == 'Scissors' && playerSelection.toUpperCase == 'Paper'){
        return("You lose. Scissors cut Paper.")
    }
}


