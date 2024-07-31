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
    const newship = new ships(3, 'horizontal')
    // eslint-disable-next-line no-undef
    const playerOne = new gameboard
    const playerOneBoard = playerOne.makeBoard()
    // eslint-disable-next-line no-undef
    expect(playerOne.placeShip(newship, [0,0], playerOneBoard)).toEqual([
        ['PlayerOneShipA','PlayerOneShipA','PlayerOneShipA',3,4,5,6,7,8,9],
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
    const newship = new ships(2, 'vertical')
    // eslint-disable-next-line no-undef
    const playerOne = new gameboard
    const playerOneBoard = playerOne.makeBoard()
    // eslint-disable-next-line no-undef
    expect(playerOne.placeShip(newship, [0,0], playerOneBoard)).toEqual([
        ['PlayerOneShipA',1,2,3,4,5,6,7,8,9],
        ['PlayerOneShipA',1,2,3,4,5,6,7,8,9],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,]])
})

test('Places ship at correct location vertically 2', () => {
    const newship = new ships(3, 'vertical')
    // eslint-disable-next-line no-undef
    const playerOne = new gameboard
    const playerOneBoard = playerOne.makeBoard()
    // eslint-disable-next-line no-undef
    expect(playerOne.placeShip(newship, [3,5], playerOneBoard)).toEqual([
        [0,1,2,3,4,5,6,7,8,9],
        [0,1,2,3,4,5,6,7,8,9],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,'PlayerOneShipA',6,7,8,9,],
        [0,1,2,3,4,'PlayerOneShipA',6,7,8,9,],
        [0,1,2,3,4,'PlayerOneShipA',6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,]])
})

test('Places ship at correct location horizontally 2', () => {
    const newship = new ships(3, 'horizontal')
    // eslint-disable-next-line no-undef
    const playerOne = new gameboard
    const playerOneBoard = playerOne.makeBoard()
    // eslint-disable-next-line no-undef
    expect(playerOne.placeShip(newship, [2,1], playerOneBoard)).toEqual([
        [0,1,2,3,4,5,6,7,8,9],
        [0,1,2,3,4,5,6,7,8,9],
        [0,'PlayerOneShipA','PlayerOneShipA','PlayerOneShipA',4,5,6,7,8,9,],
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
    const newship = new ships(3, 'horizontal')
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
        [0,1,2,3,'PlayerOneShipA','PlayerOneShipA','PlayerOneShipA',7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,]])
})

test('throws error if end coordinates out of bounds', () => {
    const newship = new ships(2, 'horizontal')
    // eslint-disable-next-line no-undef
    const playerOne = new gameboard
    const playerOneBoard = playerOne.makeBoard()
    // eslint-disable-next-line no-undef
    expect(() => playerOne.placeShip(newship, [0, 8], playerOneBoard)).toThrow('Ship out of bounds! Try again')});



  