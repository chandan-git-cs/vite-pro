import { useState } from "react"

export const CounterApp = () => {

    const [count , setCount] = useState(5);
    const incriment = () => {
        setCount((c) => c + 1)
    }
    const decriment = () => {
        setCount((d) => d > 0 ? d - 1 : d)
    }
    const reset = () => {
        setCount(0);
    }
    return(
       <div className="flex flex-col items-center gap-4">
          <h1 className="font-bold text-4xl">{count}</h1>
          <div className="btnGroup flex">
            <button className="btn" onClick={incriment}>Increment</button>
            <button className="btn" onClick={decriment}>Decrement</button>
            <button className="btn" onClick={reset}>Reset</button>
          </div>
       </div>
    )
}