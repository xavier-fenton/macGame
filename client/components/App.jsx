import React from 'react'

export function App() {
  const x = document.getElementById('demo')

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition)
    } else {
      x.innerHTML = 'Geolocation is not supported by this browser.'
    }
    console.log(navigator.geolocation)
  }

  function showPosition(position) {
    // x.innerHTML =
    //   'Latitude: ' +
    //   position.coords.latitude +
    //   '<br>Longitude: ' +
    //   position.coords.longitude
    console.log(position.coords.longitude, position.coords.latitude)
  }

  return (
    <div>
      <h1>show cords</h1>
      <button onClick={getLocation}>Try It</button>

      <p id="demo"></p>
    </div>
  )
}

export default App
