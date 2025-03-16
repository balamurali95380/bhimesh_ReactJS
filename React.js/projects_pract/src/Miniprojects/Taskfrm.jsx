import { Component } from "react";

export default class Taskfrm extends Component {
    render() {
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
                    <label htmlFor="exampleInputPassword1" className="form-label">description</label>
                    <input type="text" className="form-control"  name="description" id="" value={this.props.person.description} onChange={this.props.event} />{""}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">status</label>
                    <input type="text" className="form-control" name="status" id="" value={this.props.person.status} onChange={this.props.event} />{""}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">createdAt</label>
                    <input type="text" className="form-control" name="createdAt" id="" value={this.props.person.createdAt} onChange={this.props.event} />{""}
                </div>
                {this.props.inx === null ? (<button type="button" className="btn btn-primary" onClick={this.props.add}>add</button>)
                    : (<button type="button" className="btn btn-primary" onClick={this.props.update}>update</button>)}
              
                
            </form>
        </div>
    }
}