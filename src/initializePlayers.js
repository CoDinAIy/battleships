import { Player } from "./player";
import { ships } from "./ships";


export const playerOne = new Player('playerOne')
export const computer = new Player('computer')
export function initializePlayers() {


    const playerOneShipOne = new ships(4, 'vertical', 'ranger', 'green')
    const playerOneShipTwo= new ships(3, 'horizontal', 'fatship', 'orange')
    const playerOneShipThree = new ships(5, 'horizontal', 'bigship', 'blue')
    const playerOneShipFour = new ships(2, 'horizontal', 'smolship', 'yellow')
    const playerOneShipFife = new ships(3, 'vertical', 'kitten', 'pink')
    
    playerOne.gameboard.addShips(playerOneShipOne)
    playerOne.gameboard.placeShip(playerOneShipOne, 'random', playerOne.board)
    playerOne.gameboard.addShips(playerOneShipTwo)
    playerOne.gameboard.placeShip(playerOneShipTwo, 'random', playerOne.board)
    playerOne.gameboard.addShips(playerOneShipThree)
    playerOne.gameboard.placeShip(playerOneShipThree, 'random', playerOne.board)
    playerOne.gameboard.addShips(playerOneShipFour)
    playerOne.gameboard.placeShip(playerOneShipFour, 'random', playerOne.board)
    playerOne.gameboard.addShips(playerOneShipFife)
    playerOne.gameboard.placeShip(playerOneShipFife, 'random', playerOne.board)
    
    
    playerOne.gameboard.addEventListeners()
    
    const computerShipOne = new ships(5, 'horizontal', 'Destroyer', 'blue')
    const computerShipTwo = new ships(4, 'vertical', 'Invader', 'green')
    const computerShipThree = new ships(3, 'horizontal', 'Conquerer', 'orange')
    const computerShipFour = new ships(3, 'vertical', 'Teeny', 'pink')
    const computerShipFive = new ships(2, 'vertical', 'Tiny', 'yellow')
    
    computer.gameboard.placeShip(computerShipOne, 'random', computer.board)
    computer.gameboard.placeShip(computerShipTwo, 'random', computer.board)
    computer.gameboard.placeShip(computerShipThree, 'random', computer.board)
    computer.gameboard.placeShip(computerShipFour, 'random', computer.board)
    computer.gameboard.placeShip(computerShipFive, 'random', computer.board)
    
    computer.gameboard.addShips(computerShipOne)
    computer.gameboard.addShips(computerShipTwo)
    computer.gameboard.addShips(computerShipThree)
    computer.gameboard.addShips(computerShipFour)
    computer.gameboard.addShips(computerShipFive)

}
