import { Component } from "react";
import { connect } from "react-redux";

class Employee extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props)
        return (<div>

            <ul>
                {this.props.employee.map((emp) => {
                    return <li>{emp}</li>
                })}
            </ul>
        </div>)
    }

}
function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(Employee)