let wins = 0;
let draws = 0;
game();

function computerPlay(){
    const moves = ['rock', 'paper', 'scissors'];

    let moveChoice = Math.floor(Math.random() * moves.length);
    return moves[moveChoice];
}

function game(){
    for(let i = 0; i < 5; i++){
        let answer = prompt("Round " + (i + 1) + ": Please input Rock, Paper, or Scissors.");
        let computerSelection = computerPlay();
        playRound(answer, computerSelection);
    }
    console.log("Final score: \nWINS: " + wins + "\nLOSSES: " + (5 - (wins + draws)) + "\nDRAWS: " + draws);
}

function playRound(answer, computerSelection){
    const answerFixed = answer.toLowerCase();
    if(answerFixed == computerSelection){
        console.log("Draw!");
        draws++;
    } else{
        if(answerFixed == "rock"){
            if(computerSelection == "scissors"){
                win(answerFixed, computerSelection);
                wins++;
            } else if(computerSelection == "paper"){
                lose(answerFixed, computerSelection);
            }
        }
        else if(answerFixed == "scissors"){
            if(computerSelection == "paper"){
                win(answerFixed, computerSelection);
                wins++;
            } else if(computerSelection == "rock"){
                lose(answerFixed, computerSelection);
            }
        }
        else if(answerFixed == "paper"){
            if(computerSelection == "rock"){
                win(answerFixed, computerSelection);
                wins++;
            } else if(computerSelection == "scissors"){
                lose(answerFixed, computerSelection);
            }
        } else{
            console.log("Invalid input!");
        }
    }
    
}

function lose(answerFixed, computerSelection){
    console.log("You lose! " + (answerFixed.charAt(0).toUpperCase() + answerFixed.substr(1).toLowerCase()) + " loses to " + computerSelection + "!");
}

function win(answerFixed, computerSelection){
    console.log("You win! " + (answerFixed.charAt(0).toUpperCase() + answerFixed.substr(1).toLowerCase()) + " beats " + computerSelection + "!");
}

