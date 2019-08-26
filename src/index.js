import Hangman from './hangman'
import getPuzzle from './requests'

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    reneder(game1)
})

const reneder = (game) => {
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game1.statusMessage

    Array.from(game.puzzle).forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    reneder(game1)
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()