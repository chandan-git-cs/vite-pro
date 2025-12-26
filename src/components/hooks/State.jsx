import { useState } from "react"

export const State = () =>{
    const[count , setCount] = useState(0);
    console.log("Parent component rendering")
    const incrimentVal = () => {
        setCount(c => c  + 1)
    }
        return(
            <>
                <div>
                    <h1>{count}</h1>
                    <button className="btn" onClick={incrimentVal}>Click me!</button>
                </div>
                <ChildComponent count = {count} />
            </>
        )
}

function ChildComponent ({count}) {
    console.log("ChildComponent rendering")
        return(
            <>
            <h1>Child component {count}</h1>
            </>
        )
    }