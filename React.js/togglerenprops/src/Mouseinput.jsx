import { Component } from "react";
import Mousepos from "./Mousepos";
import Track from "./Track";


export default class Mouseinput extends Component {
    render() {
        return <>
            <Mousepos render={(x, y) => (

                <Track
                    x={x}
                    y={y}
                />
            )} />

        </>
    }
}


