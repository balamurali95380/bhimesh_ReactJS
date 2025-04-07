import { Component } from "react";



export default class Registartion extends Component {
    constructor(props) {
        super(props)
        this.state={
            user:{
                fname:"",
                lname:"",
                email:"",
                password:"",
            },
        }
    }
    handlechange=(e)=>{
        var newusr={...this.state.user}
        newusr[e.target.name]=e.target.value;
        this.setState({user:newusr})
    }
    render() {
        return <div class="container">
            <div class="row">
                <div class="col">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Firstname</label>
                            <input type="text" class="form-control" name="fname" value={this.state.fname} onChange={this.handlechange} />

                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Lastname</label>
                            <input type="text" class="form-control" name="lname" value={this.state.lname} onChange={this.handlechange} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Email address</label>
                            <input type="email" class="form-control" name="email" value={this.state.email} onChange={this.handlechange} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" name="password" value={this.state.password} onChange={this.handlechange} />
                        </div>

                        <button type="submit" class="btn btn-primary text-center">Submit</button>
                    </form>
                </div>

            </div>
        </div>

    }
}


