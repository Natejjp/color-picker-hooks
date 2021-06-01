import React, { useEffect, useState } from 'react'

export function App() {
  const [hue, setHue] = useState(0)
  const [saturation, setSaturation] = useState(0)
  const [lighting, setLighting] = useState(0)

  useEffect(() => {
    setHue(Math.floor(Math.random() * 360))
    setSaturation(Math.floor(Math.random() * 100))
    setLighting(Math.floor(Math.random() * 50))
  }, [])

  function handleHueChange(event) {
    setHue(event.target.value)
  }
  function handleSaturationChange(event) {
    setSaturation(event.target.value)
  }

  function handleLightingChange(event) {
    setLighting(event.target.value)
  }

  function handleRandom(event) {
    setHue(Math.floor(Math.random() * 360))
    setSaturation(Math.floor(Math.random() * 100))
    setLighting(Math.floor(Math.random() * 50))
  }

  return (
    <main>
      <h1>Color Picker</h1>
      <div
        className="box"
        style={{ backgroundColor: `hsl(${hue}, ${saturation}%, ${lighting}%)` }}
      ></div>
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
      <button onClick={handleRandom}>Random Color</button>
    </main>
  )
}
