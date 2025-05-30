import react,{ useContext} from "react"
import { Parcontext } from "./Parcontext"


const Child2=()=>{
    // const[msg3,setmsg3]=useState("Child2 msg")
    const{msg,setmsg}=useContext(Parcontext)
    return<>
    {/* <h3>{msg3}</h3> */}
    {/* <button type="button" onClick={()=>{setmsg("child2 msg")}}>sent msg from grandpar1</button> */}
   
    <h1>{msg}</h1>
        </>

}
export default Child2