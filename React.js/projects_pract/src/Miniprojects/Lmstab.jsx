import { Component } from "react";
import "./Dab.css";

export default class Lmstab extends Component {
    render() {
        return <table border={1}>
            <thead><tr><th>id</th>
                <th>title</th>
                <th>author</th>
                <th>isAvailable</th>
                <th>borrower</th>
                <th>edit</th>
                <th>delete</th></tr></thead>
            <tbody>
                {this.props.Lms.map((val, i) => {
                        return <tr key={val.id}><td>{val.id}</td>
                            <td>{val.title}</td>
                            <td>{val.author}</td>
                            <td>{val.isAvailable}</td>
                            <td>{val.borrower}</td>
                        <td><button type="button" className="btn btn-primary" onClick={() => this.props.edit(val, i)}>edit</button></td>
                        <td><button type="button" className="btn btn-danger" onClick={() => this.props.delete(val, i)}>delete</button></td>
                    </tr>
                })}

            </tbody>
        </table>
    }
}