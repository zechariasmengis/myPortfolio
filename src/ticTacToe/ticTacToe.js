// get an element from the DOM
var mainContainer = document.getElementsByClassName('main-container')
var mainContainerQuery = document.querySelector('.main-container')
console.log('mainContainer', mainContainer)
console.log('mainContainerQuery', mainContainerQuery)
var body = document.querySelector('body')
body.style.margin = 0;
mainContainerQuery.style.backgroundColor = 'green'
mainContainer[0].style.height = '100%';
mainContainer[0].style.width = '100%';
mainContainerQuery.style.display = 'flex'
mainContainerQuery.style.justifyContent = 'center'
mainContainerQuery.style.alignItems = 'center'

// create Element
var board = document.createElement('div')
mainContainerQuery.appendChild(board)

// create a class for tic tac toe board
board.className = 'board'
// add style
board.style.width = '50%'
board.style.height = '50%'
board.style.border = '2px solid black'

// create a function
function backgroundRed (thatThang) {
console.log('thatThang', thatThang)
thatThang.innerText = 'Dont click me'
// mainContainerQuery.style.backgroundColor = 'red'
mainContainerQuery.classList.toggle('red');
}