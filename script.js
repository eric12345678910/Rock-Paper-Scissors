
output = "This is the output of my test";
function test(){
    return output
}

let computerSelection;

function getComputerChoice(){
    let randomInt;
    let cpuChoice;
    randomInt = Math.floor(Math.random() * 3) +1 ;
    if (randomInt == 1){
        cpuChoice = 'Rock';
    }
    else if (randomInt == 2){
        cpuChoice = 'Paper';
    }
    else if (randomInt == 3){
        cpuChoice = 'Scissors';
    }
    return cpuChoice;
    computerSelection = cpuChoice;
}


function rockPaperScissors(playerSelection) {
    if (computerSelection == playerSelection){
        return ("It\'s a Tie!");
    }
    else if (computerSelection == 'Rock' && playerSelection == 'Paper'){
        return('You Win! Paper covers Rock.');
    }
    else if (computerSelection == 'Paper' && playerSelection == 'Scissors'){
        return("You Win! Scissors cut Paper.")
    }
    else if (computerSelection == 'Scissors' && playerSelection == 'Rock'){
        return("You Win! Rock breaks Scissors.")
    }


    else if (computerSelection == 'Rock' && playerSelection == 'Scissors'){
        return("You lose. Rock breaks Scissors.")
    }
    else if (computerSelection == 'Paper' && playerSelection == 'Rock'){
        return("You lose. Paper covers Rock.")
    }
    else if (computerSelection == 'Scissors' && playerSelection == 'Paper'){
        return("You lose. Scissors cut Paper.")
    }
}


