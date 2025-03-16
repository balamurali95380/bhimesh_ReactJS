import { Component } from "react";

export default class Onlintble extends Component{
    render(){
        return <div>
            <table border={1}>
                <thead><tr><th>id</th>
                    <th>question</th>
                    <th>options</th>
                    <th>correctAnswer</th>
                    <th>score</th>
                    <th>edit</th>
                    <th>delete</th></tr></thead>
                <tbody>
                    {this.props.Quiz.map((val, i) => {
                        return <tr key={val.id}>
                            <td>{val.id}</td>
                            <td>{val.question}</td>
                            <td>{val.options}</td>
                            <td>{val.correctAnswer}</td>
                            <td>{val.score}</td>                   
                            <td><button type="button" onClick={() => this.props.edit(val, i)}>edit</button></td>
                            <td><button type="button" onClick={() => this.props.delete(val, i)}>delete</button></td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    }
}