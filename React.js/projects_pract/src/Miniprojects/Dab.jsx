import { Component } from "react";
import axios from "axios"

export default class Dab extends Component {
    constructor() {
        super()
        this.state = {
            person: {
       
                id:"",
                name: "",
                email:"",
                phone:"",
                address:"",
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

    serverdata=()=>{
        axios.get("http://localhost:3000/Dab").then((response)=>{
                this.setState({Dab:response.data})
            })
        } 


    
    add = () => {
        axios.post("http://localhost:3000/Dab",this.state.person).then(()=>{
                this.serverdata()
                this.clearDab()
            })
    }
    update = () => {
        axios.put("http://localhost:3000/Dab/"+this.state.Dab[this.state.inx].id,this.state.person).then(()=>{
                this.serverdata()
                this.setState({inx:null})
                this.clearDab()
            })
         }
    edit = (val, i) => { 
        this.setState({person:val,inx:i})
    }
    delete = (val) => {
        axios.delete("http://localhost:3000/Dab/"+val.id).then(()=>{
            this.serverdata()
        })
        
     }
    clearDab(){
        this.setState({ person: {
       
            id:"",
            name: "",
            email:"",
            phone:"",
            address:"",
        },})
    }
    render() {
        return <div>
            <form action="">
                <label htmlFor="">id</label>
                <input type="text" name="id" id="" value={this.state.person.id} onChange={this.event} />{""}
                <label htmlFor="">name</label>
                <input type="text" name="name" id="" value={this.state.person.name} onChange={this.event} />{""}
                <label htmlFor="">email</label>
                <input type="text" name="email" id="" value={this.state.person.email} onChange={this.event} />{""}
                <label htmlFor="">phone</label>
                <input type="text" name="phone" id="" value={this.state.person.phone} onChange={this.event} />{""}
                <label htmlFor="">address</label>
                <input type="text" name="address" id="" value={this.state.person.address} onChange={this.event} />{""}
                {this.state.inx === null ? (<button type="button" onClick={this.add}>add</button>)
                    : (<button type="button" onClick={this.update}>update</button>)}
            </form>
            <hr />
            <table border={1}>
                <thead><tr><th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>phone</th>
                    <th>address</th>
                    <th>edit</th>
                    <th>delete</th></tr></thead>
                <tbody>
                    {this.state.Dab.map((val, i) => {
                        return <tr key={val.id}><td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.email}</td>
                            <td>{val.phone}</td>
                            <td>{val.address}</td>
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
