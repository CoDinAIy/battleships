import { ships, gameboard  } from './gameLogic'
import './style.css'

console.log ('hello')

const playerOne = new gameboard()
const playerOneBoard = playerOne.makeBoard()
const playerOneShipOne = new ships(5, 'horizontal', 'Destroyer', 'blue')
const playerOneShipTwo = new ships(4, 'vertical', 'Invader', 'green')
const playerOneShipThree = new ships(3, 'horizontal', 'Conquerer', 'orange')
const playerOneShipFour = new ships(3, 'vertical', 'Teeny', 'pink')
const playerOneShipFive = new ships(2, 'vertical', 'Tiny', 'yellow')

playerOne.placeShip(playerOneShipOne, 'random', playerOneBoard)
playerOne.placeShip(playerOneShipTwo, 'random', playerOneBoard)
playerOne.placeShip(playerOneShipThree, 'random', playerOneBoard)
playerOne.placeShip(playerOneShipFour, 'random', playerOneBoard)
playerOne.placeShip(playerOneShipFive, 'random', playerOneBoard)

playerOne.addShips(playerOneShipOne)
playerOne.addShips(playerOneShipTwo)
playerOne.addShips(playerOneShipThree)
playerOne.addShips(playerOneShipFour)
playerOne.addShips(playerOneShipFive)


console.log(playerOneBoard)

console.log(playerOneShipOne, playerOneShipTwo, playerOneShipThree, playerOneShipFour, playerOneShipFive)

playerOne.addEventListeners()

