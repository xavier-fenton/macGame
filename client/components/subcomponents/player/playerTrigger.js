// The cells return as HTML collections
// Still needs logic to move up and down the array
// Needs to access the cell which has mac
// playerTrigger() should be exported and called in an event handler that changes the state with useEFffect()

export default function playerTrigger() {
  const player = document.getElementsByTagName('section')
  console.log('player', player)
  const center = 150
  document.onkeydown = keyHit

  function keyHit(e) {
    if (
      (e.keyCode === '37' && player[0].style.left === `${center}px`) ||
      player[0].style.left < `${center}px`
    ) {
      console.log('left arrow key hit!')
      player[0].style.left = `${center - 10}px`
    }
    if (
      (e.keyCode === '39' && player[0].style.left === `${center}px`) ||
      player[0].style.left > `${center}px`
    ) {
      console.log('right arrow key hit!')
      player[0].style.left = `${center + 10}px`
    } else {
      console.log('oops something went wrong :(')
    }
  }
}

playerTrigger()
