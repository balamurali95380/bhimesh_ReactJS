import { Component } from "react";
import axios from "axios"

export default class Extrckr extends Component {
    constructor() {
        super()
        this.state = {
            person: {

                id:"",
                amount: "",
                category:"",
                description:"",
                date:"",
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

    serverdata=()=>{
        axios.get("http://localhost:3000/Expense").then((response)=>{
                this.setState({Expense:response.data})
            })
        } 


    
    add = () => {
        axios.post("http://localhost:3000/Expense",this.state.person).then(()=>{
                this.serverdata()
                this.clearExpense()
            })
    }
    update = () => {
        axios.put("http://localhost:3000/Expense/"+this.state.Expense[this.state.inx].id,this.state.person).then(()=>{
                this.serverdata()
                this.setState({inx:null})
                this.clearExpense()
            })
         }
    edit = (val, i) => { 
        this.setState({person:val,inx:i})
    }
    delete = (val) => {
        axios.delete("http://localhost:3000/Expense/"+val.id).then(()=>{
            this.serverdata()
        })
        
     }
    clearExpense(){
        this.setState({ person: {

            id:"",
            amount: "",
            description:"",
            category:"",          
            date:"",
        },})
    }
    render() {
        return <div>
            <form action="">
                <label htmlFor="">id</label>
                <input type="text" name="id" id="" value={this.state.person.id} onChange={this.event} />{""}
                <label htmlFor="">amount</label>
                <input type="text" name="amount" id="" value={this.state.person.amount} onChange={this.event} />{""}
                <label htmlFor="">description</label>
                <input type="text" name="description" id="" value={this.state.person.description} onChange={this.event} />{""}
                <label htmlFor="">category</label>
                <input type="text" name="category" id="" value={this.state.person.category} onChange={this.event} />{""}
                <label htmlFor="">date</label>
                <input type="text" name="date" id="" value={this.state.person.date} onChange={this.event} />{""}
                {this.state.inx === null ? (<button type="button" onClick={this.add}>add</button>)
                    : (<button type="button" onClick={this.update}>update</button>)}
            </form>
            <hr />
            <table border={1}>
                <thead><tr><th>id</th>
                    <th>amount</th>
                    <th>description</th>
                    <th>category</th>
                    <th>date</th>
                    <th>edit</th>
                    <th>delete</th></tr></thead>
                <tbody>
                    {this.state.Expense.map((val, i) => {
                        return <tr key={val.id}><td>{val.id}</td>
                            <td>{val.amount}</td>
                            <td>{val.description}</td>
                            <td>{val.category}</td>
                            <td>{val.date}</td>
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
