import { useState } from "react"
import { Usercontextprovider } from "./Usercontext";
import Fourth from "./Fourth"

const First=()=>{
    const[info,setinfo]=useState("welcome")
    const message=()=>{
        setinfo("hi bhimesh")
        console.log(info)
    }
    return(<>
    <h1>{info}</h1>
    <button type="button" onClick={message}>Display message:{info}</button>
    <Usercontextprovider value={info}>
        <Fourth info={info}/>
        </Usercontextprovider>    
    </>)

}
export default First