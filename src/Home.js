import React from "react";
import { Link } from "react-router-dom";
import Stock from "./Stock";
import "./App.css";

const Home = () => {
  const currentUser = localStorage.getItem("user");

  return (
    <div>
      <nav className="navbar"> {/* Apply the "navbar" CSS class */}
        <Link to="/" className="logo">
          Logo
        </Link>
        <div className="navLinks">
          {currentUser ? (
            <>
              <Link to="/portfolio/create" className="link">
                Create Portfolio
              </Link>
              <Link to="/logout" className="link">
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/portfolio/create" className="link">
                Create Portfolio
              </Link>
              <Link to="/login" className="link">
                Login
              </Link>
              <Link to="/register" className="link">
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
      <Stock />
    </div>
  );
};

export default Home;
