import { Component } from "react";
import axios from "axios"
import Ecartform from "./Ecartfrm";
import Ecarttale from "./Ecarttale";

export default class Ecartmanagement extends Component {
    constructor() {
        super()
        this.state = {
            person: {
                id:"",
                name: "",
                price:"",
                quantity:"",
                totalprice:"",
            },
            Ecart: [],
            inx: null,
        }
    }
    event = (e) => {
        var usr = { ...this.state.person }
        usr[e.target.name] = e.target.value
        this.setState({ person: usr })
    }

    serverdata=()=>{
        axios.get("http://localhost:3000/Ecart").then((response)=>{
                this.setState({Ecart:response.data})
            })
        } 


    
    add = () => {
        axios.post("http://localhost:3000/Ecart",this.state.person).then(()=>{
                this.serverdata()
                this.clearEcart()
            })
    }
    update = () => {
        axios.put("http://localhost:3000/Ecart/"+this.state.Ecart[this.state.inx].id,this.state.person).then(()=>{
                this.serverdata()
                this.setState({inx:null})
                this.clearEcart()
            })
         }
    edit = (val, i) => { 
        this.setState({person:val,inx:i})
    }
    delete = (val) => {
        axios.delete("http://localhost:3000/Ecart/"+val.id).then(()=>{
            this.serverdata()
        })
        
     }
    clearEcart(){
        this.setState({person: {
            id:"",
            name: "",
            price:"",
            quantity:"",
            totalprice:"",
        },})
    }
    render() {
        return <div>
            <Ecartform person={this.state.person}
                            event={this.event} 
                            add={this.add}     
                            inx={this.state.inx}
                            update={this.update}/>

      <Ecarttale Ecart={this.state.Ecart}
                            edit={this.edit}
                            delete={this.delete} />
            
        </div>
    }
    componentDidMount() {
        this.serverdata();
    }
}
