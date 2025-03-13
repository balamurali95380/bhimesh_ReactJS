import { Component } from "react";
import axios from "axios"

export default class Ecartmanagement extends Component {
    constructor() {
        super()
        this.state = {
            person: {
                id:"",
                name: "",
                price:"",
                quantity:"",
                totalprice:"",
            },
            Ecart: [],
            inx: null,
        }
    }
    event = (e) => {
        var usr = { ...this.state.person }
        usr[e.target.name] = e.target.value
        this.setState({ person: usr })
    }

    serverdata=()=>{
        axios.get("http://localhost:3000/Ecart").then((response)=>{
                this.setState({Ecart:response.data})
            })
        } 


    
    add = () => {
        axios.post("http://localhost:3000/Ecart",this.state.person).then(()=>{
                this.serverdata()
                this.clearEcart()
            })
    }
    update = () => {
        axios.put("http://localhost:3000/Ecart/"+this.state.Ecart[this.state.inx].id,this.state.person).then(()=>{
                this.serverdata()
                this.setState({inx:null})
                this.clearEcart()
            })
         }
    edit = (val, i) => { 
        this.setState({person:val,inx:i})
    }
    delete = (val) => {
        axios.delete("http://localhost:3000/Ecart/"+val.id).then(()=>{
            this.serverdata()
        })
        
     }
    clearEcart(){
        this.setState({person: {
            id:"",
            name: "",
            price:"",
            quantity:"",
            totalprice:"",
        },})
    }
    render() {
        return <div>
            <form action="">
                <label htmlFor="">id</label>
                <input type="text" name="id" id="" value={this.state.person.id} onChange={this.event} />{""}
                <label htmlFor="">name</label>
                <input type="text" name="name" id="" value={this.state.person.name} onChange={this.event} />{""}
                <label htmlFor="">price</label>
                <input type="text" name="price" id="" value={this.state.person.price} onChange={this.event} />{""}
                <label htmlFor="">quantity</label>
                <input type="text" name="quantity" id="" value={this.state.person.quantity} onChange={this.event} />{""}
                <label htmlFor="">totalprice</label>
                <input type="text" name="totalprice" id="" value={this.state.person.totalprice=this.state.person.price*this.state.person.quantity} onChange={this.event} />{""}
                {this.state.inx === null ? (<button type="button" onClick={this.add}>add</button>)
                    : (<button type="button" onClick={this.update}>update</button>)}
            </form>
            <hr />
            <table border={1}>
                <thead><tr><th>id</th>
                    <th>name</th>
                    <th>price</th>
                    <th>quantity</th>
                    <th>totalprice</th>
                    <th>edit</th>
                    <th>delete</th></tr></thead>
                <tbody>
                    {this.state.Ecart.map((val, i) => {
                        return <tr key={val.id}><td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.price}</td>
                            <td>{val.quantity}</td>
                            <td>{val.totalprice}</td>
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
