import React, { useState } from 'react'

export function App() {
  const [hue, setHue] = useState(0)

  function handleHueChange(event) {
    setHue(event.target.value)
  }

  return (
    <>
      <h1>Color Picker</h1>
      <div
        className="box"
        style={{ backgroundColor: `hsl(${hue}, 100%, 50%)` }}
      >
        hello
      </div>
      <p>H: {hue}</p>
      <input type="range" value={hue} max="360" onInput={handleHueChange} />
      <p>S: </p>
      <p>L: </p>
    </>
  )
}
