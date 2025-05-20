import { useCallback, useState } from "react"
import Increment from "./Increment"

const Logic =()=>{
    const[count,setcount]=useState(0)
   

//    const  handleincrement=()=>{
//     console.log("functionexecuted")
//     setcount(count=>count+1)

//     }
    const  handleincrement=useCallback(()=>{
        console.log("functionexecuted")
    setcount(count=>count+1),[]})

    

    return<>
    <h1>{count}</h1>
    {/* <button type="button" onClick={handleincrement}>increment</button> */}
    <Increment increment={handleincrement}/>
    </>
}
export default Logic