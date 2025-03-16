import { Component } from "react";

export default class Invmsfrm extends Component{
    render(){
        
        return <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">id</label>
                    <input type="text" className="form-control" name="id" id="" value={this.props.person.id} onChange={this.props.event}/>{""}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">name</label>
                    <input type="text"  className="form-control" name="name" id="" value={this.props.person.name} onChange={this.props.event}/>{""}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">quantity</label>
                    <input type="text" className="form-control"  name="quantity" id="" value={this.props.person.quantity} onChange={this.props.event} />{""}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">price</label>
                    <input type="text" className="form-control" name="price" id="" value={this.props.person.price} onChange={this.props.event} />{""}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">category</label>
                    <input type="text" className="form-control" name="category" id="" value={this.props.person.category} onChange={this.props.event} />{""}
                </div>
                {this.props.inx === null ? (<button type="button" className="btn btn-primary" onClick={this.props.add}>add</button>)
                    : (<button type="button" className="btn btn-primary" onClick={this.props.update}>update</button>)}
              
                
            </form>
        </div>
    }
}