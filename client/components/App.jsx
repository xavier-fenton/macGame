import React, { useEffect } from 'react'
import { Game } from './Game'

export function App() {
  return (
    <div>
      <h1 className="header">Welcome to Mac Dancer!</h1>
      <div>
        <Game />
      </div>
    </div>
  )
}

export default App
