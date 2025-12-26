import { useState } from "react"

export const ShowHide = () => {
const[show , setShow] = useState(false);

const showHideBtn = () =>{
    setShow((show) => !show)
}
    return(
        <div className="flex flex-col gap-4">
            { show && <h1 className="text-4xl">Chandan</h1>}
            <button className="btn"onClick={showHideBtn}>{show ? "Show" : "Hide"}</button>
        </div>
    )
}