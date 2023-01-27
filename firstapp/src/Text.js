import React, { Component } from 'react'
import "./Text.css";
// const Text =() =>{
//   return (
//     <div>
//       <h1>Hello , I am mansi</h1>
//     </div>
//   )
// }

// render()
// styleing method
//inline CsS in react
//Component is reuseable peice of code

// class Text extends Component {
//     render() {
//         return (
//             <div>
//                 <h1 id='tested' style={{
//                     color: "red",
//                 }}>Hello,I am mansi</h1>
//             </div>
//         );
//     }
// }


// we can not write if else condition inside jsx
class Text extends Component {
    state ={
        isLoggedIn: false,
    };

    render(){
      return(
        <div>
            {!this.state.isLoggedIn ? (
            <h1>You are not Logged In!</h1>):
            (<h1>Congratulations, you are logged in!</h1>)}

            <button onClick={(e) => this.setState({ isLoggedIn: true })}>Login</button>
        </div>
      );
    }
}



export default Text;
