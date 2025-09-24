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

            let winner = null;
            const winningCombinations = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ];

            for (const combination of winningCombinations) {
                const [a, b, c] = combination;
                if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
                    winner = grid[a];
                    break;
                }
            }

            if (winner){
                gameStatus = document.getElementById('status');
                gameStatus.textContent = `Congratulations! ${winner} is the Winner!`;
                gameStatus.classList.add('you-won');
            }
        });
    }

    document.getElementsByClassName('btn')[0].addEventListener('click', () => {
        grid = ["", "", "", "", "", "", "", "", ""];
        currentPlayer = "X";
        gameStatus = document.getElementById('status');
        gameStatus.textContent = "Move your mouse over a square and click to play an X or an O.";
        gameStatus.classList.remove('you-won');
        for (let i = 0; i < squares.length; i++) {
            squares[i].textContent = '';
            squares[i].classList.remove('X', 'O');
        }
    });


});