import React,{ useState } from "react"
import { Parent } from "./Parent"
import { UsercontextProvider } from "./Usercontex"

const First=()=>{
    const[userinfo,setuser]=useState(["bhim","jaga"])
    const[newuser,updteuser]=useState(["bh","jg"])
 return(
    <div>
        <UsercontextProvider value={newuser}>
            <Parent userinfo={userinfo}/>
        </UsercontextProvider>
    </div>
 )

}
export default First