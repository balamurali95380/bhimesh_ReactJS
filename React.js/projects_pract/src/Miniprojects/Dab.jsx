import { Component } from "react";
import axios from "axios"
import Dabtable from "./Dabtable";
import Dabform from "./Dabform";



export default class Dab extends Component {
    constructor() {
        super()
        this.state = {
            person: {

                id: "",
                name: "",
                email: "",
                phone: "",
                address: "",
            },
            Dab: [],
            inx: null,
        }
    }
    event = (e) => {
        var usr = { ...this.state.person }
        usr[e.target.name] = e.target.value
        this.setState({ person: usr })
    }

    serverdata = () => {
        axios.get("http://localhost:3000/Dab").then((response) => {
            this.setState({ Dab: response.data })
        })
    }



    add = () => {
        axios.post("http://localhost:3000/Dab", this.state.person).then(() => {
            this.serverdata()
            this.clearDab()
        })
    }
    update = () => {
        axios.put("http://localhost:3000/Dab/" + this.state.Dab[this.state.inx].id, this.state.person).then(() => {
            this.serverdata()
            this.setState({ inx: null })
            this.clearDab()
        })
    }
    edit = (val, i) => {
        this.setState({ person: val, inx: i })
    }
    delete = (val) => {
        axios.delete("http://localhost:3000/Dab/" + val.id).then(() => {
            this.serverdata()
        })

    }
    clearDab() {
        this.setState({
            person: {

                id: "",
                name: "",
                email: "",
                phone: "",
                address: "",
            },
        })
    }
    render() {
        return (
            <div className="container ">
                <div className="row">
                    <div className="col">
                        <Dabform
                            address={this.state.person}
                            event={this.event} 
                            add={this.add}     
                            inx={this.state.inx}
                            update={this.update} 
                        />
                    </div>
                    <div className="col">
                        <Dabtable
                            addressdetails={this.state.Dab}
                            edit={this.edit}
                            delete={this.delete} />
                    </div>

                </div>
            </div>)

    }
    componentDidMount() {
        this.serverdata();
    }
}
