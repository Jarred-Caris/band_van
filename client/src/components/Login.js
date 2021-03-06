import React from "react";
import logo from "../assets/logo.PNG";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

// import Dropdowns from "react-bootstrap/Dropdowns"
// import { Link } from "react-router-dom";

const Login = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  

  return (
    <div className="login">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className="logo" src={logo} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/Profile"
                  className={
                    window.location.pathname === "/Profile" ||
                    window.location.pathname === "/Profile"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  My Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Jam"
                  className={
                    window.location.pathname === "/Jam" ||
                    window.location.pathname === "/Jam"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Lets Jam
                </Link>
              </li>
            </ul>
          </div>

          {
            <div className="login-input">
              <div className="row">
                <div className="col col-lg-2">
                  {!isAuthenticated && (
                    <button
                      //type="button"
                      className="btn btn-dark"
                      onClick={() => loginWithRedirect()}
                    >
                      Login
                    </button>
                  )}
                </div>
              </div>
            </div>
          }

          <div className="login-input">
            <div className="row">
              <div className="col col-lg-2">
                {isAuthenticated && (
                  <button
                    //type="button"
                    className="btn btn-dark"
                    onClick={() => logout()}
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Login;
