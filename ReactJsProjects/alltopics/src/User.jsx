// import { Component } from "react"

// export default class User extends Component{
//     constructor(){
//         super()
//         this.state={
//             person:{
//                 fname:"bhimesh",
//             },
//             User:[],
//     }}
//     getuserdata=()=>{
     
//         axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
//             this.setState({ User: response.data })
//         })
//     }

//     }
//     // render(){
//     //     return (<div>               <h1>{this.state.person.fname}</h1>
//     //     <table>
//     //     <thead>
//     //             <tr>
//     //                 <th>name</th>
                   
//                 </tr>
//             </thead>
//             <tbody>
//                 {this.state.User.map((std, i) => {
//                     return (<tr key={i}>
//                         <td>{std.name}</td>
                   
//                     </tr>
//                     )
//                 })}

//             </tbody>

//         </table>
            
//             </div>)
        
//     }
// // componentdid(){
// //         this.getuserdata()
// //     }
