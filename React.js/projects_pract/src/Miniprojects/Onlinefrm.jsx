import { Component } from "react";

export default class Onlinefrm extends Component{
    render(){

        return <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">id</label>
                    <input type="text" className="form-control" name="id" id="" value={this.props.person.id} onChange={this.props.event}/>{""}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">question</label>
                    <input type="text"  className="form-control" name="question" id="" value={this.props.person.question} onChange={this.props.event}/>{""}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">options</label>
                    <input type="text" className="form-control"  name="options" id="" value={this.props.person.options} onChange={this.props.event} />{""}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">correctAnswer</label>
                    <input type="text" className="form-control" name="correctAnswer" id="" value={this.props.person.correctAnswer}  onChange={this.props.event} />{""}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">score</label>
                    <input type="text" className="form-control" name="score" id="" value={this.props.person.score} onChange={this.props.event} />{""}
                </div>
                {this.props.inx === null ? (<button type="button" className="btn btn-primary" onClick={this.props.add}>add</button>)
                    : (<button type="button" className="btn btn-primary" onClick={this.props.update}>update</button>)}
              
                
            </form>
           
        </div>
    }
}