import { Component } from "react";

export default class Tasktable extends Component{
    render(){
        return <div>
             <table border={1}>
                <thead><tr><th>id</th>
                    <th>title</th>
                    <th>description</th>
                    <th>status</th>
                    <th>createdAt</th>
                    <th>edit</th>
                    <th>delete</th></tr></thead>
                <tbody>
                    {this.props.Task.map((val, i) => {
                        return <tr key={val.id}><td>{val.id}</td>
                            <td>{val.title}</td>
                            <td>{val.description}</td>
                            <td>{val.status}</td>
                            <td>{val.createdAt}</td>
                            <td><button type="button" onClick={() => this.props.edit(val, i)}>edit</button></td>
                            <td><button type="button" onClick={() => this.props.delete(val, i)}>delete</button></td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    }
}