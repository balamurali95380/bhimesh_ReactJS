import { Component } from "react";

class List extends Component{
    render(){
        return <div>
            <ul><li>item1</li>
            <li>item2</li>
            <li>item3</li>
            <li>item4</li></ul>
            <hr />
            <ol>
            <li>item1</li>
            <li>item2</li>
            <li>item3</li>
            <li>item4</li>
            </ol>
        </div> 
    }
}
export default List;