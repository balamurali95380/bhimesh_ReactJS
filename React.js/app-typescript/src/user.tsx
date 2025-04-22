import React from "react"
import { UsercontextConsumer } from "./Usercontex"

interface Userinterface{
    userinfo:string[]
}
export const User:React.FC<Userinterface>=({userinfo})=>{

    return(
        <>
        <h1>User Component</h1>
        <li>{userinfo}</li>
        <UsercontextConsumer>
       
            {(val)=>{
                return(
                    <ul>
                        {val.map((item)=>{
                            return <li>{item}</li>
                        })}
                       
                    </ul>
                )
            }}

        </UsercontextConsumer>
        
        </>
    )
}