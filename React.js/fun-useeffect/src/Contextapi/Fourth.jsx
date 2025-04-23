import React from "react"
import { Usercontextconsumer } from "./Usercontext"

const Fourth=({info})=>{

    return(<>
    <Usercontextconsumer>
        
       {(value)=> <h1>fourth:{value}</h1>}
        
       
    </Usercontextconsumer></>
    )
}
export default Fourth