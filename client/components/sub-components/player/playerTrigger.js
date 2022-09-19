// The cells return as HTML collections
// Still needs logic to move up and down the array
// Needs to access the cell which has mac
// playerTrigger() should be exported and called in an event handler that changes the state with useEFffect()

const firstCell = document.getElementsByClassName('player-cell-one')
const seacondCell = document.getElementsByClassName('player-cell-two')
const thirdCell = document.getElementsByClassName('player-cell-three')
const fourthCell = document.getElementsByClassName('player-cell-four')
const fifthCell = document.getElementsByClassName('player-cell-five')
const cells = [firstCell, seacondCell, thirdCell, fourthCell, fifthCell]

console.log('cells: ', cells)

export default function playerTrigger() {
  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i]
    console.log('cell: ', cell)

    document.onkeydown = keyHit

    function keyHit(e) {
      if (e.keyCode == '37') {
        console.log('left key hit!')
      } else if (e.keyCode == '39') {
        console.log('right key hit!')
      }
    }
  }
}
playerTrigger()

/*------------First attempt at keyboard event listener------*/

// document.addEventListener('keyPress', keyPressHandler)
// // document.addEventListener('keyup', keyUpHandler)

// function keyPressHandler(e) {
//   if (e.keyCode === '37')
//     console.log('left arrow key hit!')
//   } else if (e.keyCode === '39') {
//     console.log('right arrow key hit!')
//   } else {
//     console.error(error.message)
//   }
// }

/*----------First attempt at getting html elements--------*/

// export default async function trigger() {
//   try {
//     const cells = Array(
//       document.getElementsByClassName('player-cells')
//     )
//     console.log('cells: ', cells)
//     console.log('cells datatype: ', typeof cells)
//     for (let i = 0; i < cells.length; i++) {
//       const cell = cells[i]
//       console.log('cell: ', cell)
//       console.log('cell datatype: ', typeof cell)
//     }
//   } catch (error) {
//     console.error(error.message)
//   }
// }
// trigger()
