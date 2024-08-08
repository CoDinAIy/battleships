export { ships, gameboard }

console.log('he llo')


class ships {
    constructor(length, rotation, shipNumber, color) {
        this.length = length
        this.timesHit = 0
        this.isSunk = false
        this.rotation = rotation
        this.shipNumber = shipNumber
        this.color = color
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
        this.totalSunk = 0

        this.handleClick = this.handleClick.bind(this);
        this.updateShip = this.updateShip.bind(this);
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
                row.push(null)
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

        if (start === 'random')

            start = this.randomCoordinate(ship, board)

        if (ship.rotation === 'horizontal') {

            const end = [start[0], (start[1] + (ship.length - 1))]

            if (end[0] < 0 || end[0] > 9 || end[1] < 0 || end[1] > 9) {
                throw new Error('Ship out of bounds! Try again')
            }

            let allCoordinates = []
            for (let i = 0; i < ship.length; i ++) {
                const shipDOM = document.getElementById(`${start[0]}${start[1] + i}`)
                shipDOM.classList.add('ship')
                shipDOM.setAttribute('data-attribute', ship.shipNumber)
                const color = ship.color
                shipDOM.classList.add(color)
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

            if (end[0] < 0 || end[0] > 9|| end[1] < 0 || end[1] > 9) {
                throw new Error('Ship out of bounds! Try again')
            }

            let allCoordinates = []
            for (let i = 0; i < ship.length; i ++) {
                const shipDOM = document.getElementById(`${start[0] + i}${start[1]}`)
                shipDOM.classList.add('ship')
                shipDOM.setAttribute('data-attribute', ship.shipNumber)

                const color = ship.color
                shipDOM.classList.add(color)
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

    addEventListeners() {
        const cells = document.querySelectorAll('.cell')
        cells.forEach((cell) => {
            if (cell.dataset.attribute !== undefined) {
    
                cell.addEventListener('click', this.handleClick)
            }
        })
    }

    highlightShip(event) {
    
        const cellClicked = event.target.id
        const shipName = event.target.dataset.attribute
        
        console.log(shipName)
        console.log(this.shipIndex)

        const shipTarget = this.getShip(shipName)
        console.log(shipTarget)


        
        
            const cell = event.target
            
            const shipType = cell.dataset.attribute
            this.newShipEventListener()
            
            const cells = document.querySelectorAll('.cell')
            let shipCells = []
            cells.forEach((cell) => {
                if (cell.dataset.attribute === shipType && cell.dataset.attribute !== undefined ) {
                    shipCells.push(cell.id)
                    cell.classList.add('highlighted')
                    cell.classList.remove('ship')
                }
            }) 
    
            let cellsBeforeClicked = 0
            while (shipCells[cellsBeforeClicked] !== cellClicked) {
                cellsBeforeClicked++
            }
            console.log(`${cellsBeforeClicked} cells before this`)
    
    }
    
    handleClick(event) {
        this.highlightShip(event)
    }
    
    
    newShipEventListener() {
        console.log('waiting for ship to be places at new coordinate')
        this.removeEventListeners()
        this.addEmptyCellEventListeners()
    }
    
    
    removeEventListeners() {
        const cells = document.querySelectorAll('.cell')
        cells.forEach((cell) => {
            cell.removeEventListener('click', this.handleClick)
        })
    }
    
    addEmptyCellEventListeners() {
        const cells = document.querySelectorAll('.cell')
        cells.forEach((cell) => {
            if (cell.dataset.attribute === undefined) {
                cell.addEventListener('click', this.updateShip)
            }
        })
    }
    
    updateShip(event, ship, cellsBeforeClicked) {

        // const target = event.target
        // const newStart = 
        // const newEnd = 










        const cells = document.querySelectorAll('.cell')
        cells.forEach((cell) => {
            cell.classList.remove('highlighted')
        })
        this.addEventListeners()
        this.removeEmptyCellEventListeners()
    }
    
    removeEmptyCellEventListeners() {
        const cells = document.querySelectorAll('.cell')
        cells.forEach((cell) => {
            if (cell.dataset.attribute === undefined) {
                cell.removeEventListener('click', this.updateShip)
            }
        })
    }
}




