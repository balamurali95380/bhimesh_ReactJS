import { useState } from "react"
import { Parcontext } from "./Parcontext"
import Child1 from "./Child1"
// import Par1 from "./Par1"


const Grandpar1=({Child2})=>{
const[msg,setmsg]=useState("Grandparent")
return <>
<h1>{msg}</h1>

{/* <Par1 msg={msg}/> */}
<Parcontext.Provider value={{msg,setmsg}}>
    <Child2 />
    
</Parcontext.Provider>
</>
}

export default Grandpar1