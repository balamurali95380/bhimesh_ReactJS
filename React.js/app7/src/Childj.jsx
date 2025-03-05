import { Component } from "react";

export class Childj extends Component{
    render(){
        return <div>
            <ul>
                <li>{this.props.all.address.geolocation.lat}</li>
                <li>{this.props.all.address.geolocation.long}</li>
                <li>{this.props.all.address.city}</li>
                <li>{this.props.all.address.street}</li>
                <li>{this.props.all.address.number}</li>
                <li>{this.props.all.address.zipcode}</li>
                <li>{this.props.all.id}</li>
                <li>{this.props.all.email}</li>
                <li>{this.props.all.username}</li>
                <li>{this.props.all.password}</li>
                <li>{this.props.all.name.firstname}</li>
                <li>{this.props.all.name.lastname}</li>
                <li>{this.props.all.phone}</li>
                <li>{this.props.all.__v}</li>

            </ul>
        </div>
    }
}