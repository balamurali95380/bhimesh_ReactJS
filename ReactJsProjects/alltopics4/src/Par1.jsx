import { useState } from "react"
import Child1 from "./Child1"

const Par1=({msg})=>{
    const[msg1,setmsg1]=useState("parentmsg")
    return<>
    <h2>{msg1}</h2>
    <Child1 msg={msg}/>
    </>
}
export default Par1