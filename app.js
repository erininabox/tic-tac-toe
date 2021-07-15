// DOM References
const boardElement = document.querySelector(".board");
const turnAnnounce = document.querySelector(".turn-announce");
const winAnnounce = document.querySelector(".win-announce");
const square1a = document.querySelector(".square1a");
const square1b = document.querySelector(".square1b");
const square1c = document.querySelector(".square1c");
const square2a = document.querySelector(".square2a");
const square2b = document.querySelector(".square2b");
const square2c = document.querySelector(".square2c");
const square3a = document.querySelector(".square3a");
const square3b = document.querySelector(".square3b");
const square3c = document.querySelector(".square3c");


// GLOBAL VARIABLES (aka State)
let currentPlayer = 'x'; // this is either x or o


// FUNCTIONS
// Pseudocode:
// Step 1: Check if the clicked square has already been clicked
// Step 2: If it hasn't been clicked yet, the X or O image needs to show up on the square
// Step 3: Check if someone won
// Step 4: If no-one won or tied yet, change current player

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

    // Sets the announcement of whose turn it is and switches the turn
    if (currentPlayer == "x") {
        currentPlayer = "o";
        turnAnnounce.textContent = "It is O's turn!";
    } else {
        currentPlayer = "x";
        turnAnnounce.textContent = "It is X's turn!";
    };
    
};

function winner (){
    let winMessageX = "X wins this game!";
    let winMessageO = "O wins this game!";
    let tieMessage = "It's a tie!";

    if (square1a.classList.contains("x") && square1b.classList.contains("x") && square1c.classList.contains("x")) {
        winAnnounce.textContent = winMessageX;
        winAnnounce.style.backgroundColor = "pink";
    } else if (square2a.classList.contains("x") && square2b.classList.contains("x") && square2c.classList.contains("x")) {
        winAnnounce.textContent = winMessageX;
        winAnnounce.style.backgroundColor = "pink";
    } else if (square3a.classList.contains("x") && square3b.classList.contains("x") && square3c.classList.contains("x")) {
        winAnnounce.textContent = winMessageX;
        winAnnounce.style.backgroundColor = "pink";
    } else if (square1a.classList.contains("x") && square2b.classList.contains("x") && square3c.classList.contains("x")) {
        winAnnounce.textContent = winMessageX;
        winAnnounce.style.backgroundColor = "pink";
    } else if (square3a.classList.contains("x") && square2b.classList.contains("x") && square1c.classList.contains("x")) {
        winAnnounce.textContent = winMessageX;
        winAnnounce.style.backgroundColor = "pink";
    // } else if (){
    //     winAnnounce.textContent = tieMessage;
    } else if (square1a.classList.contains("o") && square1b.classList.contains("o") && square1c.classList.contains("o")) {
        winAnnounce.textContent = winMessageO;
        winAnnounce.style.backgroundColor = "pink";
    } else if (square2a.classList.contains("o") && square2b.classList.contains("o") && square2c.classList.contains("o")) {
        winAnnounce.textContent = winMessageO;
        winAnnounce.style.backgroundColor = "pink";
    } else if (square3a.classList.contains("o") && square3b.classList.contains("o") && square3c.classList.contains("o")) {
        winAnnounce.textContent = winMessageO;
        winAnnounce.style.backgroundColor = "pink";
    } else if (square1a.classList.contains("o") && square2b.classList.contains("o") && square3c.classList.contains("o")) {
        winAnnounce.textContent = winMessageO;
        winAnnounce.style.backgroundColor = "pink";
    } else if (square3a.classList.contains("o") && square2b.classList.contains("o") && square1c.classList.contains("o")) {
        winAnnounce.textContent = winMessageO;
        winAnnounce.style.backgroundColor = "pink";
    }
    else {
        winAnnounce.textContent = '';
    };
};

// EVENT LISTENERS

boardElement.addEventListener('click', handleClick);