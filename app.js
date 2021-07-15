// DOM References
const boardElement = document.querySelector(".board");
const turnAnnounce = document.querySelector(".turn-announce");
const winAnnounce = document.querySelector(".win-announce");
let winMessageX = "X wins this game!";
let winMessageO = "O wins this game!";
let tieMessage = "It's a tie!";
const squares = document.querySelectorAll(".square");
const square1a = document.querySelector("#square1a");
const square1b = document.querySelector("#square1b");
const square1c = document.querySelector("#square1c");
const square2a = document.querySelector("#square2a");
const square2b = document.querySelector("#square2b");
const square2c = document.querySelector("#square2c");
const square3a = document.querySelector("#square3a");
const square3b = document.querySelector("#square3b");
const square3c = document.querySelector("#square3c");



// GLOBAL VARIABLES (aka State)
let players = ['x', 'o'];
let currentPlayer = players[Math.floor(Math.random() * 2)];

if (currentPlayer == 'x') {
    turnAnnounce.textContent = "It is X's turn!";
} else if (currentPlayer == 'o') {
    turnAnnounce.textContent = "It is O's turn!";
};

console.log(currentPlayer);

// FUNCTIONS

function handleClick(event) {
    let clickedSquare = event.target;
    
    // Checks for filled squares
    if (clickedSquare.classList.contains("x")) {
        turnAnnounce.textContent = "That square is taken. Try another square.";
        return null;
    };
    if (clickedSquare.classList.contains("o")) {
        turnAnnounce.textContent = "That square is taken. Try another square.";
        return null;
    };
    
    // Denotes who is the current player w/ class
    clickedSquare.classList.add(currentPlayer)
    winner();

    // Counts how many squares have contents
    let squareX = document.querySelectorAll(".x");
    let numOfX = squareX.length;
    let squareO = document.querySelectorAll(".o");
    let numOfO = squareO.length;
    let numOfFullSquares = numOfO + numOfX;

    // Sets the announcement of whose turn it is and switches the turn
    if (currentPlayer == "x") {
        currentPlayer = "o";
        turnAnnounce.textContent = "It is O's turn!";
    } else {
        currentPlayer = "x";
        turnAnnounce.textContent = "It is X's turn!";
    };
    // Checks for tie
    function checkForTie() {
        let numOfBlankSquares = 9 - numOfFullSquares;
        if (numOfBlankSquares === 0) {
            winAnnounce.textContent = "It's a tie!";
            winAnnounce.style.backgroundColor = "pink";
            turnAnnounce.textContent = '';
            turnAnnounce.style.backgroundColor = "white";
        }

        console.log(numOfBlankSquares);
    }
    checkForTie();
};

function callWinner () {
    winAnnounce.textContent = winMessageX;
    winAnnounce.style.backgroundColor = "pink";
    turnAnnounce.textContent = '';
    turnAnnounce.style.backgroundColor = "white";
};

function winner (){
    if (square1a.classList.contains("x") && square1b.classList.contains("x") && square1c.classList.contains("x")) {
        callWinner();
    } else if (square2a.classList.contains("x") && square2b.classList.contains("x") && square2c.classList.contains("x")) {
        callWinner();
    } else if (square3a.classList.contains("x") && square3b.classList.contains("x") && square3c.classList.contains("x")) {
        callWinner();
    } else if (square1a.classList.contains("x") && square2b.classList.contains("x") && square3c.classList.contains("x")) {
        callWinner();
    } else if (square3a.classList.contains("x") && square2b.classList.contains("x") && square1c.classList.contains("x")) {
        callWinner();
    } else if (square1a.classList.contains("o") && square1b.classList.contains("o") && square1c.classList.contains("o")) {
        callWinner();
    } else if (square2a.classList.contains("o") && square2b.classList.contains("o") && square2c.classList.contains("o")) {
        callWinner();
    } else if (square3a.classList.contains("o") && square3b.classList.contains("o") && square3c.classList.contains("o")) {
        callWinner();
    } else if (square1a.classList.contains("o") && square2b.classList.contains("o") && square3c.classList.contains("o")) {
        callWinner();
    } else if (square3a.classList.contains("o") && square2b.classList.contains("o") && square1c.classList.contains("o")) {
        callWinner();
    else {
        winAnnounce.textContent = '';
    };
};




// EVENT LISTENERS

boardElement.addEventListener('click', handleClick);