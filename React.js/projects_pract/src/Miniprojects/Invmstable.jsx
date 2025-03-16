import { Component } from "react";
import "./Dab.css";

export default class Invmstable extends Component {
    render() {
        return <table border={1}>
            <thead><tr><th>id</th>
                <th>name</th>
                <th>quantity</th>
                <th>price</th>
                <th>category</th>
                <th>edit</th>
                <th>delete</th></tr></thead>
            <tbody>
                {this.props.invems.map((val, i) => {
                    return <tr key={val.id}><td>{val.id}</td>
                        <td>{val.name}</td>
                        <td>{val.quantity}</td>
                        <td>{val.price}</td>
                        <td>{val.category}</td>
                        <td><button type="button" className="btn btn-primary" onClick={() => this.props.edit(val, i)}>edit</button></td>
                        <td><button type="button" className="btn btn-danger" onClick={() => this.props.delete(val, i)}>delete</button></td>
                    </tr>
                })}

            </tbody>
        </table>
    }
}