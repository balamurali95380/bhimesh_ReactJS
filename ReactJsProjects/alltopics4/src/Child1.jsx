import { useState } from "react"
import Child2 from "./Child2"

const Child1=({msg})=>{
    const[msg2,setmsg2]=useState("Child1 msg")
    return<>
    <h3>{msg2}</h3>
    <Child2 msg={msg}/>
        </>

}
export default Child1