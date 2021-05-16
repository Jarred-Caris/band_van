import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Login from "./components/Login"
import Main from "./components/Main"
import "./App.css";
// import { Router } from "react-router";


function App() {
  return (
    <div>
      {/* <Router> */}
      <Login />
      <Main />

      {/* </Router> */}
     
    </div>
  );
}

export default App;
