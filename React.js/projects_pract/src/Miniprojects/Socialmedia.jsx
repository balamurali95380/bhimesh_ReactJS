import { Component } from "react";
import axios from "axios"

export default class Socialmedia extends Component {
    constructor() {
        super()
        this.state = {
            person: {
                id: "",
                content: "",
                likes: "",
                comments: "",
                author: "",
            },
            social: [],
            inx: null,
        }
    }
    event = (e) => {
        var usr = { ...this.state.person }
        usr[e.target.name] = e.target.value
        this.setState({ person: usr })
    }

    serverdata = () => {
        axios.get("http://localhost:3000/social").then((response) => {
            this.setState({ social: response.data })
        })
    }



    add = () => {
        axios.post("http://localhost:3000/social", this.state.person).then(() => {
            this.serverdata()
            this.clearsocial()
        })
    }
    update = () => {
        axios.put("http://localhost:3000/social/" + this.state.social[this.state.inx].id, this.state.person).then(() => {
            this.serverdata()
            this.setState({ inx: null })
            this.clearsocial()
        })
    }
    edit = (val, i) => {
        this.setState({ person: val, inx: i })
    }
    delete = (val) => {
        axios.delete("http://localhost:3000/social/" + val.id).then(() => {
            this.serverdata()
        })

    }
    clearsocial() {
        this.setState({
            person: {
                id: "",
                content: "",
                likes: "",
                comments: "",
                author: "",
            },
        })
    }
    render() {
        return <div>
            <form action="">
                <label htmlFor="">id</label>
                <input type="text" name="id" id="" value={this.state.person.id} onChange={this.event} />{""}
                <label htmlFor="">content</label>
                <input type="text" name="content" id="" value={this.state.person.content} onChange={this.event} />{""}
                <label htmlFor="">likes</label>
                <input type="text" name="likes" id="" value={this.state.person.likes} onChange={this.event} />{""}
                <label htmlFor="">comments</label>
                <input type="text" name="comments" id="" value={this.state.person.comments} onChange={this.event} />{""}
                <label htmlFor="">author</label>
                <input type="text" name="author" id="" value={this.state.person.author} onChange={this.event} />{""}
                {this.state.inx === null ? (<button type="button" onClick={this.add}>add</button>)
                    : (<button type="button" onClick={this.update}>update</button>)}
            </form>
            <hr />
            <table border={1}>
                <thead><tr><th>id</th>
                    <th>content</th>
                    <th>likes</th>
                    <th>comments</th>
                    <th>author</th>
                    <th>edit</th>
                    <th>delete</th></tr></thead>
                <tbody>
                    {this.state.social.map((val, i) => {
                        return <tr key={val.id}><td>{val.id}</td>
                            <td>{val.content}</td>
                            <td>{val.likes}</td>
                            <td>{val.comments}</td>
                            <td>{val.author}</td>
                            <td><button type="button" onClick={() => this.edit(val, i)}>edit</button></td>
                            <td><button type="button" onClick={() => this.delete(val, i)}>delete</button></td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    }
    componentDidMount() {
        this.serverdata();
    }
}
