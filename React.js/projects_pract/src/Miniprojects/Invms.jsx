import { Component } from "react";
import axios from "axios"
import Invmsfrm from "./invmsfrm";
import Invmstable from "./Invmstable";

export default class Invms extends Component {
    constructor() {
        super()
        this.state = {
            person: {

                id: "",
                name: "",
                quantity: "",
                price: "",
                category: "",
            },
            invems: [],
            inx: null,
        }
    }
    event = (e) => {
        var usr = { ...this.state.person }
        usr[e.target.name] = e.target.value
        this.setState({ person: usr })
    }

    serverdata = () => {
        axios.get("http://localhost:3000/invems").then((response) => {
            this.setState({ invems: response.data })
        })
    }



    add = () => {
        axios.post("http://localhost:3000/invems", this.state.person).then(() => {
            this.serverdata()
            this.clearinvems()
        })
    }
    update = () => {
        axios.put("http://localhost:3000/invems/" + this.state.invems[this.state.inx].id, this.state.person).then(() => {
            this.serverdata()
            this.setState({ inx: null })
            this.clearinvems()
        })
    }
    edit = (val, i) => {
        this.setState({ person: val, inx: i })
    }
    delete = (val) => {
        axios.delete("http://localhost:3000/invems/" + val.id).then(() => {
            this.serverdata()
        })

    }
    clearinvems() {
        this.setState({
            person: {

                id: "",
                name: "",
                quantity: "",
                price: "",
                category: "",
            },
        })
    }
    render() {
        return <div>
            <Invmsfrm person={this.state.person}
                event={this.event}
                add={this.add}
                inx={this.state.inx}
                update={this.update} />

            <Invmstable invems={this.state.invems}
                edit={this.edit}
                delete={this.delete} />

            <hr />

        </div>
    }
    componentDidMount() {
        this.serverdata();
    }
}
