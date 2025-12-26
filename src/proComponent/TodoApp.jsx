import { useState } from "react"

export const TodoApp = () => {
const[item , setItem] = useState("")

const addTask = () => {
 console.log("click")
}
const inputVal = () => {

}

    return(
        <div className="box">
            <div  className="input-box">
                <input onChange={inputVal} className="border" type="text" placeholder="Enter your task" />
                <button onClick={addTask} className="btn">AddBtn</button>
            </div>
            <ul>
                <li></li>
            </ul>
        </div>
    )
}