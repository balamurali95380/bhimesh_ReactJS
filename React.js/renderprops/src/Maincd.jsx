import { Component } from "react"
import Clik from "./Clik"
import Mouseovr from "./Mouseovr"
import Intfc from "./Intfc"

export default class Maincd extends Component{
    constructor(){
        super()
    }
    render(){
        return <Intfc render={(count,increment,decrement,reset)=>(
            <><Clik count={count}
            increment={increment}
            decrement={decrement}
            reset={reset}/>
            <hr />
           <Mouseovr count={count}
           increment={increment}
           decrement={decrement}
           reset={reset}/></>
                 )} />
    
}}