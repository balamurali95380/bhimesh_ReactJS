import { Component } from "react";
import Shoulder from "./Shoulder";
import Support from "./Support";
import Heart from "./Heart";

export default class Parts extends Component {
   
    render() {
        return <div>
            <Heart render={(count, increment, decrement, reset) => (

                <Shoulder
                    count={count}
                    increment={increment}
                    decrement={decrement}
                    reset={reset}
                />
            )} />


            <Heart render={(count, increment, decrement, reset) => (
                <Support
                    count={count}
                    increment={increment}
                    decrement={decrement}
                    reset={reset}
                />
            )} />
        </div>
    }
}
