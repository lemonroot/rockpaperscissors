function computerPlay(){
    const moves = ['Rock', 'Paper', 'Scissors'];

    const moveChoice = Math.floor(Math.random() * moves.length);
    return moves[moveChoice];
}

console.log(moveChoice);