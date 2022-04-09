'use strict';

function renderBoard() {
    let result = createChessBoard();
    const boardEl = document.querySelector('#board');
    boardEl.insertAdjacentHTML('afterbegin', result);
};

function createChessBoard() {
    let size = 8;
    let board = ''
    let letters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''];
    let numbRevers = ['8', '7', '6', '5', '4', '3', '2', '1']
    let headerAndFooter = '';

    headerAndFooter += '<tr>';
    for (let i = 0; i < letters.length; i++) {
        headerAndFooter += `<td>${letters[i]}</td>`;
    }
    headerAndFooter += '</tr>';

    for (let y = 0; y < size; y++) {
        board += '<tr>';
        board += `<td>${y + 1}</td>`
        for (let x = 0; x < size; x++) {
            if ((x % 2 === 0 && y % 2 === 0) || (x % 2 !== 0 && y % 2 !== 0)) {
                var color = 'white';
            } else {
                var color = 'black';
            }

            board += `<td class='${color}' data-x='${x}' data-y='${y}'></td>`;
        }
        board += `<td>${numbRevers[y]}</td>`
        board += '</tr>';
        ;
    }
    return `<table id="chess">${headerAndFooter} ${board} ${headerAndFooter}</table>`;
}

renderBoard()










