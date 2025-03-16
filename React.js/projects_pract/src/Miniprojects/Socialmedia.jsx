import { Component } from "react";
import axios from "axios"
import Socialfrm from "./Socialfrm";
import Socialtb from "./Socialtb";

export default class Socialmedia extends Component {
    constructor() {
        super()
        this.state = {
            person: {
                id: "",
                content: "",
                likes: "",
                comments: "",
                author: "",
            },
            social: [],
            inx: null,
        }
    }
    event = (e) => {
        var usr = { ...this.state.person }
        usr[e.target.name] = e.target.value
        this.setState({ person: usr })
    }

    serverdata = () => {
        axios.get("http://localhost:3000/social").then((response) => {
            this.setState({ social: response.data })
        })
    }



    add = () => {
        axios.post("http://localhost:3000/social", this.state.person).then(() => {
            this.serverdata()
            this.clearsocial()
        })
    }
    update = () => {
        axios.put("http://localhost:3000/social/" + this.state.social[this.state.inx].id, this.state.person).then(() => {
            this.serverdata()
            this.setState({ inx: null })
            this.clearsocial()
        })
    }
    edit = (val, i) => {
        this.setState({ person: val, inx: i })
    }
    delete = (val) => {
        axios.delete("http://localhost:3000/social/" + val.id).then(() => {
            this.serverdata()
        })

    }
    clearsocial() {
        this.setState({
            person: {
                id: "",
                content: "",
                likes: "",
                comments: "",
                author: "",
            },
        })
    }
    render() {
        return <div>             <Socialfrm  person={this.state.person}
                        add={this.add}
                        update={this.update}
                        event={this.event}
                        inx={this.state.inx}/>
                        <hr />
                       <Socialtb social={this.state.social}
                        edit={this.edit}
                        delete={this.delete}/>
                    </div>    

    
    }
    componentDidMount() {
        this.serverdata();
    }
}
