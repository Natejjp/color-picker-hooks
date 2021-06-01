import React, { useState } from 'react'

export function App() {
  const [hue, setHue] = useState(0)
  const [saturation, setSaturation] = useState(0)
  const [lighting, setLighting] = useState(0)

  function handleHueChange(event) {
    setHue(event.target.value)
  }
  function handleSaturationChange(event) {
    setSaturation(event.target.value)
  }

  function handleLightingChange(event) {
    setLighting(event.target.value)
  }

  return (
    <>
      <h1>Color Picker</h1>
      <div
        className="box"
        style={{ backgroundColor: `hsl(${hue}, ${saturation}%, ${lighting}%)` }}
      >
        hello
      </div>
      <p>H: {hue}</p>
      <input type="range" value={hue} max="360" onInput={handleHueChange} />
      <p>S: {saturation}</p>
      <input
        type="range"
        value={saturation}
        max="100"
        onInput={handleSaturationChange}
      />
      <p>L: {lighting} </p>
      <input
        type="range"
        value={lighting}
        max="50"
        onInput={handleLightingChange}
      />
    </>
  )
}
