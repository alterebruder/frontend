import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Done from "./components/auth/Done";
import Dashboard from "./components/Dashboard";


class App extends Component {
   state = {
     selectedFile: null
   }

   fileSelectedHandler = event => {
     this.setState({
       selectedFile: event.target.files[0],
       //passes file to state
       loaded: 0,
        //event.target.files: array of all stored files
        //target.files[0]: holds actual file uploaded and details
   })
  }
   constructor(props) {
     super(props);
      this.state = {
        selectedFile: null
      }
   }

   onClickHandler = () => {
     const data = new FormData()
     data.append('file', this.state.selectedFile)
   }

   render() {
     return (
      //  <div className="App">
      //    <header className="App=header">
      //      <h1>Altere Bruder</h1>
      //      <img src={logo} className="App-logo" alt="logo" />
      //      <p>
      //        The "Good" Big Brother
      //      </p>
      //    </header>
      //    <input type="file" name="file" onChange={this.fileSelectedHandler}/>
      //    <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
      //  </div>
        <Router>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/done" component={Done} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Router>
    );
  }
 
}
export default App;






    //    <div className="col-md-6">
    //    <div className="card">
    //      <div className="card-header">
    //        Multiple Image Upload Preview
    //      </div>
    //      <div className="card-body">
    //        <MultipleImageUploadComponent />
    //      </div>
    //    </div>
    //  </div>
 


//$ npm install axios --save
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


