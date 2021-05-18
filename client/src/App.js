import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Login from "./components/Login"
import Main from "./components/Main"
import Profile from "./components/Profile"
import "./App.css";
// import { Router } from "react-router";


function App() {
  return (
    <div>
      <Router>
      
      <Login />
      <Main>
        <div>
        <Route exact path="/Profile" component={Profile} />
        </div>
        
        </Main  >
      </Router>
     
    </div>
  );
}

export default App;
