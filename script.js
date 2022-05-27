let answer = prompt("Please input Rock, Paper, or Scissors.");

playGame(answer);

function computerPlay(){
    let moves = ['Rock', 'Paper', 'Scissors'];

    let moveChoice = Math.floor(Math.random() * moves.length);
    console.log(moves[moveChoice]);
    return moves[moveChoice];
}

function playGame(answer){
    console.log(answer);
    if(answer.toUpperCase == computerPlay().toUpperCase){
        console.log("same")
    } else{console.log("different")}
}