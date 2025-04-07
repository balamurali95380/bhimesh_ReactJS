import { Component } from "react";
import Toggle from "./Toggle";
import Shoulder from "./Shoulder";
import Light from "./Light";

export default class Rendr extends Component {
    render() {
        return <div>
            <Toggle render={(isOn, toggle) => (

                <Shoulder
                    isOn={isOn}
                    toggle={toggle}
                />
            )} />
            <Toggle render={(isOn, toggle) => (

                <Light
                    isOn={isOn}
                    toggle={toggle}
                />
            )} />
        </div>
    }
}


