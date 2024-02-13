let gameController = (function(){  

    let currentPlayer 
    let winner 
    let gameStarted = false;
    let gameOver = false;
    
    let status = function (){
        return {currentPlayer, gameStarted, gameOver, winner}
    }

    let turn = () => currentPlayer.name
    
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
            checkForWin();
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

    function win(){
        console.log('winner found')
        gameOver = true;
    }

    let checkForWin = function (){
        console.log(`Checking if ${currentPlayer.name} is the winner`)
        let winningCombos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
        ]
        
        winningCombos.forEach(combo => {
            if (board.get()[combo[0]] === currentPlayer.mark && board.get()[combo[1]] == currentPlayer.mark && board.get()[combo[2]] == currentPlayer.mark){
                win();
            }
        });
    }

    let playRound = function(cell){
        if (gameOver || !gameStarted) return;
        board.select(cell, currentPlayer.mark);
    }


return {start, restart, playRound, board, status, turn}
}) ()




screenController = (function(){
    let cells = document.querySelectorAll('.cell');
    let start = document.getElementById('start');
    let status = document.getElementById('status');

    function render(){
        let game = gameController.status()
        cells.forEach(cell => {
            cell.textContent = gameController.board.get()[+cell.getAttribute('id')]
        });
        
        if (!game.gameOver){
            status.innerText = `It is ${game.currentPlayer.name}'s turn`
        }
    }
    start.addEventListener('click', () =>{
        gameController.start();
        render();
    });
    
    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            gameController.playRound(+cell.getAttribute('id'));
            render();
        })
    });

})();
