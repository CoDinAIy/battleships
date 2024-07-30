console.log('hello')

class ships {
    constructor(length, rotation) {
        this.length = length
        this.timesHit = 0
        this.isSunk = false
        this.rotation = rotation
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

    playerOneBoard = this.makeBoard()

    placeShip(ship, start, board) {

        const end = [start[0], (start[1] + ship.length)]
        return end

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