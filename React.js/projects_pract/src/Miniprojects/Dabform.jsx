import { Component } from "react";


export default class Dabform extends Component {
    render() {
        return <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">id</label>
                    <input type="text" className="form-control" name="id"  value={this.props.address.id} onChange={this.props.event} />{""}</div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">name</label>
                    <input type="text" className="form-control" name="name" value={this.props.address.name} onChange={this.props.event} />{""}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email" value={this.props.address.email} onChange={this.props.event} />{""}

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">phone</label>
                    <input type="text" className="form-control" name="phone"  value={this.props.address.phone} onChange={this.props.event} />{""}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">address</label>
                    <input type="text" className="form-control" name="address" value={this.props.address.address} onChange={this.props.event} />{""}
                </div>
                {this.props.inx === null ? (<button type="button" onClick={this.props.add} className="btn btn-primary">add</button>)
                    : (<button type="button" onClick={this.props.update} className="btn btn-primary">update</button>)}


            </form>
        </div>
    }

}