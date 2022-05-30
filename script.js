function computerPlay(){
    const moves = ['rock', 'paper', 'scissors'];

    let moveChoice = Math.floor(Math.random() * moves.length);
    return moves[moveChoice];
}

function game(){
    let answer = prompt(": Please input Rock, Paper, or Scissors.");
    let computerSelection = computerPlay();
    playRound(answer, computerSelection);
}

function playRound(answer, computerSelection){
    const answerFixed = answer.toLowerCase();
    if(answerFixed == computerSelection){
        console.log("Draw!");
    } else{
        if(answerFixed == "rock"){
            if(computerSelection == "scissors"){
                result("win", answerFixed, computerSelection);
            } else if(computerSelection == "paper"){
                result("lose", computerSelection, answerFixed);
            }
        }
        else if(answerFixed == "scissors"){
            if(computerSelection == "paper"){
                result("win", answerFixed, computerSelection);
            } else if(computerSelection == "rock"){
                result("lose", computerSelection, answerFixed);
            }
        }
        else if(answerFixed == "paper"){
            if(computerSelection == "rock"){
                result("win", answerFixed, computerSelection);
            } else if(computerSelection == "scissors"){
                result("lose", computerSelection, answerFixed); 
            }
        } else{
            console.log("Invalid input!");
        }
    }
}

function createGUI(){
    // buttons is a node list. It looks and acts much like an array.
    const buttons = document.querySelectorAll("button");
    console.log(buttons);

    // we use the .forEach method to iterate through each button
    buttons.forEach((button) => {
        // and for each one we add a 'click' listener
        button.addEventListener('click', function(e) {
            alert(button.id);
        });
    });
}

function result(condition, result1, result2){
    console.log("You " + condition + "! " + (result1.charAt(0).toUpperCase() + result1.substr(1).toLowerCase()) + " beats " + result2 + "!");
}

let wins = 0;
let draws = 0;
createGUI();
//game();

