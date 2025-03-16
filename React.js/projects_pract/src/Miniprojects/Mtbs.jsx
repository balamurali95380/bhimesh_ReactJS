import { Component } from "react";
import axios from "axios"
import Mtbsfrm from "./Mtbsfrm";
import Mtbstbl from "./Mtbstbl";

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

            <Mtbsfrm person={this.state.person}
                event={this.event}
                add={this.add}
                inx={this.state.inx}
                update={this.update} />

            <Mtbstbl Movie={this.state.Movie}
                edit={this.edit}
                delete={this.delete} />
        </div>
    }
    componentDidMount() {
        this.serverdata();
    }
}
