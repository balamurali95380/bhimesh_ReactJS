import { Component } from "react";

class Tab extends Component {
    render() {
        return <div>
            <h1>table</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>heading1</th>
                        <th>heading2</th>
                        <th>heading3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>item1</td>
                        <td>item2</td>
                        <td>item3</td>
                    </tr>
                </tbody>
            </table>
        </div>
    }
}
export default Tab