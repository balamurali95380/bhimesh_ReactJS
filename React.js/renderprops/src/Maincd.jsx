import { Component } from "react"
import Clik from "./Clik"
import Mouseovr from "./Mouseovr"
import Intfc from "./Intfc"
import Text from "./Text"

export default class Maincd extends Component {
    constructor() {
        super()
    }
    render() {
        return <>
            <Intfc render={(count, increment, decrement, reset) => (
               <><Clik count={count}
                increment={increment}
                decrement={decrement}
                reset={reset} />
                <hr />

                <Text count={count} />
            </>)}
            />

            <Intfc render={(count, increment, decrement, reset) =>

            (<><Mouseovr count={count}
                increment={increment}
                decrement={decrement}
                reset={reset} />
                <hr />

                <Text count={count} />
            </>)}

            />
        </>

            }}
