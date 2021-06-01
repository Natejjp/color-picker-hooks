import React, { useState } from 'react'

export function App() {
  const [color, setColor] = useState({
    hue: 0,
    saturation: 0,
    lighting: 0,
  })
  return (
    <>
      <h1>Color Picker</h1>
      <div className="box"></div>
      <p>H: </p>
      <p>S: </p>
      <p>L: </p>
    </>
  )
}
