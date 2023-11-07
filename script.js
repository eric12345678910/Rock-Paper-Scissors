
output = "This is the output of my test";

function test(){
    return output
}

function getComputerChoice(){
    let rock = 1;
    let paper = 2;
    let scissors = 3;
    
}

function rockPaperScissors(play){
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
        cpuChoice = 'Scissors'};
    return (cpuChoice)
}
