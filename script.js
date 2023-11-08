
output = "This is the output of my test";
function test(){
    return output
}

let playerSelection;
let computerSelection;

function getPlayerSelection(playerSelection){
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
        computerSelection = 'Rock';
    }
    else if (randomInt == 2){
        computerSelection = 'Paper';
    }
    else if (randomInt == 3){
        computerSelection = 'Scissors';
    }
    return computerSelection;
}


function rockPaperScissors(playerSelection, computerSelection) {

    let computerSelection = getComputerChoice()

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


