import React,{ useState } from "react"

const RenderProp=({render})=>{
    const[count,setcount]=useState(0)

     const increment=()=>{
        setcount(count+1)

    }
    const decrement=()=>{
        setcount(count-1)

    }
    const reset=()=>{
        setcount(0)

    }
return <div>{render(count,increment,decrement,reset)}</div>;
    
}
export default RenderProp