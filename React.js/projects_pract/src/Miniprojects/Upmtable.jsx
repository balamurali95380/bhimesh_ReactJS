import { Component } from "react";

export default class Upmtable extends Component {
    render() {
        return <div>
            <table border={1}>
                <thead><tr><th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>role</th>
                    <th>preferences</th>
                    <th>edit</th>
                    <th>delete</th></tr></thead>
                <tbody>
                    {this.props.Upm.map((val, i) => {
                        return <tr key={val.id}>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.email}</td>
                            <td>{val.role}</td>
                            <td>{val.preferences}</td>
                            <td><button type="button" onClick={() => this.props.edit(val, i)}>edit</button></td>
                            <td><button type="button" onClick={() => this.props.delete(val, i)}>delete</button></td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    }
}