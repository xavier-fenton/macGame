import React, { useEffect, useState } from 'react'
// import Obstacle from './sub-components/Obstacle/Obstacle'
import Player from './subcomponents/player/Player'
// import PopUp from './Popup'

export function Game() {
  return (
    <>
      <div className="game">
        <Player />
      </div>
    </>
  )
}
