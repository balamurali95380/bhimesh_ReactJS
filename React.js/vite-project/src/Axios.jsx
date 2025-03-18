import { Component } from "react";
import axios from "axios"

export default class Axios extends Component {
    constructor() {
        super()
        this.state = {
            person: {
                fname: "",
                lname: ""
            },
            form: [],
            inx: null,
        }
    }
    event = (e) => {
        var usr = { ...this.state.person }
        usr[e.target.name] = e.target.value
        this.setState({ person: usr })
    }

    serverdata=()=>{
        axios.get("http://localhost:3000/users").then((response)=>{
                this.setState({form:response.data})
            })
        } 


    
    add = () => {
        axios.post("http://localhost:3000/users",this.state.person).then(()=>{
                this.serverdata()
                this.clearform()
            })
    }
    update = () => {
        axios.put("http://localhost:3000/users/"+this.state.form[this.state.inx].id,this.state.person).then(()=>{
                this.serverdata()
                this.setState({inx:null})
                this.clearform()
            })
         }
    edit = (val, i) => { 
        this.setState({person:val,inx:i})
    }
    delete = (val) => {
        axios.delete("http://localhost:3000/users/"+val.id).then(()=>{
            this.serverdata()
        })
        
     }
    clearform(){
        this.setState({ person: {
            fname: "",
            lname: ""
        },})
    }
    render() {
        return <div>
            <form action="">
                <label htmlFor="">fname</label>
                <input type="text" name="fname" id="" value={this.state.person.fname} onChange={this.event} />{""}
                <label htmlFor="">lname</label>
                <input type="text" name="lname" id="" value={this.state.person.lname} onChange={this.event} />{""}
                {this.state.inx === null ? (<button type="button" onClick={this.add}>add</button>)
                    : (<button type="button" onClick={this.update}>update</button>)}
            </form>
            <hr />
            <table border={1}>
                <thead><tr><th>fname</th>
                    <th>lname</th>
                    <th>edit</th>
                    <th>delete</th></tr></thead>
                <tbody>
                    {this.state.form.map((val, i) => {
                        return <tr key={i}><td>{val.fname}</td>
                            <td>{val.lname}</td>
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
