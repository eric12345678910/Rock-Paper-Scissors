
output = "This is the output of my test";
function test(){
    return output
}


function getPlayerSelection(){
    selection = prompt('Rock... Paper...')
    playerSelection = selection.toUpperCase().trim()
    if (!(playerSelection == 'ROCK' || playerSelection == 'PAPER' || playerSelection == 'SCISSORS')){
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
    if (computerSelection == playerSelection){
        return ("It\'s a Tie!");
    }
    else if (computerSelection == 'ROCK' && playerSelection == 'PAPER'){
        return('You Win! Paper covers Rock.');
    }
    else if (computerSelection == 'PAPER' && playerSelection == 'SCISSORS'){
        return("You Win! Scissors cut Paper.")
    }
    else if (computerSelection == 'SCISSORS' && playerSelection == 'ROCK'){
        return("You Win! Rock breaks Scissors.")
    }
    else if (computerSelection == 'ROCK' && playerSelection == 'SCISSORS'){
        return("You lose. Rock breaks Scissors.")
    }
    else if (computerSelection == 'PAPER' && playerSelection == 'ROCK'){
        return("You lose. Paper covers Rock.")
    }
    else if (computerSelection == 'SCISSORS' && playerSelection == 'PAPER'){
        return("You lose. Scissors cut Paper.")
    }
    else{
        return("That didn\'t work.")
    }
}

function rockPaperScissors(){
    let limit = 5;
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore < limit || computerScore < limit) {
        result = singleRound(  getPlayerSelection(), getComputerSelection()  )
        if (result.includes('Win')){
            playerScore++
            console.log('You win')
        } 
        else if (result.includes('lose')){
            computerScore++
            console.log('You lose')
        }
    }
    if (playerScore == limit) {
        return('YOU WIN')
    }
    else if (computerScore == limit){
        return('YOU LOSE')
    }
}


