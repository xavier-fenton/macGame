import React, { useEffect, useState } from 'react'
import Obstacle from './Obstacle'
import Player from './Player'
import PopUp from './Popup'

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
          <td className="player-cells"></td>
          <td className="player-cells"></td>
          <td className="player-cells">
            <Player />
          </td>
          <td className="player-cells"></td>
          <td className="player-cells"></td>
        </tr>
      </table>
    </>
  )
}
