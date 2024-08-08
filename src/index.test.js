/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const { ships, gameboard } = require('./index')

// eslint-disable-next-line no-undef
test('Makes Gameboard', () => {
    const playerOne = new gameboard
    // eslint-disable-next-line no-undef
    expect(playerOne.makeBoard()).toEqual([
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,]
    ]);
  });

// eslint-disable-next-line no-undef
test('Places ship at correct location horizontally 1', () => {
    const newship = new ships(3, 'horizontal', 'one')
    // eslint-disable-next-line no-undef
    const playerOne = new gameboard
    const playerOneBoard = playerOne.makeBoard()
    // eslint-disable-next-line no-undef
    expect(playerOne.placeShip(newship, [0,0], playerOneBoard)).toEqual([
        ['one','one','one',3,4,5,6,7,8,9],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,]])
})

// eslint-disable-next-line no-undef
test('Places ship at correct location vertically 1', () => {
    const newship = new ships(2, 'vertical', 'one')
    // eslint-disable-next-line no-undef
    const playerOne = new gameboard
    const playerOneBoard = playerOne.makeBoard()
    // eslint-disable-next-line no-undef
    expect(playerOne.placeShip(newship, [0,0], playerOneBoard)).toEqual([
        ['one',1,2,3,4,5,6,7,8,9],
        ['one',1,2,3,4,5,6,7,8,9],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,]])
})

// eslint-disable-next-line no-undef
test('Places ship at correct location vertically 2', () => {
    const newship = new ships(2, 'vertical', 'two')
    // eslint-disable-next-line no-undef
    const playerOne = new gameboard
    const playerOneBoard = playerOne.makeBoard()
    // eslint-disable-next-line no-undef
    expect(playerOne.placeShip(newship, [2,0], playerOneBoard)).toEqual([
        [0,1,2,3,4,5,6,7,8,9],
        [0,1,2,3,4,5,6,7,8,9],
        ['two',1,2,3,4,5,6,7,8,9,],
        ['two',1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,]])
})

test('Places ship at correct location horizontally 2', () => {
    const newship = new ships(3, 'horizontal', 'two')
    // eslint-disable-next-line no-undef
    const playerOne = new gameboard
    const playerOneBoard = playerOne.makeBoard()
    // eslint-disable-next-line no-undef
    expect(playerOne.placeShip(newship, [2,1], playerOneBoard)).toEqual([
        [0,1,2,3,4,5,6,7,8,9],
        [0,1,2,3,4,5,6,7,8,9],
        [0,'two','two','two',4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,]])
})

test('marks correct end coordinates horizontally 1', () => {
    const newship = new ships(3, 'horizontal')
    const playerOne = new gameboard
    expect(playerOne.findEnd(newship, [2,1])).toEqual([2,3])
})

test('marks correct end coordinates horizontally 2', () => {
    const newship = new ships(4, 'horizontal')
    const playerOne = new gameboard
    expect(playerOne.findEnd(newship, [4,3])).toEqual([4,6])
})

test('marks correct end coordinates vertically ', () => {
    const newship = new ships(4, 'vertical')
    const playerOne = new gameboard
    expect(playerOne.findEnd(newship, [4,2])).toEqual([7,2])
})

test('Places ship at correct location horizontally 3', () => {
    const newship = new ships(3, 'horizontal', 'three')
    // eslint-disable-next-line no-undef
    const playerOne = new gameboard
    const playerOneBoard = playerOne.makeBoard()
    // eslint-disable-next-line no-undef
    expect(playerOne.placeShip(newship, [5,4], playerOneBoard)).toEqual([
        [0,1,2,3,4,5,6,7,8,9],
        [0,1,2,3,4,5,6,7,8,9],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,'three','three','three',7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,]])
})


test('throws error if end coordinates out of bounds', () => {
    const newship = new ships(3, 'horizontal', 'one')
    const playerOne = new gameboard
    const playerOneBoard = playerOne.makeBoard()
    expect(() => playerOne.placeShip(newship, [0, 7], playerOneBoard)).toThrow('Ship out of bounds! Try again')});
    
test('throws error if end coordinates out of bounds two', () => {
    const newship = new ships(3, 'vertical', 'one')
    const playerOne = new gameboard
    const playerOneBoard = playerOne.makeBoard()
    expect(() => playerOne.placeShip(newship, [7, 0], playerOneBoard)).toThrow('Ship out of bounds! Try again')});
        
    test('Places more than one ship at the same time', () => {
        const shipOne = new ships(3, 'horizontal', 'one')
        const shipTwo = new ships(2, 'vertical', 'two')
        const playerOne = new gameboard
        const playerOneBoard = playerOne.makeBoard()
    
        playerOne.placeShip(shipOne, [0,0], playerOneBoard)
        expect(playerOne.placeShip(shipTwo, [2,0], playerOneBoard)).toEqual([
            ['one','one','one',3,4,5,6,7,8,9],
            [0,1,2,3,4,5,6,7,8,9,],
            ['two',1,2,3,4,5,6,7,8,9,],
            ['two',1,2,3,4,5,6,7,8,9,],
            [0,1,2,3,4,5,6,7,8,9,],
            [0,1,2,3,4,5,6,7,8,9,],
            [0,1,2,3,4,5,6,7,8,9,],
            [0,1,2,3,4,5,6,7,8,9,],
            [0,1,2,3,4,5,6,7,8,9,],
            [0,1,2,3,4,5,6,7,8,9,]])
    })

