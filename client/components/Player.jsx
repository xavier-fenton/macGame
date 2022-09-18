import React, { useEffect, useState } from 'react'
import playerTrigger from './playerTrigger'

// I think this state change should happen on the <Game /> level of the DOM
// The initial state of the player needs to be the index position of the table cell it is currently in
// on key press the useEffect should trigger the state change (setPlayer)
// setPlayer will call playerTrigger()
// playerTrigger needs to contain an algorithm that changes the index position of Player.jsx
// player.jsx in of itself should just return a div with an image inside it that has an event listener that gets called in game.jsx

export default async function player() {
  const playerImage = '../../server/public/images/elrond-network-egld.gif'
  const { player, setPlayer } = useState()
  function handleKeyPress(event) {
    event.preventDefault()
    if (player.location === location) {
      // if(player.location === location) ??????????
      useEffect(() => {
        setPlayer(playerTrigger())
      }, [])
    }
  }
  return (
    <>
      <div className="player" onKeyPress={handleKeyPress}>
        <img src={playerImage} alt="player-image"></img>
      </div>
    </>
  )
}
