import './style.css'
console.log('he llo')

// export class playerOne {
//     constructor() {
//         this.gameboard = new gameboard().makeBoard()
        
//     }

// }

// export class computer {
//     constructor() {
//         this.gameboard = new gameboard().makeBoard()
//     }
// }


export class ships {
    constructor(length, rotation, shipNumber) {
        this.length = length
        this.timesHit = 0
        this.isSunk = false
        this.rotation = rotation
        this.shipNumber = shipNumber
    }
    
    hit() {
        this.timesHit++
        this.checkSunk()
    }
    
    checkSunk() {
        return this.isSunk = this.length === this.timesHit ? true : false
    }
    
}


export class gameboard {
    constructor(){
        this.missedAttacks = []
        this.allShips = []
        this.shipIndex = {}
        this.totalSunk = 0
    }

    addShips(ship) {
        this.allShips.push(ship)
        this.shipIndex[ship.shipNumber] = this.allShips.length - 1
        
    }
    
    getShip(name) {
        const target = this.shipIndex[name]
        return this.allShips[target]
    }

    makeBoard() {
        const board = new Array
        const boardDOM = document.createElement('div')
        boardDOM.classList.add('boardDOM')

        for (let i = 0; i !== 10; i++) {
            const row = new Array
            const rowDOM = document.createElement('div')
            rowDOM.classList.add('rowDOM')
            
            for (let n = 0; n !== 10; n ++) {
                const cell = document.createElement('div')
                cell.classList.add('cell')
                cell.setAttribute('id', `${i}${n}`)
                row.push(n)
                rowDOM.appendChild(cell)
            }
            board.push(row)
            boardDOM.appendChild(rowDOM)

        } 
        
        const boards = document.querySelector('.boards')
        boards.appendChild(boardDOM)
        return board
    }

    hasAllSunk() {
        this.allShips.forEach((ship) => {
            if (ship.isSunk === true) {
                this.totalSunk++
            }
        })

        if (this.allShips.length === this.totalSunk) {
            return 'All ships sunk!'
        }
        return (`${this.allShips.length - this.totalSunk} ships remaining`)
    }


    recieveAttack(coordinates, board) {

        const filteredAttacks = this.missedAttacks.filter(element => 
            element[0] === coordinates[0] && element[1] === coordinates[1]
        )

        if (filteredAttacks.length >= 1) {
            throw new Error('Already tried!')
        }

        const x = coordinates[0]
        const y = coordinates[1]

        if (typeof board[x][y] === 'string') {
            const shipName = board[x][y]

            const targetShip = this.getShip(shipName)
            targetShip.hit()
            // this.hasAllSunk()

            this.missedAttacks.push(coordinates)
            return 'Hit successful'
            
        }
        
        this.missedAttacks.push(coordinates)  
        return this.missedAttacks
    }

    


    findEnd(ship, start) {
        if (ship.rotation === 'horizontal') {
            const end = [start[0], (start[1] + ship.length - 1)]
            return end
        }
        if (ship.rotation === 'vertical') {
            const end = [(start[0] + ship.length - 1), start[1]]
            return end
        }


    }

