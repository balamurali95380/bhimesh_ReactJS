import { Component } from "react";

export default class LMSfrm extends Component{
    render(){
       
        return <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">id</label>
                    <input type="text" className="form-control" name="id" id="" value={this.props.person.id} onChange={this.props.event}/>{""}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">title</label>
                    <input type="text"  className="form-control" name="title" id="" value={this.props.person.title} onChange={this.props.event}/>{""}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">author</label>
                    <input type="text" className="form-control"  name="author" id="" value={this.props.person.author} onChange={this.props.event} />{""}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">isAvailable</label>
                    <input type="text" className="form-control" name="isAvailable" id="" value={this.props.person.isAvailable} onChange={this.props.event} />{""}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">borrower</label>
                    <input type="text" className="form-control" name="borrower" id="" value={this.props.person.borrower} onChange={this.props.event} />{""}
                </div>
                {this.props.inx === null ? (<button type="button" className="btn btn-primary" onClick={this.props.add}>add</button>)
                    : (<button type="button" className="btn btn-primary" onClick={this.props.update}>update</button>)}
              
                
            </form>
        </div>
    }
}