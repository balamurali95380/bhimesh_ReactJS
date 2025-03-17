import { Component } from "react";

export default class ServerAPI extends Component {
    constructor() {
        super()
        this.state = {
            person: {
                fname: "",
                lname: "",
                email: "",
            },
            users: [],
            indx1:null,
        }
    }
    getUsersFromServer = () => {
        fetch("http://localhost:3000/users").then((response) => {
            return response.json()
        }).then((data) => {
            this.setState({ users: data })
        })
    }

    handleevent = (e) => {
        var newusr = { ...this.state.person }
        newusr[e.target.name] = e.target.value
        this.setState({ person: newusr })
    }
    adduser = () => {
        fetch("http://localhost:3000/users",
            {
                method: "POST",
                body: JSON.stringify(this.state.person),
                headers: { "Content-Type": "Application/json" }
            }).then(() => {
                this.getUsersFromServer()
                this.clearForm()
            })
    }
  
    deletetuser=(val)=>{
        fetch("http://localhost:3000/users/"+val.id, {
            method: "DELETE",}).then(()=>{
                this.getUsersFromServer()
            })

    }
    edituser=(val,i)=>{
        this.setState({person:val,indx1:i})

    }
    updateUser=()=>{
        fetch("http://localhost:3000/users/"+this.state.users[this.state.indx1].id ,{
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.state.person),
        }).then(()=>{
                this.getUsersFromServer()
                this.setState({indx1:null})
                this.clearForm()
            })

    }
    clearForm=()=>{
        this.setState({person:{
            fname: "",
            lname: "",
            email: "",
        }})
      }

    
    render() {
        return <div>
            <form action="">
                <label htmlFor="">fname</label>
                <input type="text" name="fname" id="" value={this.state.person.fname} onChange={this.handleevent} />{""}
                <br />
                <label htmlFor="">lname</label>
                <input type="text" name="lname" id="" value={this.state.person.lname} onChange={this.handleevent} />{""}
                <br />
                <label htmlFor="">email</label>
                <input type="text" name="email" id="" value={this.state.person.email} onChange={this.handleevent} />{""}
                <hr />
                {this.state.indx1 === null ? <button type="button" onClick={this.adduser}>add user</button> :
                    (<button type="button" onClick={this.updateUser}> update user</button>)}
                <br />
            </form>
            <hr />
            <table border={1}>
                <thead>
                    <tr>
                        <th>fname</th>
                        <th>lname</th>
                        <th>email</th>
                        <th>edit</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.users.map((val, i) => {
                        return (<tr key={i}>
                            <td>{val.fname}</td>
                            <td>{val.lname}</td>
                            <td>{val.email}</td>
                            <td><button type="button" onClick={() => this.edituser(val,i)}>edit</button></td>
                            <td><button type="button" onClick={() => this.deletetuser(val)}>delete</button></td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    }
    componentDidMount() {
        this.getUsersFromServer();
    }
}
