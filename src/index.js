import {  gameboard  } from './gameBoard'
import { Player, player } from './player'
import { ships } from './ships'
import './style.css'

console.log ('hello')

const playerOne = new gameboard('playerOne')
const playerOneBoard = playerOne.makeBoard('playerOne')
const playerOneShipOne = new ships(5, 'horizontal', 'Destroyer', 'blue')
const playerOneShipTwo = new ships(4, 'vertical', 'Invader', 'green')
const playerOneShipThree = new ships(3, 'horizontal', 'Conquerer', 'orange')
const playerOneShipFour = new ships(3, 'vertical', 'Teeny', 'pink')
const playerOneShipFive = new ships(2, 'vertical', 'Tiny', 'yellow')

playerOne.placeShip(playerOneShipOne, 'random', playerOneBoard, 'playerOne')
playerOne.placeShip(playerOneShipTwo, 'random', playerOneBoard, 'playerOne')
playerOne.placeShip(playerOneShipThree, 'random', playerOneBoard, 'playerOne')
playerOne.placeShip(playerOneShipFour, 'random', playerOneBoard, 'playerOne')
playerOne.placeShip(playerOneShipFive, 'random', playerOneBoard, 'playerOne')

playerOne.addShips(playerOneShipOne)
playerOne.addShips(playerOneShipTwo)
playerOne.addShips(playerOneShipThree)
playerOne.addShips(playerOneShipFour)
playerOne.addShips(playerOneShipFive)

playerOne.addEventListeners()

const randomizeBtn = document.querySelector('.random')
randomizeBtn.addEventListener('click', () => {
    location.reload()
})


const computer = new gameboard('computer')
const computerBoard = computer.makeBoard('computer')
const computerShipOne = new ships(5, 'horizontal', 'Destroyer', 'blue')
const computerShipTwo = new ships(4, 'vertical', 'Invader', 'green')
const computerShipThree = new ships(3, 'horizontal', 'Conquerer', 'orange')
const computerShipFour = new ships(3, 'vertical', 'Teeny', 'pink')
const computerShipFive = new ships(2, 'vertical', 'Tiny', 'yellow')

computer.placeShip(computerShipOne, 'random', computerBoard)
computer.placeShip(computerShipTwo, 'random', computerBoard)
computer.placeShip(computerShipThree, 'random', computerBoard)
computer.placeShip(computerShipFour, 'random', computerBoard)
computer.placeShip(computerShipFive, 'random', computerBoard)

computer.addShips(computerShipOne)
computer.addShips(computerShipTwo)
computer.addShips(computerShipThree)
computer.addShips(computerShipFour)
computer.addShips(computerShipFive)

console.log(playerOneBoard)
console.log(computerBoard)

const start = document.querySelector('.start')
start.addEventListener('click', () => {
    console.log('starting')
    playerOne.removePreGameFeatures()
})


const playOne = new Player('playOne')
const playOneShipOne = new ships(4, 'horizontal', 'ranger', 'blue')
const playOneShipTwo= new ships(3, 'horizontal', 'ranger', 'green')
const playOneShipThree = new ships(5, 'horizontal', 'ranger', 'yellow')
const playOneShipFour = new ships(2, 'horizontal', 'ranger', 'orange')
const playOneShipFife = new ships(2, 'horizontal', 'ranger', 'pink')

console.log(playOne.gameboard)
console.log(playOne.board)
console.log(playOne.name)
playOne.gameboard.addShips(playOneShipOne)
playOne.gameboard.placeShip(playOneShipOne, 'random', playOne.board)
playOne.gameboard.addShips(playOneShipTwo)
playOne.gameboard.placeShip(playOneShipTwo, 'random', playOne.board)
playOne.gameboard.addShips(playOneShipThree)
playOne.gameboard.placeShip(playOneShipThree, 'random', playOne.board)
playOne.gameboard.addShips(playOneShipFour)
playOne.gameboard.placeShip(playOneShipFour, 'random', playOne.board)
playOne.gameboard.addShips(playOneShipFife)
playOne.gameboard.placeShip(playOneShipFife, 'random', playOne.board)
