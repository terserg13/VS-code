const board = document.querySelector ('#board')
const colors = ['red', 'pink', 'yellow', 'green', 'black']
const SQUARE_NUMBER = 400


for (let i=0; i <SQUARE_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add ('square')

    square.addEventListener('mouseover', () => 
    setColor(square))

    square.addEventListener('mouseleave', () => 
    removeColor(square))

    board.append (square)
}

function setColor (element) {
    const color = getRandomColor()
    element.style.backgroundColor= color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor (element) {
    element.style.backgroundColor= '#d1d1d1'
    element.style.boxShadow = `0 0 2px #000`}

function getRandomColor () {
    return colors[Math.floor(Math.random() * colors.length)]
}