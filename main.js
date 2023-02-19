
//declare global variables - game board size
const LINE_PIXEL_COUNT = 40
const TOTAL_PIXEL_COUNT = LINE_PIXEL_COUNT**2

//Track scores to display to user
let totalFoodEaten = 0;
let totalDistanceTraveled = 0;

//Shorten reference to game board
const gameContainer = document.getElementById('game-container')

//generate the game board
const createGameBoardPixels = () => {
    for (let i = 1; i<TOTAL_PIXEL_COUNT; i++){
        gameContainer.innerHTML = `${gameContainer.innerHTML} <div class='game-board-pixel' id='pixel${i}'></div>`
    }
}

//Shorten reference to game board pixels
const gameBoardPixels = document.getElementsByClassName('game-board-pixel');

// food functions****************************

let currentFoodPosition = 0;
// create the randomly generated food items on the game board
const createFood = () => {
    gameBoardPixels[currentFoodPosition].classList.remove('food')


currentFoodPosition = Math.floor(Math.random()*TOTAL_PIXEL_COUNT)

gameBoardPixels[currentFoodPosition].classList.add('food')
}

//snake behavior

const LEFT_DIR = 37;
const UP_DIR = 38;
const RIGHT_DIR = 39;
const DOWN_DIR = 40;

let snakeCurrentDirection = RIGHT_DIR;

