import { Component } from "react";
import axios from "axios"

export default class Mtbs extends Component {
    constructor() {
        super()
        this.state = {
            person: {
                userID: "",
                seatNumber: "",
                isBooked: "",
                category: "",

            },
            Movie: [],
            inx: null,
        }
    }
    event = (e) => {
        var usr = { ...this.state.person }
        usr[e.target.name] = e.target.value
        this.setState({ person: usr })
    }

    serverdata = () => {
        axios.get("http://localhost:3000/Movie").then((response) => {
            this.setState({ Movie: response.data })
        })
    }



    add = () => {
        axios.post("http://localhost:3000/Movie", this.state.person).then(() => {
            this.serverdata()
            this.clearMovie()
        })
    }
    update = () => {
        axios.put("http://localhost:3000/Movie/" + this.state.Movie[this.state.inx].id, this.state.person).then(() => {
            this.serverdata()
            this.setState({ inx: null })
            this.clearMovie()
        })
    }
    edit = (val, i) => {
        this.setState({ person: val, inx: i })
    }
    delete = (val) => {
        axios.delete("http://localhost:3000/Movie/" + val.id).then(() => {
            this.serverdata()
        })

    }
    clearMovie() {
        this.setState({
            person: {
                userID: "",
                seatNumber: "",
                isBooked: "",
                category: "",

            },
        })
    }
    render() {
        return <div>
            <form action="">
                <label htmlFor="">userID</label>
                <input type="text" name="userID" id="" value={this.state.person.userID} onChange={this.event} />{""}
                <label htmlFor="">seatNumber</label>
                <input type="text" name="seatNumber" id="" value={this.state.person.seatNumber} onChange={this.event} />{""}
                <label htmlFor="">isBooked</label>
                <input type="text" name="isBooked" id="" value={this.state.person.isBooked} onChange={this.event} />{""}
                <label htmlFor="">category</label>
                <input type="text" name="category" id="" value={this.state.person.category} onChange={this.event} />{""}
                
                {this.state.inx === null ? (<button type="button" onClick={this.add}>add</button>)
                    : (<button type="button" onClick={this.update}>update</button>)}
            </form>
            <hr />
            <table border={1}>
                <thead><tr><th>userID</th>
                    <th>seatNumber</th>
                    <th>isBooked</th>
                    <th>category</th>
                  
                    <th>edit</th>
                    <th>delete</th></tr></thead>
                <tbody>
                    {this.state.Movie.map((val, i) => {
                        return <tr key={val.id}><td>{val.userID}</td>
                            <td>{val.seatNumber}</td>
                            <td>{val.isBooked}</td>
                            <td>{val.category}</td>
                           
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
