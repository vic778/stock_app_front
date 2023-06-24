import React from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div>
      <h1>Welcome from Portfolio</h1>
        <Link to="/portfolio/create">Create a new Portfolio</Link>
    </div>
  );
};

export default Portfolio;
