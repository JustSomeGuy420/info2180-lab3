document.addEventListener('DOMContentLoaded', () => {
    let grid = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = "X";

    squares = document.getElementById('board').children;
    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.add('square');
        squares[i].addEventListener('click', () => {
            if (currentPlayer === "X" && squares[i].textContent === '') {
                grid[i] = 'X';
                squares[i].textContent = "X";
                squares[i].classList.add('X');
                currentPlayer = "O";
            }
            else if (currentPlayer === "O" && squares[i].textContent === '') {
                grid[i] = 'O';
                squares[i].textContent = "O";
                squares[i].classList.add('O');
                currentPlayer = "X";
            }
            console.log(grid);
        });
    }


});