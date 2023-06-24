import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    fetchPortfolios();
  }, []);

  const fetchPortfolios = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };
      const response = await axios.get("http://localhost:3000/api/portfolios", { headers });
      setPortfolios(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Welcome from Dashboard</h1>
      <Link to="/portfolio/create">Create a new Portfolio</Link>

      <h2>Portfolios:</h2>
      {portfolios.map((portfolio) => (
        <div key={portfolio.id}>
          <Link to={`/portfolio/${portfolio.id}`}>{portfolio.name}</Link>
          <p>{portfolio.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
