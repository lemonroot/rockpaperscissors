computerPlay();

function computerPlay(){
    let moves = ['Rock', 'Paper', 'Scissors'];

    let moveChoice = Math.floor(Math.random() * moves.length);
    console.log(moves[moveChoice]);
    return moves[moveChoice];
}