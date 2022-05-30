function computerPlay(){
    const moves = ['rock', 'paper', 'scissors'];

    let moveChoice = Math.floor(Math.random() * moves.length);
    return moves[moveChoice];
}

function game(answer){
    let computerSelection = computerPlay();
    playRound(answer, computerSelection);
}

function playRound(answer, computerSelection){
    if(answer == computerSelection){
        resultGUI("draw", answer, computerSelection);
    } else{
        if(answer == "rock"){
            if(computerSelection == "scissors"){
                resultGUI("win", answer, computerSelection);
            } else if(computerSelection == "paper"){
                resultGUI("lose", computerSelection, answer);
            }
        }
        else if(answer == "scissors"){
            if(computerSelection == "paper"){
                resultGUI("win", answer, computerSelection);
            } else if(computerSelection == "rock"){
                resultGUI("lose", computerSelection, answer);
            }
        }
        else if(answer == "paper"){
            if(computerSelection == "rock"){
                resultGUI("win", answer, computerSelection);
            } else if(computerSelection == "scissors"){
                resultGUI("lose", computerSelection, answer); 
            }
        } else{
            console.log("Invalid input!");
        }
    }
}

function btnListener(){
    // buttons is a node list. It looks and acts much like an array.
    const buttons = document.querySelectorAll("button");
    console.log(buttons);

    // we use the .forEach method to iterate through each button
    buttons.forEach((button) => {
        // and for each one we add a 'click' listener
        button.addEventListener('click', function(e) {
            game(button.id);
        });
    });
}

function resultGUI(condition, result1, result2){
    const container = document.querySelector("#buttoncontainer");
    const div = document.createElement("div");
    div.classList.add("result");
    if(condition != "draw"){
        div.textContent = ("You " + condition + "! " + (result1.charAt(0).toUpperCase() + result1.substr(1).toLowerCase()) + " beats " + result2 + "!");
    } else (div.textContent = "Draw!");
    container.appendChild(div);
}

function result(condition, result1, result2){
    console.log("You " + condition + "! " + (result1.charAt(0).toUpperCase() + result1.substr(1).toLowerCase()) + " beats " + result2 + "!");
}

let wins = 0;
let draws = 0;
btnListener();
//game();

