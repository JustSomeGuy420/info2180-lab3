document.addEventListener('DOMContentLoaded', () => {
    squares = document.getElementById('board').children;
    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.add('square');
    }
});