test('throws error if ship has already been placed on these coordinates 1', () => {
    const newship = new ships(2, 'horizontal', 'one')
    const overlappingShip = new ships(3, 'horizontal', 'two')

    // eslint-disable-next-line no-undef
    const playerOne = new gameboard
    const playerOneBoard = playerOne.makeBoard()
    
    playerOne.placeShip(newship, [2,2], playerOneBoard)

    // eslint-disable-next-line no-undef
    expect(() => playerOne.placeShip(overlappingShip, [2,2], playerOneBoard)).toThrow('A ship is already here! Try again')});

test('throws error if ship has already been placed on these coordinates 2', () => {
    const newship = new ships(2, 'horizontal', 'one')
    const overlappingShip = new ships(3, 'vertical', 'two')

    // eslint-disable-next-line no-undef
    const playerOne = new gameboard
    const playerOneBoard = playerOne.makeBoard()
    
    playerOne.placeShip(newship, [2,2], playerOneBoard)

    // eslint-disable-next-line no-undef
    expect(() => playerOne.placeShip(overlappingShip, [2,2], playerOneBoard)).toThrow('A ship is already here! Try again')});

test('ship recieves hit 1', () => {
    const playerOne = new gameboard
    const playerOneBoard = playerOne.makeBoard()

    const newship = new ships(2, 'horizontal', 'one')
    playerOne.placeShip(newship, [0,0], playerOneBoard)
    playerOne.addShips(newship)

    expect(playerOne.recieveAttack([0,0], playerOneBoard)).toEqual('Hit successful')
})

test('ship recieves hit 2', () => {
    const playerOne = new gameboard
    const playerOneBoard = playerOne.makeBoard()

    const newship = new ships(2, 'vertical', 'one')
    playerOne.placeShip(newship, [5,5], playerOneBoard)
    playerOne.addShips(newship)


    expect(playerOne.recieveAttack([5,5], playerOneBoard)).toEqual('Hit successful')
})

test('ship does not recieve hit', () => {
    const playerOne = new gameboard
    const playerOneBoard = playerOne.makeBoard()

    const newship = new ships(2, 'vertical', 'one')
    playerOne.placeShip(newship, [2,0], playerOneBoard)
    playerOne.recieveAttack([2,2], playerOneBoard)

    expect(playerOne.recieveAttack([2,1], playerOneBoard)).toEqual([[2,2],[2,1]])
})

test('throws error if hit already', () => {
    const newship = new ships(2, 'horizontal', 'one')

    // eslint-disable-next-line no-undef
    const playerOne = new gameboard
    const playerOneBoard = playerOne.makeBoard()
    
    playerOne.placeShip(newship, [0,0], playerOneBoard)
    playerOne.recieveAttack([5,5], playerOneBoard)


    // eslint-disable-next-line no-undef
    expect(() => playerOne.recieveAttack([5,5], playerOneBoard)).toThrow('Already tried!')});


test('shows how much ships are left 1', () => {
    const playerOne = new gameboard
    const playerOneBoard = playerOne.makeBoard()

    const newship = new ships(2, 'horizontal', 'one')
    playerOne.placeShip(newship, [0,0], playerOneBoard)
    playerOne.addShips(newship)

    expect(playerOne.hasAllSunk()).toEqual('1 ships remaining')
})

test('shows how much ships are left 2', () => {
    const playerOne = new gameboard
    const playerOneBoard = playerOne.makeBoard()

    const shipOne = new ships(2, 'horizontal', 'one')
    const shipTwo = new ships(3, 'horizontal', 'one')

    playerOne.placeShip(shipOne, [0,0], playerOneBoard)
    playerOne.addShips(shipOne)
    playerOne.placeShip(shipTwo, [1,0], playerOneBoard)
    playerOne.addShips(shipTwo)

    expect(playerOne.hasAllSunk()).toEqual('2 ships remaining')
})

test('shows how much ships are left 2', () => {
    const playerOne = new gameboard
    const playerOneBoard = playerOne.makeBoard()

    const shipOne = new ships(2, 'horizontal', 'one')

    playerOne.placeShip(shipOne, [0,0], playerOneBoard)
    playerOne.addShips(shipOne)

    playerOne.recieveAttack([0,0], playerOneBoard)
    playerOne.recieveAttack([0,1], playerOneBoard)

    expect(playerOne.hasAllSunk()).toEqual('All ships sunk!')
})