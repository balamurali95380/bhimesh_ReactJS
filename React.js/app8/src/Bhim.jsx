import { Component } from "react";
import Bhavya from "./Bhavya";
import Jagadish from "./Jagadish";
import Yamuna from "./Yamuna";

function Bhim(){
    return <div>
        <h1>bhim</h1>
        <hr />
        <Bhavya/>
        <hr />
        <Yamuna/>
        <hr />
        <Jagadish/>
    </div>
}
export default Bhim


export function Newcls(){
    return <div>
        <h2>functional component</h2>
    </div>
}
 