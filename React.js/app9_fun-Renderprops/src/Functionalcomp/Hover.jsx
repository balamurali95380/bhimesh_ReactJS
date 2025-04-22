import React from "react"
const Hover=({count,increment,decrement,reset})=>{
    return(
     <>
        <h1>{count}</h1>
        <button type="button" onMouseOver={increment}>increment</button>
        <button type="button" onMouseOver={decrement}>decrement</button>
        <button type="button" onMouseOver={reset}>reset</button>
        </>
    )
}
export default Hover