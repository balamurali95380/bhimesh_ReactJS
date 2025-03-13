import { Component } from "react";
import axios from "axios"

export default class Taskms extends Component {
    constructor() {
        super()
        this.state = {
            person: {
                id:"",
                title: "",
                description:"",
                status:"",
                createdAt:"",
            },
            Task: [],
            inx: null,
        }
    }
    event = (e) => {
        var usr = { ...this.state.person }
        usr[e.target.name] = e.target.value
        this.setState({ person: usr })
    }

    serverdata=()=>{
        axios.get("http://localhost:3000/Task").then((response)=>{
                this.setState({Task:response.data})
            })
        } 


    
    add = () => {
        axios.post("http://localhost:3000/Task",this.state.person).then(()=>{
                this.serverdata()
                this.clearTask()
            })
    }
    update = () => {
        axios.put("http://localhost:3000/Task/"+this.state.Task[this.state.inx].id,this.state.person).then(()=>{
                this.serverdata()
                this.setState({inx:null})
                this.clearTask()
            })
         }
    edit = (val, i) => { 
        this.setState({person:val,inx:i})
    }
    delete = (val) => {
        axios.delete("http://localhost:3000/Task/"+val.id).then(()=>{
            this.serverdata()
        })
        
     }
    clearTask(){
        this.setState({ person: {
            id:"",
            title: "",
            description:"",
            status:"",
            createdAt:"",
        },})
    }
    render() {
        return <div>
            <form action="">
                <label htmlFor="">id</label>
                <input type="text" name="id" id="" value={this.state.person.id} onChange={this.event} />{""}
                <label htmlFor="">title</label>
                <input type="text" name="title" id="" value={this.state.person.title} onChange={this.event} />{""}
                <label htmlFor="">description</label>
                <input type="text" name="description" id="" value={this.state.person.description} onChange={this.event} />{""}
                <label htmlFor="">status</label>
                <input type="text" name="status" id="" value={this.state.person.status} onChange={this.event} />{""}
                <label htmlFor="">createdAt</label>
                <input type="text" name="createdAt" id="" value={this.state.person.createdAt} onChange={this.event} />{""}
                {this.state.inx === null ? (<button type="button" onClick={this.add}>add</button>)
                    : (<button type="button" onClick={this.update}>update</button>)}
            </form>
            <hr />
            <table border={1}>
                <thead><tr><th>id</th>
                    <th>title</th>
                    <th>description</th>
                    <th>status</th>
                    <th>createdAt</th>
                    <th>edit</th>
                    <th>delete</th></tr></thead>
                <tbody>
                    {this.state.Task.map((val, i) => {
                        return <tr key={val.id}><td>{val.id}</td>
                            <td>{val.title}</td>
                            <td>{val.description}</td>
                            <td>{val.status}</td>
                            <td>{val.createdAt}</td>
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
