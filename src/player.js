import { gameboard } from "./gameBoard";
import { ships } from "./gameBoard";


export class Player {
    constructor(name){
        this.name = name
        this.gameboard = new gameboard(this.name)
        this.board = this.gameboard.makeBoard() 
    }
    

}