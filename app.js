var p = document.querySelector('p.game-turn-text');
var span = document.querySelector('span.game-turn');
var root = document.querySelector(':root');

window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
    
    let board = ['', '', '', '', '', '', '', '', ''];
    let turn = 'X';
    let gameOver = false;

    /*
        [0] [1] [2]
        [3] [4] [5]
        [6] [7] [8]
    */

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const userAction = (tile, index) => {
        
    };

    tiles.forEach(tile => {
        tile.addEventListener('click', () => userAction(tile, index))
    });
});

p.addEventListener('click', function() {
    changeTurnText();
});

const changeTurnText = () => {
    if(span.innerHTML == 'X') {
        span.innerHTML = 'O';
        span.style.color = getComputedStyle(root).getPropertyValue('--player-turn-o');
    } else {
        span.innerHTML = 'X';
        span.style.color = getComputedStyle(root).getPropertyValue('--player-turn-x');
    }
}