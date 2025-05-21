import { useCallback, useState } from "react"
import Increment from "./Increment"

const Logic =()=>{
    const[count,setcount]=useState(0)
    const[count1,setcount1]=useState(0)
   

//    const  handleincrement=()=>{
//     console.log("functionexecuted")
//     setcount(count=>count+1)

//     }
   const  handledecrement=()=>{
    console.log("decrement functionexecuted")
    setcount1(count1=>count1-1)
    
    }
    //     const  handledecrement=useCallback(()=>{
    //     console.log("callback functionexecuted")
    //  setcount1(count1=>count1-1),[]})

    const  handleincrement=useCallback(()=>{
        console.log("callback functionexecuted")
     setcount(count=>count+1),[]})

    

    return<>
    <h1>{count}</h1>
   <Increment increment={handleincrement}/>
    <h1>{count1}</h1>
    <button type="button" onClick={handledecrement}>decrement</button>  
   
   
    </>
}
export default Logic