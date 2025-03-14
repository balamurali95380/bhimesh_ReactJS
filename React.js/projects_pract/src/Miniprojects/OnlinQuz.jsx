import { Component } from "react";
import axios from "axios"
import Onlinefrm from "./Onlinefrm";
import Onlintble from "./Onlintble";

export default class OnlinQuz extends Component {
    constructor() {
        super()
        this.state = {
            person: {
                id:"",
                question: "",
                options:"",
                correctAnswer:"",
                score:"",
            },
            Quiz: [],
            inx: null,
        }
    }
    event = (e) => {
        var usr = { ...this.state.person }
        usr[e.target.name] = e.target.value
        this.setState({ person: usr })
    }

    serverdata=()=>{
        axios.get("http://localhost:3000/Quiz").then((response)=>{
                this.setState({Quiz:response.data})
            })
        } 


    
    add = () => {
        axios.post("http://localhost:3000/Quiz",this.state.person).then(()=>{
                this.serverdata()
                this.clearQuiz()
            })
    }
    update = () => {
        axios.put("http://localhost:3000/Quiz/"+this.state.Quiz[this.state.inx].id,this.state.person).then(()=>{
                this.serverdata()
                this.setState({inx:null})
                this.clearQuiz()
            })
         }
    edit = (val, i) => { 
        this.setState({person:val,inx:i})
    }
    delete = (val) => {
        axios.delete("http://localhost:3000/Quiz/"+val.id).then(()=>{
            this.serverdata()
        })
        
     }
    clearQuiz(){
        this.setState({ person: {
            id:"",
            question: "",
            options:"",
            correctAnswer:"",
            score:"",
        },})
    }
    render() {
        return <div>
          <Onlinefrm  person={this.state.person}
            add={this.add}
            update={this.update}
            event={this.event}
            inx={this.state.inx}/>
            <hr />
           <Onlintble Quiz={this.state.Quiz}
            edit={this.edit}
            delete={this.delete}/>
        </div>
    }
    componentDidMount() {
        this.serverdata();
    }
}
