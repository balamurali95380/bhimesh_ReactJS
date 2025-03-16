import { Component } from "react";
import axios from "axios"
import Taskfrm from "./Taskfrm";
import Tasktable from "./Tasktable";

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
            <Taskfrm 
            person={this.state.person}
            add={this.add}
            update={this.update}
            event={this.event}
            inx={this.state.inx} />
            
            <hr />
            <Tasktable Task={this.state.Task}
            edit={this.edit}
            delete={this.delete}/>
        </div>
    }
    componentDidMount() {
        this.serverdata();
    }
}
