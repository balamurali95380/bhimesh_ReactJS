import React from "react"
import { Child } from "./Child"


interface Parentprops {
    userinfo: string[]
}

export const Parent: React.FC<Parentprops> = ({ userinfo }) => {
    return (
        <>
            <Child userinfo={userinfo} />
        </>
    )

}