import { useState } from "react"

export const BgColorChange = () => {
const[bgColor , setBgColor] = useState("white");

  return(
    <div className="container p-10"  style={{background: bgColor}}>
      <button className="btn" onClick={ () => setBgColor("red")}>red</button>
      <button className="btn" onClick={ () => setBgColor("green")}>Green</button>
      <button className="btn" onClick={ () => setBgColor("yellow")}>Yellow</button>
      <button className="btn" onClick={ () => setBgColor("orange")}>Orange</button>
    </div>
  )
}