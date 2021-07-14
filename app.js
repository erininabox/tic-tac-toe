// DOM References
const gameBoardEl = document.querySelector(".grid-container"); //change this to whatever you named yours

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
    console.log(clickedSquare.id);
};

// EVENT LISTENERS
// "Event Delegation" allows for us to get away with just one event listener instead of nine

gameBoardEl.addEventListener('click', handleclick);