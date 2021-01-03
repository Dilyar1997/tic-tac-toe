let player_symbol; 
let enemy_symbol;
button_x = document.getElementById("choose-x");
button_o = document.getElementById("choose-o");
player_symbol_display = document.getElementById("chosen-symbol");
button_x.addEventListener("click", ()=>{
    player_symbol = "X";
    enemy_symbol = "O";
    player_symbol_display.innerHTML = "your symbol is X";
})
button_o.addEventListener("click", ()=>{
    player_symbol = "O";
    eneme_symbol = "X";
    player_symbol_display.innerHTML = "your symbol is O";
})

function randomIntFromInterval() { // min and max included 
    return Math.floor(Math.random() * (8 - 0 + 1) + 0);
  }
let gameBoardx = [];
let gameBoardo = [];
let score_board = [];
cell = document.getElementsByClassName("cell");
function btn_clicked(id){
    insertsymbol(player_symbol, id);
    score_board.push(id);
    gameBoardx.push(player_symbol);
   
    id_enemy = randomIntFromInterval();
    while (score_board.includes(id_enemy)){
        id_enemy = randomIntFromInterval();
    }
    score_board.push(id_enemy);
    insertsymbol(enemy_symbol, id_enemy);
    winner = checkWinner();
    console.log(winner);
    if (winner !== undefined){
        document.getElementById('winnar').innerHTML = "The winner is "+winner;
        restart_game();
    }
}
// restart the game if the restart button is clicked 
function restart_game() {
    var i;
    for (i = 0; i < cell.length; i++) {
        cell[i].innerHTML = "";
    }
    score_board = [];
    gameBoardx = gameBoardo = [];
}

function insertsymbol(symbol, id){
    element = document.getElementById(id);
    console.log(symbol);
    element.innerHTML = symbol;
}

function checkWinner() {
    let winner = null;
    for (let i = 0; i < 9; i = i + 3) {
        if (gameBoardx[i] === player_symbol) {
            if ((gameBoardx[i] === gameBoardx[i + 1]) && (gameBoardx[i + 1] === gameBoardx[i + 2])) { //check rows
                winner = gameBoardx[i];
                return winner;
            }
        }
    }
    for (let i = 0; i < 3; i++) {
        if (gameBoardo[i]) {
            if ((gameBoardo[i] === gameBoardo[i + 3]) && (gameBoardo[i + 3] === gameBoardo[i + 6])) { //check cols
                winner = gameBoardo[i];
                return winner;
            }
        }
    }
}

restart = document.getElementById('restart');
restart.addEventListener('click', () =>{
    restart_game();
})