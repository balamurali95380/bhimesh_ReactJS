import React from "react"
const Click=({count,increment,decrement,reset})=>{
    return(
        <div>
        <h1>{count}</h1>
        <button type="button" onClick={increment}>increment</button>
        <button type="button" onClick={decrement}>decrement</button>
        <button type="button" onClick={reset}>reset</button>
        </div>
    )
}
export default Click