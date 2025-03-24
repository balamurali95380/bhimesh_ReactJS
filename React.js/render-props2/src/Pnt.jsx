import { Component } from "react";
import Chd2 from "./Chd2";
import Chd1 from "./Chd1";

export default class extends Component{
    constructor(){
        super()

    }
    render(){
        return <div>
            <Chd2 render={(count,increment,decrement,reset)=>(
               <Chd1 count={count}
                increment={increment}
                decrement={decrement}
                reset={reset}/>


            )} />    </div>
    }
}