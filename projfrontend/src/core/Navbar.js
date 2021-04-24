import React from "react";
import { Link, withRouter } from "react-router-dom";

const style = (history, path) => {
  if (history.location.pathname === path) {   //history.location.pathname gives the current api the application is on
    return {
      color: "#FFFFFF",
    };
  } else {
    return {
      color: "#E21717",
    };
  }
};

function Navbar({ history }) {
  return (
    <div>
      <ul className="nav nav-tabs bg-dark">
        <li className="nav-item">
          <Link style={style(history, "/")} className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link style={style(history, "/cart")} className="nav-link" to="/cart">
            Cart
          </Link>
        </li>
        <li className="nav-item">
          <Link  style={style(history, "/Dashboard")}  className="nav-link" to="/Dashboard">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link  style={style(history, "/A.Dashboard")} className="nav-link" to="/A.Dashboard">
            A. Dashboard
          </Link>
        </li>
        <li  className="nav-item bg-warning">
          <Link  style={style(history, "/SignIn")} className="nav-link" to="/SignIn">
            Sign In
          </Link>
        </li>
        <li className="nav-item">
          <Link  style={style(history, "/SignUp")} className="nav-link" to="/SignUp">
            Sign Up
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default withRouter(Navbar);
