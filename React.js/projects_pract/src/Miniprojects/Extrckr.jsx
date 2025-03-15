import { Component } from "react";
import axios from "axios"
import Extrckrfrm from "./Extrckrfrm";
import Extrckrtable from "./Extrckrtable";

export default class Extrckr extends Component {
    constructor() {
        super()
        this.state = {
            person: {

                id: "",
                amount: "",
                category: "",
                description: "",
                date: "",
            },
            Expense: [],
            inx: null,
        }
    }
    event = (e) => {
        var usr = { ...this.state.person }
        usr[e.target.name] = e.target.value
        this.setState({ person: usr })
    }

    serverdata = () => {
        axios.get("http://localhost:3000/Expense").then((response) => {
            this.setState({ Expense: response.data })
        })
    }



    add = () => {
        axios.post("http://localhost:3000/Expense", this.state.person).then(() => {
            this.serverdata()
            this.clearExpense()
        })
    }
    update = () => {
        axios.put("http://localhost:3000/Expense/" + this.state.Expense[this.state.inx].id, this.state.person).then(() => {
            this.serverdata()
            this.setState({ inx: null })
            this.clearExpense()
        })
    }
    edit = (val, i) => {
        this.setState({ person: val, inx: i })
    }
    delete = (val) => {
        axios.delete("http://localhost:3000/Expense/" + val.id).then(() => {
            this.serverdata()
        })

    }
    clearExpense() {
        this.setState({
            person: {

                id: "",
                amount: "",
                description: "",
                category: "",
                date: "",
            },
        })
    }
    render() {
        return <div>
            <Extrckrfrm person={this.state.person}
                event={this.event}
                add={this.add}
                inx={this.state.inx}
                update={this.update} />

            <Extrckrtable Expense={this.state.Expense}
                edit={this.edit}
                delete={this.delete} />


        </div>
    }
    componentDidMount() {
        this.serverdata();
    }
}
