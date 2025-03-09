import { Component } from "react";

export default class Crud2 extends Component{
    constructor(){
        super()
        this.state={
            person:{fname:"",lname:"",email:""},
            arr:[],
            indx1:null
        }
    }
    handleevent=(e)=>{
        var ne={...this.state.person}
        ne[e.target.name]=e.target.value;
        this.setState({person:ne})
    }
    adduser=()=>{
        var ar=[...this.state.arr]
        ar.push(this.state.person)
        this.setState({arr:ar})
       this.clearform()
    }
    deletetuser(i){
        var ar1=[...this.state.arr]
        ar1.splice(i,1)
        this.setState({arr:ar1})
    }
     edituser(val,i){
        this.setState({person:val,indx1:i})
     }
     clearform(){
        this.setState( {person:{fname:"",lname:"",email:""}})
     }
     updateUser=()=>{
        var ar2=[...this.state.arr]
        ar2[this.state.indx1]=this.state.person
        this.setState({arr:ar2})
        this.clearform()
     }
    render(){
        return <div>
        <form action="">
   <label htmlFor="">fname</label>
        <input type="text" name="fname" id="" value={this.state.person.fname} onChange={this.handleevent}/>{""}
        <br />
        <label htmlFor="">lname</label>
        <input type="text" name="lname" id="" value={this.state.person.lname} onChange={this.handleevent}/>{""}
        <br />
        <label htmlFor="">email</label>
        <input type="text" name="email" id="" value={this.state.person.email} onChange={this.handleevent}/>{""}
        <br />
        {this.state.indx1===null?<button type="button" onClick={this.adduser}>add user</button>:
        (<button type="button" onClick={this.updateUser}> update user</button>)}
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
                {this.state.arr.map((val,i)=>{
                    return (           <tr key={i}>
            <td>{val.fname}</td>
            <td>{val.lname}</td>
            <td>{val.email}</td>
            <td><button type="button" onClick={()=>this.edituser(val,i)}>edit</button></td>
            <td><button type="button" onClick={()=>this.deletetuser(i)}>delete</button></td>
            </tr>)})}

                
            </tbody>
        </table>
        </div>
    }

}