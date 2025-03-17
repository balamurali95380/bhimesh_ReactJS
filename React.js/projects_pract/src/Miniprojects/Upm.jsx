import { Component } from "react";
import axios from "axios"
import Upmform from "./Upmform";
import Upmtable from "./Upmtable";

export default class Upm extends Component {
    constructor() {
        super()
        this.state = {
            person: {
 
                id:"",
                name: "",
                email:"",
                role:"",
                preferences:"",
            },
            Upm: [],
            inx: null,
        }
    }
    event = (e) => {
        var usr = { ...this.state.person }
        usr[e.target.name] = e.target.value
        this.setState({ person: usr })
    }

    serverdata=()=>{
        axios.get("http://localhost:3000/Upm").then((response)=>{
                this.setState({Upm:response.data})
            })
        } 


    
    add = () => {
        axios.post("http://localhost:3000/Upm",this.state.person).then(()=>{
                this.serverdata()
                this.clearUpm()
            })
    }
    update = () => {
        axios.put("http://localhost:3000/Upm/"+this.state.Upm[this.state.inx].id,this.state.person).then(()=>{
                this.serverdata()
                this.setState({inx:null})
                this.clearUpm()
            })
         }
    edit = (val, i) => { 
        this.setState({person:val,inx:i})
    }
    delete = (val) => {
        axios.delete("http://localhost:3000/Upm/"+val.id).then(()=>{
            this.serverdata()
        })
        
     }
    clearUpm(){
        this.setState({ person: {
 
            id:"",
            name: "",
            email:"",
            role:"",
            preferences:"",
        },})
    }
    render() {
        return <div>
           <Upmform  person={this.state.person}
            add={this.add}
            update={this.update}
            event={this.event}
            inx={this.state.inx}/>
            <hr />
           <Upmtable Upm={this.state.Upm}
            edit={this.edit}
            delete={this.delete}/>
        </div>
    }
    componentDidMount() {
        this.serverdata();
    }
}
