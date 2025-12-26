import { useState } from "react"

export const UserGreetingApp = () => {
const[currVal , setVal] = useState("");

const inputVal = (e) => {
    setVal(e.target.value);
}

    return(
        <div className="conatiner">
            <h1 className="text-3xl">{currVal ? `Hello ${currVal}`: "Hello"}</h1>
            <input onChange={inputVal} className="border" type="text" placeholder="Enter your text" />
        </div>
    )
}