const firstCell = document.getElementsByClassName('player-cell-one')
const seacondCell = document.getElementsByClassName('player-cell-two')
const thirdCell = document.getElementsByClassName('player-cell-three')
const fourthCell = document.getElementsByClassName('player-cell-four')
const fifthCell = document.getElementsByClassName('player-cell-five')
const cells = [firstCell, seacondCell, thirdCell, fourthCell, fifthCell]

console.log('cells: ', cells)

// keycode for left arrowkey = 37
// keycode for right arrowkey = 39

async function trigger() {
  try {
    for (let i = 0; i < cells.length; i++) {
      const cell = cells[i]
      console.log('cell: ', cell)

      if (cell[i].innerHTML !== '') {
        return <>{cell ? onkeydown() : onkeydown()}</>
      }
    }
  } catch (error) {
    console.error(error.message)
  }
}

trigger()
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