    placeShip(ship, start, board) {

        if (ship.rotation === 'horizontal') {

            const end = [start[0], (start[1] + (ship.length - 1))]

            if (end[0] < 0 || end[0] > 9 || end[1] < 0 || end[1] > 9) {
                throw new Error('Ship out of bounds! Try again')
            }

            let allCoordinates = []
            for (let i = 0; i < ship.length; i ++) {
                const ship = document.getElementById(`${start[0]}${start[1] + i}`)
                ship.classList.add('ship')
                const coordinates = [start[0], start[1] + i]
                allCoordinates.push(coordinates)
            }

            
            allCoordinates.forEach((item) => {
                if (typeof board[item[0]][item[1]] === 'string'){
                    throw new Error('A ship is already here! Try again')
                }
            })

            for (let i = 0; i < ship.length; i ++) {
                board[start[0]][start[1]+ i] = ship.shipNumber
            }
        }
        
        if (ship.rotation === 'vertical') {

            const end = [(start[0] + ship.length - 1), start[1]]
            console.log(end)

            if (end[0] < 0 || end[0] > 9|| end[1] < 0 || end[1] > 9) {
                throw new Error('Ship out of bounds! Try again')
            }

            let allCoordinates = []
            for (let i = 0; i < ship.length; i ++) {
                const ship = document.getElementById(`${start[0] + i}${start[1]}`)
                ship.classList.add('ship')
                const coordinates = [start[0] + i, start[1]]
                allCoordinates.push(coordinates)
            }

            
            allCoordinates.forEach((item) => {
                if (typeof board[item[0]][item[1]] === 'string'){
                    throw new Error('A ship is already here! Try again')
                }
            })

            for (let i = 0; i < ship.length; i++) {
                board[start[0] + i][start[1]] = ship.shipNumber
            }
        }
        return board

    }

    randomCoordinate(ship, board) {
        let isUnique = false
        let randomCoordinate

        while (!isUnique) {
            const randomX = Math.floor(Math.random() * 10)
            const randomY = Math.floor(Math.random() * 10)


            randomCoordinate = [randomX, randomY]

            let allCoordinates = []

            if (ship.rotation === 'horizontal') {
                
                const endRandomCoordinate = [randomCoordinate[0], randomCoordinate[1] + (ship.length - 1)]
                if (endRandomCoordinate[0] < 0 || endRandomCoordinate[0] > 9 || endRandomCoordinate[1] < 0 || endRandomCoordinate[1] > 9) {
                    continue
                }

                for (let i = 0; i < ship.length; i++) {
                    const coordinate = [randomCoordinate[0], randomCoordinate[1] + i]
                    allCoordinates.push(coordinate)
                }


                isUnique = allCoordinates.every((item) => {
                    return typeof board[item[0]][item[1]] !== 'string';
                }) ;

                
            }

            if (ship.rotation === 'vertical') {

                const endRandomCoordinate = [randomCoordinate[0] + (ship.length - 1), randomCoordinate[1]]
                if (endRandomCoordinate[0] < 0 || endRandomCoordinate[0] > 9 || endRandomCoordinate[1] < 0 || endRandomCoordinate[1] > 9) {
                    continue 
                }

                for (let i = 0; i < ship.length; i++) {
                    const coordinate = [randomCoordinate[0] + i, randomCoordinate[1]]
                    allCoordinates.push(coordinate)
                }

                isUnique = allCoordinates.every((item) => {
                    return typeof board[item[0]][item[1]] !== 'string';
                }) ;
            }
     

        }
        return randomCoordinate
    }
    

}



const playerOne = new gameboard()
const playerOneBoard = playerOne.makeBoard()
const playerOneShipOne = new ships(8, 'vertical', '0')
const playerOneShipTwo = new ships(8, 'vertical', '2')
const playerOneShipThree = new ships(8, 'vertical', '4')
const playerOneShipFour = new ships(8, 'vertical', '6')
const playerOneShipFive = new ships(8, 'vertical', '8')
const playerOneShipSix = new ships(3, 'vertical', 'five')


playerOne.placeShip(playerOneShipOne, [0,0], playerOneBoard)
playerOne.placeShip(playerOneShipTwo, [0,2], playerOneBoard)
playerOne.placeShip(playerOneShipThree, [0,4], playerOneBoard)
playerOne.placeShip(playerOneShipFour, [0,6], playerOneBoard)
playerOne.placeShip(playerOneShipFive, [0,8], playerOneBoard)

console.log(playerOneBoard)

console.log(playerOne.randomCoordinate(playerOneShipSix, playerOneBoard))

const computer = new gameboard()

// console.log(playerOneBoard)


