import { useState } from "react"
import Todolist1 from "./Todolist1"
import Todofrm1 from "./Todofrm1"
import { useCallback } from "react"

const Todoapp1=()=>{
    // const todos=["bhimesh",
    //     "jaswa"
    // ]
    const[todos,settodo1]=useState([])
    const[count,setCount]=useState(0)

   const addtodo=(newtodo)=>{
    settodo1([...todos,newtodo])

   }
   const increment=()=>{
    setCount(count+1)
   }

    return <div>
       
        <Todofrm1 addtodo={addtodo}/>
        
       < Todolist1 todos={todos} />
        <h1>count:{count}</h1>
        <button type="button" onClick={increment}>increment</button>

      
    </div>
}

export default Todoapp1