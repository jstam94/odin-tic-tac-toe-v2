let gameController = (function (){
    let currentPlayer;

    function start(){
        currentPlayer = `egg`
    }
    
    function getCurrentPlayer(){
        return currentPlayer
    }
    return{
        start,
        getCurrentPlayer
    }
})()

