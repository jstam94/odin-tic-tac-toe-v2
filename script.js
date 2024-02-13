
// Module to expose only needed game inputs

let gameController = (function(){  
let currentPlayer 
let gameStarted = false;
let gameOver = false;

printStatus = function (){
    console.log({currentPlayer, gameStarted, gameOver})
}
    
let players = (function(){
    let players;
    let getPlayers = () => players;
    let createPlayer = function (name, mark){
        return {name, mark}
    }
    let selection = function (){
        if (!players){
        let player1 = createPlayer( document.getElementById('player1').value, 'x')
        let player2 = createPlayer( document.getElementById('player2').value, 'o')
        players = [player1, player2];
        } else return;
    }
    let clear = function () {
        players = undefined;
    }
    return {selection, getPlayers, clear}
})();

let board = (function(){
    let board = [null, null, null, null, null, null, null, null, null,]
    let get = () => board;
    let clear = function (){
        board.forEach(cell => {
            cell = null;
        });
    }
    let select = function(cell, mark){
        if (!(board[cell])){
        board[cell] = mark;
        (currentPlayer === players.getPlayers()[0]) ? currentPlayer = players.getPlayers()[1] : currentPlayer = players.getPlayers()[0];
        } else return;
    }

    return {clear, select, get}
})()


 function start (){
    if (gameOver || gameStarted) return;
    gameStarted = true;
    players.selection();
    currentPlayer = players.getPlayers()[0];
}

restart = function(){

}

// let checkWinCondition = function (){
// console.log('running checkWinCondition')
// }

let playRound = function(cell){
    if (gameOver || !gameStarted) return;
    console.log(cell, currentPlayer.mark)
    board.select(cell, currentPlayer.mark);
    // checkWinCondition();
}


// {start, restart, playRound} should be only things exposed at end, will temporarily expose other things to test
return {start, restart, playRound, board, printStatus, players}
}) ()


// Module that will controll gameController via Event Listeners

screenController = (function(){
   
     document.getElementById('start').addEventListener('click', () => gameController.start());
    
    let cells = document.querySelectorAll('.cell');


    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            console.log('click');
            gameController.playRound(+cell.getAttribute('id'))
        })
    });

})();
