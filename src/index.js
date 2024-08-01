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
        return this.checkSunk()
    }

    checkSunk() {
        return this.isSunk = this.length === this.timesHit ? true : false
    }
}

class gameboard {
    constructor(){

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

    trackCoordinates(start, ship) {

        let allCoordinates = []
        for (let i = 0; i < ship.length; i ++) {
            const coordinates = [start[0], start[1] + i]
            allCoordinates.push(coordinates)
        }
        return allCoordinates
    }

    checkCoordinates(trackCoordinates, board) {
        trackCoordinates.forEach((item) => {
            if (typeof board[item[0]][item[1]] === 'string'){
                throw new Error('ERROR')
            }
            console.log('No overlap')
        })
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

        // if (ship.rotation === 'horizontal') {
        //     const end = [start[0], (start[1] + ship)]
        //     for (let i = start[1]; i < end[1]; i++) {
        //         board[start[0]][i] = 'PlayerOneShipA'
        //     }
        // }

        // if (ship.rotation === 'vertical') {
        //     const end = [start[[0] - ship.length], start[1]]
        //     for (let i = start[0]; i > end[0]; i--) {
        //         this.playerOneBoard[i][start[1]] = 'PlayerOneShipA'
        //     }
        // }

    }
}

// eslint-disable-next-line no-undef
module.exports = {
    ships,
    gameboard,
}