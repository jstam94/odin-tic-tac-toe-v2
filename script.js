console.log('Script Connected');


// Module to expose only needed game inputs

gameController = (function(){
    let currentPlayer;
    let gameStarted = false;
    let gameOver = false;
    
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
        currentPlayer = players[0];
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
    clear = function (){
        board.forEach(cell => {
            cell = null;
        });
    }
    select = function(cell){
        if (gameStarted){
            if (!(board[cell])){
            board[cell] = currentPlayer.mark;
            } else return;
        } else return;
    }

    return {clear, select, get}
})()

start = function(){
 
}

restart = function(){

}

playRound = function(position, player){

}

// {start, restart, playRound} should be only things exposed at end, will temporarily expose other things to test
return {start, restart, playRound, players, board}
}) ()


// Module that will controll gameController via Event Listeners
screenController = (function(){



})();