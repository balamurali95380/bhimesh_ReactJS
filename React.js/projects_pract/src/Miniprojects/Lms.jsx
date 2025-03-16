import { Component } from "react";
import axios from "axios"
import LMSfrm from "./LMSfrm";
import Lmstab from "./Lmstab";

export default class Lms extends Component {
    constructor() {
        super()
        this.state = {
            person: {

                id:"",
                title: "",
                author:"",
                isAvailable:"",
                borrower:"",
            },
            Lms: [],
            inx: null,
        }
    }
    event = (e) => {
        var usr = { ...this.state.person }
        usr[e.target.name] = e.target.value
        this.setState({ person: usr })
    }

    serverdata=()=>{
        axios.get("http://localhost:3000/Lms").then((response)=>{
                this.setState({Lms:response.data})
            })
        } 


    
    add = () => {
        axios.post("http://localhost:3000/Lms",this.state.person).then(()=>{
                this.serverdata()
                this.clearLms()
            })
    }
    update = () => {
        axios.put("http://localhost:3000/Lms/"+this.state.Lms[this.state.inx].id,this.state.person).then(()=>{
                this.serverdata()
                this.setState({inx:null})
                this.clearLms()
            })
         }
    edit = (val, i) => { 
        this.setState({person:val,inx:i})
    }
    delete = (val) => {
        axios.delete("http://localhost:3000/Lms/"+val.id).then(()=>{
            this.serverdata()
        })
        
     }
    clearLms(){
        this.setState({ person: {

            id:"",
            title: "",
            author:"",
            isAvailable:"",
            borrower:"",
        },})
    }
    render() {
        return <div>
          <LMSfrm person={this.state.person}
                        event={this.event}
                        add={this.add}
                        inx={this.state.inx}
                        update={this.update} />
        
                    <Lmstab Lms={this.state.Lms}
                        edit={this.edit}
                        delete={this.delete} />
        </div>
    }
    componentDidMount() {
        this.serverdata();
    }
}
