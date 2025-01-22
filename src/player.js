import { gameboard } from "./gameBoard";


export class Player {
    constructor(name){
        this.name = name
        this.gameboard = new gameboard(this.name)
        this.board = this.gameboard.makeBoard() 
    }
}
