import { Component } from "react";
import "./Dab.css";

export default class Mtbstbl extends Component {
    render() {
        return <table border={1}>
            <thead><tr><th>userID</th>
                <th>seatNumber</th>
                <th>isBooked</th>
                <th>category</th>
                <th>edit</th>
                <th>delete</th></tr></thead>
            <tbody>
                {this.props.Movie.map((val, i) => {
                    return <tr key={val.id}><td>{val.userID}</td>
                        <td>{val.seatNumber}</td>
                        <td>{val.isBooked}</td>
                        <td>{val.category}</td>
                        <td><button type="button" className="btn btn-primary" onClick={() => this.props.edit(val, i)}>edit</button></td>
                        <td><button type="button" className="btn btn-danger" onClick={() => this.props.delete(val, i)}>delete</button></td>
                    </tr>
                })}

            </tbody>
        </table>
    }
}