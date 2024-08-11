// let container= document.querySelectorAll(".container");
// let boxes= document.querySelectorAll(".box");
// // let reset= document.querySelectorAll("#reset");
// // let newGameBtn= document.querySelectorAll("#newbtn");
// let msg_container = document.querySelector(".msg-container");
// let msg=document.querySelectorAll("#msg");
// const X_class ='X'
// const Circle = 'O'

// let turn0 =true;
// const winPatterns=[
//     [0,1,2],
//     [0,3,6],
//     [0,4,8],
//     [1,4,7],
//     [2,5,8],
//     [2,4,6],
//     [3,4,5],
//     [6,7,8],
// ];

// const resetGame =() => {
//     turn0 =true;
//     enableBoxes();
//     msg_container.id = "hide";
// }


// // boxes.forEach((box) =>{
// //     box.addEventListener("click",() =>{
        
// //         if(turn0){
// //             box.innerText="O";
// //             turn0 = false;
// //         } else {
// //             box.innerText="X";
// //             turn0 = true;
// //         }
// //         box.disabled = true;
// //         if (checkWinner(box.innerText)){
// //             console.log('winner')
// //         }
// //     });
// // });
// const disableBoxes = () =>{
//     for (let box of boxes) {
//         box.disabled = true;
//     }
// };

// const enableBoxes = () =>{
//     for (let box of boxes) {
//         box.disabled = false;
//         box.innerText="";
//     }
// };

// const showWinner=(winner) =>{
//     msg_container.id.remove("hide");
//     msg.innerText="CONGRATULATIONS,winner is ${winner}";
// }

// function checkWinner(currentClass) {
//     return winPatterns.some(combination => {
//         return combination.every(index => {
//             return boxes.innerText[index].classList.contains(currentClass)
//         })
//     })
// };

// // newGameBtn.addEventListener("onClick",resetGame);
// // reset.addEventListener("onClick",resetGame);


const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
let circleTurn

startGame()

restartButton.addEventListener('click', startGame)

function startGame() {
  circleTurn = false
  cellElements.forEach(cell => {
    cell.classList.remove(X_CLASS)
    cell.classList.remove(CIRCLE_CLASS)
    cell.removeEventListener('click', handleClick)
    cell.addEventListener('click', handleClick, { once: true })
  })
  setBoardHoverClass()
  winningMessageElement.classList.remove('show')
}

function handleClick(e) {
  const cell = e.target
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
  placeMark(cell, currentClass)
  if (checkWin(currentClass)) {
    endGame(false)
  } else if (isDraw()) {
    endGame(true)
  } else {
    swapTurns()
    setBoardHoverClass()
  }
}

function endGame(draw) {
  if (draw) {
    winningMessageTextElement.innerText = 'Draw!'
  } else {
    winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
  }
  winningMessageElement.classList.add('show')
}

function isDraw() {
  return [...cellElements].every(cell => {
    return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
  })
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass)
}

function swapTurns() {
  circleTurn = !circleTurn
}

function setBoardHoverClass() {
  board.classList.remove(X_CLASS)
  board.classList.remove(CIRCLE_CLASS)
  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS)
  } else {
    board.classList.add(X_CLASS)
  }
}

function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass)
    })
  })
}