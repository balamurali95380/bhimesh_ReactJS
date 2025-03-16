import { Component } from "react";

export default class Upmform extends Component {
    render() {
        return <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">id</label>
                    <input type="text" className="form-control" name="id" id="" value={this.props.person.id} onChange={this.props.event} />{""}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">name</label>
                    <input type="text" className="form-control" name="name" id="" value={this.props.person.name} onChange={this.props.event} />{""}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">email</label>
                    <input type="text" className="form-control" name="email" id="" value={this.props.person.email} onChange={this.props.event} />{""}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">role</label>
                    <input type="text" className="form-control" name="role" id="" value={this.props.person.role} onChange={this.props.event} />{""}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">preferences</label>
                    <input type="text" className="form-control" name="preferences" id="" value={this.props.person.preferences} onChange={this.props.event} />{""}
                </div>
                {this.props.inx === null ? (<button type="button" className="btn btn-primary" onClick={this.props.add}>add</button>)
                    : (<button type="button" className="btn btn-primary" onClick={this.props.update}>update</button>)}


            </form>
        </div>
    }
}