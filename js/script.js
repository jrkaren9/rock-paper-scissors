function computerPlay() {
    let random = Math.floor(Math.random()*3);
    if(random == 1) return "rock";
    if(random == 2) return "paper";
    else return "scissors";
}

function playRound(playerSelection, computerSelection){

    if(!playerSelection.localeCompare(computerSelection)) return 'draw';
    if(!playerSelection.localeCompare('rock'))
        return (!computerSelection.localeCompare('scissors'));
    else if(!playerSelection.localeCompare('scissors'))
        return (!computerSelection.localeCompare('paper'));
    else if(!playerSelection.localeCompare('paper'))
        return (!computerSelection.localeCompare('rock'));
    else
        return 'wrong';
}

function message(value, playerSelection, computerSelection){
    if(value=='draw') return "Draw, try again";
    if(value=='wrong') return "You didn't choose a valid option";
    if(value==true) return `You win! ${playerSelection} beats ${computerSelection}`;
    return `You lose, ${computerSelection} beats ${playerSelection}`;
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i=0; i<5; i++){
        
        let playerSelection = prompt("Choose Rock, Paper or Scissors");
        
        if(playerSelection!==null){
            let player = playerSelection.toLowerCase();
            let computerSelection = computerPlay();
            let value = playRound(player, computerSelection);
        
            if(value==true){
                playerScore+=1;
            } 
            else if(value==false){
                computerScore+=1;
            }
            else if(value=='wrong')
                i--;

            console.log(message(value, playerSelection, computerSelection));
            console.log('SCORE - Player: ' + playerScore + ', Computer: ' + computerScore);
        }

    }
    if(playerScore>computerScore) console.log("You've won!");
    else if(playerScore==computerScore) console.log("It's a tie");
    else console.log("You've lost :(");
}

game();