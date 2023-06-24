import React from "react";
import { Link } from "react-router-dom";
import Stock from "./Stock";

const Home = () => {
  return (
    <div>
      <h1>Welcome from Home</h1>
      <Link to="/register">Register</Link>
      <br />
      <Link to="/login">Login</Link>
      <Stock></Stock>
    </div>
  );
};

export default Home;
