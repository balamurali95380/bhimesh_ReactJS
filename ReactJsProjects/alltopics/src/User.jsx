import { Component } from "react"
import axios from "axios"

export default class User extends Component{
    constructor(){
        super()
        this.state={
            person:{
                fname:"bhimesh",
            },
            User:[],
    }}
    getuserdata=()=>{
     
        axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
            this.setState({ User: response.data })
        })
    }
    render(){
        return<>
        <table>
            <thead>
                <tr>
                    <th>name</th>
                </tr>
               
            </thead>
            <tbody>
                {this.state.User.map((usr,i)=>{
                    return(<tr key={i}>
                        <td>{usr.name}</td>
                        </tr>)
                    })}
              
            </tbody>
        </table>
        
        </>
    }
    componentDidMount(){
        this.getuserdata()
    }

    }

