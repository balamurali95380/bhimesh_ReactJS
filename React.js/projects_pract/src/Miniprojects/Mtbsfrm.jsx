import { Component } from "react";

export default class Mtbsfrm extends Component{
    render(){
   
        return <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">userID</label>
                    <input type="text" className="form-control" name="userID" id="" value={this.props.person.userID} onChange={this.props.event}/>{""}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">seatNumber</label>
                    <input type="text"  className="form-control" name="seatNumber" id="" value={this.props.person.seatNumber} onChange={this.props.event}/>{""}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">isBooked</label>
                    <input type="text" className="form-control"  name="isBooked" id="" value={this.props.person.isBooked}  onChange={this.props.event} />{""}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">category</label>
                    <input type="text" className="form-control"  name="category" id="" value={this.props.person.category} onChange={this.props.event} />{""}
                </div>
                {this.props.inx === null ? (<button type="button" className="btn btn-primary" onClick={this.props.add}>add</button>)
                    : (<button type="button" className="btn btn-primary" onClick={this.props.update}>update</button>)}
              
                
            </form>
        </div>
    }
}