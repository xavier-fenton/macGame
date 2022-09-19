import React, { useEffect, useState } from 'react'
// import Obstacle from './sub-components/Obstacle/Obstacle'
import Player from './sub-components/player/Player'
// import PopUp from './Popup'

export function Game() {
  return (
    <>
      <table className="table">
        <tr className="table">
          <th className="table"></th>
          <th className="table"></th>
          <th className="table"></th>
          <th className="table"></th>
          <th className="table"></th>
        </tr>
        <tr className="table">
          <td className="table"></td>
          <td className="table"></td>
          <td className="table"></td>
          <td className="table"></td>
          <td className="table"></td>
        </tr>
        <tr className="table">
          <td className="table"></td>
          <td className="table"></td>
          <td className="table"></td>
          <td className="table"></td>
          <td className="table"></td>
        </tr>
        <tr className="table">
          <td className="table"></td>
          <td className="table"></td>
          <td className="table"></td>
          <td className="table"></td>
          <td className="table"></td>
        </tr>
        <tr className="table">
          <td className="player-cell-one"></td>
          <td className="player-cell-two"></td>
          <td className="player-cell-three">
            <Player />
          </td>
          <td className="player-cells-four"></td>
          <td className="player-cell-five"></td>
        </tr>
      </table>
    </>
  )
}
