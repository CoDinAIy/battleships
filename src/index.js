import { initializePlayers, playerOne, computer } from './initializePlayers'
import './style.css'


initializePlayers()
const message = document.querySelector('.message')

const randomizeBtn = document.querySelector('.random')
randomizeBtn.addEventListener('click', () => {
    location.reload()
})

const gameWinnerMessage = document.createElement('div')
gameWinnerMessage.classList.add('gameWinnerMessage')

const body = document.querySelector('body')
const start = document.querySelector('.start')
    start.addEventListener('click', () => {
        playerOne.gameboard.removePreGameFeatures()
        startGame()
        randomizeBtn.textContent = 'New game'

        body.removeChild(start)
    })


function startGame() {
       waitPlayerAttack()
}


function waitPlayerAttack() {
    addComputerBoardListener()
    message.textContent = 'Your turn'
}

function waitComputerAttack() {
    const randomCoordinate = makeRandomCoordinate()
    let dotCount = 0
    message.textContent = 'Computer is thinking...'

    const dotInterval = setInterval(() => {
        dotCount = (dotCount % 3) + 1
        message.textContent = `Computer is thinking${'.'.repeat(dotCount)}`
    }, 250)

    setTimeout(() => {
        clearInterval(dotInterval)
        message.textContent = 'Computer is thinking...'
        playerOne.gameboard.recieveAttack(randomCoordinate, playerOne.board)
        playerOne.gameboard.hasAllSunk()

        if (playerOne.gameboard.gameOver !== true) {
            waitPlayerAttack()
        } else {
            gameWinnerMessage.textContent = 'Computer wins!'
            message.textContent = ''
            body.appendChild(gameWinnerMessage)
            removeComputerBoardListener()   
        }
    }, 1000);
    
}


function addComputerBoardListener() {
    const computerBoard = document.querySelector('.computer')
    const cells = computerBoard.querySelectorAll('.cell')

    cells.forEach((cell) => {
        if (cell.classList.contains('hit')) {
            return
        }
        cell.addEventListener('click', handlePlayerOneClick)
    })

}

function removeComputerBoardListener() {
    const computerBoard = document.querySelector('.computer')
    const cells = computerBoard.querySelectorAll('.cell')

    cells.forEach((cell) => {
        cell.removeEventListener('click', handlePlayerOneClick)
    })
}

function handlePlayerOneClick(event) {
    const id = event.target.id
    computer.gameboard.recieveAttack([id[0], id[1]], computer.board)
    computer.gameboard.hasAllSunk()

    removeComputerBoardListener()

    if (computer.gameboard.gameOver !== true) {
        waitComputerAttack()
    } else {
        gameWinnerMessage.textContent = 'You win!'
        message.textContent = ''
        body.appendChild(gameWinnerMessage)

    }
}

function makeRandomCoordinate() {
    const randomCoordinate = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]
    const isUnique = playerOne.gameboard.missedAttacks.every((attack) => {
        return !(attack[0] === randomCoordinate[0] && attack[1] === randomCoordinate[1])
    })
    if (isUnique) {
        return randomCoordinate;
    } else {
        return makeRandomCoordinate()
    }
}
