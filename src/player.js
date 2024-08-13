import { gameboard } from "./gameBoard";


export class Player {
    constructor(name){
        this.name = name
        this.gameboard = new gameboard(this.name)
        this.board = this.gameboard.makeBoard() 
    }
}

// export const playerOne = new Player('playerOne')
// export const computer = new Player('computer')

