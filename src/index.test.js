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
        [0,1,2,3,4,5,6,7,8,9,],
    ]);
  });

// eslint-disable-next-line no-undef
test('Places ship at correct location', () => {
    const newship = new ships(3, 'horizontal')
    // eslint-disable-next-line no-undef
    const playerOne = new gameboard
    // eslint-disable-next-line no-undef
    expect(playerOne.placeShip(newship, [0,0])).toEqual([
        ['PlayerOneShipA','PlayerOneShipA','PlayerOneShipA',3,4,5,6,7,8,9],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],
        [0,1,2,3,4,5,6,7,8,9,],])
})

test('makes correct end coordinates', () => {
    const smallShip = new ships(2, 'horizontal')
    const gameBoard = new gameboard
    const newBoard = gameBoard.makeBoard()
    expect(gameBoard.placeShip(smallShip, [0,2], newBoard)).toEqual([0,2])

})
  