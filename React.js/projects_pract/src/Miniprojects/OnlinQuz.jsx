import { Component } from "react";
import axios from "axios"

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
            <form action="">
                <label htmlFor="">id</label>
                <input type="text" name="id" id="" value={this.state.person.id} onChange={this.event} />{""}
                <label htmlFor="">question</label>
                <input type="text" name="question" id="" value={this.state.person.question} onChange={this.event} />{""}
                <label htmlFor="">options</label>
                <input type="text" name="options" id="" value={this.state.person.options} onChange={this.event} />{""}
                <label htmlFor="">correctAnswer</label>
                <input type="text" name="correctAnswer" id="" value={this.state.person.correctAnswer} onChange={this.event} />{""}
                <label htmlFor="">score</label>
                <input type="text" name="score" id="" value={this.state.person.score} onChange={this.event} />{""}
                {this.state.inx === null ? (<button type="button" onClick={this.add}>add</button>)
                    : (<button type="button" onClick={this.update}>update</button>)}
            </form>
            <hr />
            <table border={1}>
                <thead><tr><th>id</th>
                    <th>question</th>
                    <th>options</th>
                    <th>correctAnswer</th>
                    <th>score</th>
                    <th>edit</th>
                    <th>delete</th></tr></thead>
                <tbody>
                    {this.state.Quiz.map((val, i) => {
                        return <tr key={val.id}><td>{val.id}</td>
                            <td>{val.question}</td>
                            <td>{val.options}</td>
                            <td>{val.correctAnswer}</td>
                            <td>{val.score}</td>
                            <td><button type="button" onClick={() => this.edit(val, i)}>edit</button></td>
                            <td><button type="button" onClick={() => this.delete(val, i)}>delete</button></td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    }
    componentDidMount() {
        this.serverdata();
    }
}
