console.log('Script Connected');











// Module to expose only needed game inputs

gameController = (function(){
    let currentPlayer;
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
        players = [player1, player2]
        } else return;
    }
    return {selection, getPlayers}
})();


start = function(){
 
}

restart = function(){

}

playRound = function(position, player){

}

// {start, restart, playRound} should be only things exposed at end, will temporarily expose other things to test
return {start, restart, playRound, players}
}) ()


// Module that will controll gameController via Event Listeners
screenController = (function(){



})();