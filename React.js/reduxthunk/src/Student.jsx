import React,{ Component } from "react";
import { connect } from "react-redux";
import { addStudent, deleteStudent, getstudentfromserver, updateStudent } from "./Action";

class Student extends Component{
    constructor(props){
        super(props)
        this.state={
            students:{
                fname:"",
                lname:"",
                email:"",
                password:"",
            },
            inx:null
        }
    }
    handleevent=(e)=>{
        const newstd={...this.state.students}
        newstd[e.target.name]=e.target.value
        this.setState({students:newstd})
    }
    addstudent=()=>{
        this.props.dispatch(addStudent(this.state.students))
    }
    deletestudent=(std)=>{
        this.props.dispatch(deleteStudent(std))
    }
    
    
    
    editstudent=(std, i) => {
        this.setState({ students:std, inx: i });}
    
        updatestudent = () => {
           
            this.props.dispatch(updateStudent(this.state.students));
    
        this.setState({
          students: {
            fname: "",
            lname: "",
            email: "",
            password: "",
          },
          inx: null,
        });
    }
    componentDidMount(){
        this.props.dispatch(getstudentfromserver());
    }


    render() {
        return (<div class="container text-center">
            <form action="">
                <label htmlFor="">First name:</label>
                <input type="text" name="fname" value={this.state.students.fname} onChange={this.handleevent} />{""}
                <br /><label htmlFor="">Last name:</label>
                <input type="text" name="lname" value={this.state.students.lname} onChange={this.handleevent} />{""}
                <br /><label htmlFor="">Email:</label>
                <input type="text" name="email" value={this.state.students.email} onChange={this.handleevent} />{""}
                <br /><label htmlFor="">Password:</label>
                <input type="text" name="password" value={this.state.students.password} onChange={this.handleevent} />{""}
                <br />{this.state.inx === null ? <button type="button" class="btn btn-primary"style={{marginTop:"10px"}}  onClick={this.addstudent}>add student</button> : <button type="button" class="btn btn-success" onClick={this.updatestudent}>update student</button>}
            </form>
            <hr />
            <table border={2} class="container text-center">
                <thead><tr>
                    <th>fname</th>
                    <th>lname</th>
                    <th>email</th>
                    <th>password</th>
                    <th>id</th>
                    <th>edit</th>
                    <th>delete</th></tr></thead>
                <tbody>
                    {this.props.students.map((std, i) => {
                        return <tr key={i}>
                            <td>{std.fname}</td>
                            <td>{std.lname}</td>
                            <td>{std.email}</td>
                            <td>{std.password}</td>
                            <td>{std.id}</td>
                            <td><button type="button" class="btn btn-warning"  onClick={() => { this.editstudent(std, i) }}>Edit</button></td>
                            <td><button type="button" class="btn btn-danger" onClick={() => { this.deletestudent(std) }}>Delete</button></td>
                        </tr>
                    })}


                </tbody>
            </table>


        </div>)
    }

}
function mapStateToProps(state){
    return state;
}
export default connect(mapStateToProps)(Student)