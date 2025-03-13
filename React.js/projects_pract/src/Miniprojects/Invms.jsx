import { Component } from "react";
import axios from "axios"

export default class Invms extends Component {
    constructor() {
        super()
        this.state = {
            person: {
     
                id:"",
                name: "",
                quantity:"",
                price:"",
                category:"",
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

    serverdata=()=>{
        axios.get("http://localhost:3000/invems").then((response)=>{
                this.setState({invems:response.data})
            })
        } 


    
    add = () => {
        axios.post("http://localhost:3000/invems",this.state.person).then(()=>{
                this.serverdata()
                this.clearinvems()
            })
    }
    update = () => {
        axios.put("http://localhost:3000/invems/"+this.state.invems[this.state.inx].id,this.state.person).then(()=>{
                this.serverdata()
                this.setState({inx:null})
                this.clearinvems()
            })
         }
    edit = (val, i) => { 
        this.setState({person:val,inx:i})
    }
    delete = (val) => {
        axios.delete("http://localhost:3000/invems/"+val.id).then(()=>{
            this.serverdata()
        })
        
     }
    clearinvems(){
        this.setState({  person: {
     
            id:"",
            name: "",
            quantity:"",
            price:"",
            category:"",
        },})
    }
    render() {
        return <div>
            <form action="">
                <label htmlFor="">id</label>
                <input type="text" name="id" id="" value={this.state.person.id} onChange={this.event} />{""}
                <label htmlFor="">name</label>
                <input type="text" name="name" id="" value={this.state.person.name} onChange={this.event} />{""}
                <label htmlFor="">quantity</label>
                <input type="text" name="quantity" id="" value={this.state.person.quantity} onChange={this.event} />{""}
                <label htmlFor="">price</label>
                <input type="text" name="price" id="" value={this.state.person.price} onChange={this.event} />{""}
                <label htmlFor="">category</label>
                <input type="text" name="category" id="" value={this.state.person.category} onChange={this.event} />{""}
                {this.state.inx === null ? (<button type="button" onClick={this.add}>add</button>)
                    : (<button type="button" onClick={this.update}>update</button>)}
            </form>
            <hr />
            <table border={1}>
                <thead><tr><th>id</th>
                    <th>name</th>
                    <th>quantity</th>
                    <th>price</th>
                    <th>category</th>
                    <th>edit</th>
                    <th>delete</th></tr></thead>
                <tbody>
                    {this.state.invems.map((val, i) => {
                        return <tr key={val.id}><td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.quantity}</td>
                            <td>{val.price}</td>
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
