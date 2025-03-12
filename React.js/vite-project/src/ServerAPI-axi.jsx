import { Component } from "react";

export default class ServerAPI_axi extends Component {
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
        fetch("http://localhost:3000/users").then((response)=>{
            return response.json()}).then((data)=>{
                this.setState({form:data})
            })
        } 


    
    add = () => {
        fetch("http://localhost:3000/users",
            { method: "POST", body: JSON.stringify(this.state.person), headers: { "Content-Type": "Application/json"} }).then(()=>{
                this.serverdata()
                this.clearform()
            })
    }
    update = () => {
        fetch("http://localhost:3000/users/"+this.state.form[this.state.inx].id,
            { method: "PUT", body: JSON.stringify(this.state.person), headers: { "Content-Type": "Application/json"} }).then(()=>{
                this.serverdata()
                this.setState({inx:null})
                this.clearform()
            })
         }
    edit = (val, i) => { 
        this.setState({person:val,inx:i})
    }
    delete = (val) => {
        fetch("http://localhost:3000/users/"+val.id,{method:"DELETE"}).then(()=>{
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
                        return <tr><td>{val.fname}</td>
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
