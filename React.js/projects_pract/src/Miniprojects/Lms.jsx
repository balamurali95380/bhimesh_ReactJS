import { Component } from "react";
import axios from "axios"

export default class Lms extends Component {
    constructor() {
        super()
        this.state = {
            person: {

                id:"",
                title: "",
                author:"",
                isAvailable:"",
                borrower:"",
            },
            Lms: [],
            inx: null,
        }
    }
    event = (e) => {
        var usr = { ...this.state.person }
        usr[e.target.name] = e.target.value
        this.setState({ person: usr })
    }

    serverdata=()=>{
        axios.get("http://localhost:3000/Lms").then((response)=>{
                this.setState({Lms:response.data})
            })
        } 


    
    add = () => {
        axios.post("http://localhost:3000/Lms",this.state.person).then(()=>{
                this.serverdata()
                this.clearLms()
            })
    }
    update = () => {
        axios.put("http://localhost:3000/Lms/"+this.state.Lms[this.state.inx].id,this.state.person).then(()=>{
                this.serverdata()
                this.setState({inx:null})
                this.clearLms()
            })
         }
    edit = (val, i) => { 
        this.setState({person:val,inx:i})
    }
    delete = (val) => {
        axios.delete("http://localhost:3000/Lms/"+val.id).then(()=>{
            this.serverdata()
        })
        
     }
    clearLms(){
        this.setState({ person: {

            id:"",
            title: "",
            author:"",
            isAvailable:"",
            borrower:"",
        },})
    }
    render() {
        return <div>
            <form action="">
                <label htmlFor="">id</label>
                <input type="text" name="id" id="" value={this.state.person.id} onChange={this.event} />{""}
                <label htmlFor="">title</label>
                <input type="text" name="title" id="" value={this.state.person.title} onChange={this.event} />{""}
                <label htmlFor="">author</label>
                <input type="text" name="author" id="" value={this.state.person.author} onChange={this.event} />{""}
                <label htmlFor="">isAvailable</label>
                <input type="text" name="isAvailable" id="" value={this.state.person.isAvailable} onChange={this.event} />{""}
                
                {this.state.inx === null ? (<button type="button" onClick={this.add}>add</button>)
                    : (<button type="button" onClick={this.update}>update</button>)}
            </form>
            <hr />
            <table border={1}>
                <thead><tr><th>id</th>
                    <th>title</th>
                    <th>author</th>
                    <th>isAvailable</th>
              
                    <th>edit</th>
                    <th>delete</th></tr></thead>
                <tbody>
                    {this.state.Lms.map((val, i) => {
                        return <tr key={val.id}><td>{val.id}</td>
                            <td>{val.title}</td>
                            <td>{val.author}</td>
                            <td>{val.isAvailable}</td>
                          
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
