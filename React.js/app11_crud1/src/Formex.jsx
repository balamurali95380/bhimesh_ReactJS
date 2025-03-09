import { Component } from "react";

export default class Formex extends Component{
    constructor(){
        super()
        this.state={
            person:{
                fname:"",
                lname:"",
                email:"",
            },
            array:[],
            indx:null
        }
    }

    handleform=(e)=>{
        // console.log(e.target)
        const newpersn={...this.state.person }
        newpersn[e.target.name]=e.target.value;
        this.setState({person:newpersn})
        // console.log(this.state.person);


    }
    adduser=()=>{
        var newpersn1=[...this.state.array]
        newpersn1.push(this.state.person)
        this.setState({array:newpersn1})
        console.log(this.state.person);
        this.clearform()
    }
    edituser(user,i){
        this.setState({person:user,indx:i})
    }
    deleteuser(i){
        var newdlt=[...this.state.array]
        newdlt.splice(i,1)
        this.setState({array:newdlt})
    }
    updateuser=()=>{
        var updarray=[...this.state.array]
        updarray[this.state.indx]=this.state.person
        this.setState({array:updarray,indx:null})
        this.clearform()
    }
    clearform(){
        this.setState({ person:{
            fname:"",
            lname:"",
            email:"",
        }})
    }
    render(){
        return <div><form action="">
        <label htmlFor="">fname</label> 
      <input type="text" name="fname" id="" value={this.state.person.fname} onChange={this.handleform}/>{""}
      <br />
        <label htmlFor="">lname</label>
        <input type="text" name="lname" id="" value={this.state.person.lname} onChange={this.handleform}/>{""}
        <br />
        <label htmlFor="">email</label>
        <input type="text" name="email" id="" value={this.state.person.email} onChange={this.handleform}/>{""}
        <br />
        {this.state.indx===null?<button type="button" onClick={this.adduser}>Add user details</button>:( <button type="button" onClick={this.updateuser}>update user details</button> ) }
        
       
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
                {this.state.array.map((user,i)=>{
                    return <tr key={i}><td>{user.fname}</td>
                    <td>{user.lname}</td>
                    <td>{user.email}</td>
                    <td><button type="button" onClick={()=>{this.edituser(user,i)}}>edit</button></td>
                    <td><button type="button" onClick={()=>{this.deleteuser(i)}}>delete</button></td></tr>
                    })}
                </tbody>
        </table>
        {/* {this.state.array.map(function (user){
            return <ul>
                <li>{user.fname}</li>
                <li>{user.lname}</li>
                <li>{user.email}</li>
            </ul>
        })}       */}
        </div>
        
    }
}