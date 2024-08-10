export class ships {
    constructor(length, rotation, shipNumber, color) {
        this.length = length
        this.timesHit = 0
        this.isSunk = false
        this.rotation = rotation
        this.shipNumber = shipNumber
        this.color = color
        this.start = null
        this.end = null
    }
    
    hit() {
        this.timesHit++
        this.checkSunk()
    }
    
    checkSunk() {
        return this.isSunk = this.length === this.timesHit ? true : false
    }
    
}