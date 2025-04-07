import { Component } from "react"
import React from "react";
import Userauth from "./Userauth";
// import withLoading from "./withLoading";
// import withAuthorization from "./withAuthorization";

// const Hoc1=(Wrappedprops)=>{

//      class Newss extends Component{
//         constructor(props) {
//             super(props);

//             this.state = {
//               count: 0,
//             };
//           }
//           increment = () => {
//             this.setState({ count: this.state.count + 1 });
//           };
//           decrement = () => {
//             this.setState({ count: this.state.count - 1 });
//           };
//           reset = () => {
//             this.setState({ count: 0 });
//           };
//           render(){
//             return (

//                 <Chdc1
//                   count={this.state.count}
//                   increment={this.increment}
//                   decrement={this.decrement}
//                   reset={this.reset}
//                 />


//               );
//           }

//      }
//   return Newss;

// };
// export default Hoc1;

// logging props:
// const Hoc2 = (Wrappedprops) => {
//     return class Newss extends Component{
//         constructor(props) {
//             super(props);

//             this.state = {
//                 name:"bhimesh",
//             }}

//     //   componentDidMount() {
//     //     console.log("Props:", this.props);
//     //   }

//     //   componentDidUpdate() {
//     //     console.log("Updated Props:", this.props);
//     //   }

//       render() {

//         return <Wrappedprops name={this.state.name} />;
//       }
//     };
//   };

//   export default Hoc2;
// loading data:
// const Hoc2 = (Dataload) => {
//   return class Newss extends Component {
//     constructor(props) {
//       super(props);

//       this.state = {
//         loading: true, data: "null"
//       }
//     }

//     load = () => {
//       setTimeout(() => this.setState({ loading:false, data: "Sample Data" }), 2000);
//     }



//     render() {
//       return <div>
//         <h1>data:{this.state.data}</h1>
//         <h1>load:{this.state.loading}</h1>
//         <Dataload data={this.state.data} Loading={this.state.loading} load={this.load} />
//       </div>
//         ;
//     }

//   };
// };

// export default Hoc2;


// export default App;
// {/* <Autorization></Autorization> */}
const Hoc2 = (Userauth) => {
  return class extends React.Component {
    render() {
      const { isAuthenticated, ...props } = this.props;
      if (!isAuthenticated) {
        return <div className="text-red-500 text-lg">Access Denied! Please log in.</div>;
      }
      return <Userauth {...props} />;
    }
  };
};

export default Hoc2;

