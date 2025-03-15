import { Component } from "react";
import "./Dab.css";

export default class Extrckrtable extends Component {
    render() {
        return <table border={1}>
            <thead><tr><th>id</th>
                <th>amount</th>
                <th>description</th>
                <th>category</th>
                <th>date</th>
                <th>edit</th>
                <th>delete</th></tr></thead>
            <tbody>
                {this.props.Expense.map((val, i) => {
                    return <tr key={val.id}><td>{val.id}</td>
                        <td>{val.amount}</td>
                        <td>{val.description}</td>
                        <td>{val.category}</td>
                        <td>{val.date}</td>
                        <td><button type="button" className="btn btn-primary" onClick={() => this.props.edit(val, i)}>edit</button></td>
                        <td><button type="button" className="btn btn-danger" onClick={() => this.props.delete(val, i)}>delete</button></td>
                    </tr>
                })}

            </tbody>
        </table>
    }
}