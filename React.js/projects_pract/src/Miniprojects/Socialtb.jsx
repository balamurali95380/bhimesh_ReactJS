import { Component } from "react";

export default class Socialtb extends Component {
    render() {
        return <div>
            <table border={1}>
                <thead><tr><th>id</th>
                    <th>content</th>
                    <th>likes</th>
                    <th>comments</th>
                    <th>author</th>
                    <th>edit</th>
                    <th>delete</th></tr></thead>
                <tbody>
                    {this.props.social.map((val, i) => {
                        return <tr key={val.id}><td>{val.id}</td>
                            <td>{val.content}</td>
                            <td>{val.likes}</td>
                            <td>{val.comments}</td>
                            <td>{val.author}</td>
                            <td><button type="button" onClick={() => this.props.edit(val, i)}>edit</button></td>
                            <td><button type="button" onClick={() => this.props.delete(val, i)}>delete</button></td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    }
}