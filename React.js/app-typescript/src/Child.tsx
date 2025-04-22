import React from "react"
import { User } from "./user"

interface Childprops {
    userinfo: string[]
}

export const Child: React.FC<Childprops> = ({ userinfo }) => {
    return (
        <>  
        <User userinfo={userinfo}/>
        </>
    )

}