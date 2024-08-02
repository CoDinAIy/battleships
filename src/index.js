console.log('hello')




class ships {
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


class gameboard {
    constructor(){
        this.missedAttacks = []
        this.allShips = []
        this.shipIndex = {}
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

        for (let i = 0; i !== 10; i++) {
            const row = new Array

            for (let n = 0; n !== 10; n ++) {
                row.push(n)
            }
            board.push(row)
        } 
        
        return board
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

            if (end[0] < 0 || end[0] > 8 || end[1] < 0 || end[1] > 8) {
                throw new Error('Ship out of bounds! Try again')
            }

            let allCoordinates = []
            for (let i = 0; i < ship.length; i ++) {
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

            const end = [start[0] + (ship.length - 1), start[1]]

            if (end[0] < 0 || end[0] > 8 || end[1] < 0 || end[1] > 8) {
                throw new Error('Ship out of bounds! Try again')
            }

            let allCoordinates = []
            for (let i = 0; i < ship.length; i ++) {
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

}


// eslint-disable-next-line no-undef
module.exports = {
    ships,
    gameboard,
}