import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ShowPortfolio = () => {
  const { id } = useParams();
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    fetchPortfolio();
  }, [id]);

  const fetchPortfolio = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };
      const response = await axios.get(`http://localhost:3000/api/portfolios/${id}`, { headers });
      setPortfolio(response.data);
      console.log(response.data.portfolio);
    } catch (error) {
      console.log(error);
    }
  };

  if (!portfolio) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Portfolio Details</h2>
      <h3>Name: {portfolio.portfolio.name}</h3>
      <p>Description: {portfolio.portfolio.description}</p>

      <h2>Investment Data</h2>
      {portfolio.historical_data[1].map((data, index) => (
        <div key={index}>
          <h3>Symbol: {data.symbol}</h3>
          <p>Purchase Price: {data.purchase_price}</p>
          <p>Number of Shares: {data.number_of_shares}</p>
          <p>Total Investment: {data.total_investment}</p>
          <p>Current Price: {data.current_price}</p>
          <p>Current Total Price: {data.current_total_price}</p>
          <p>Gain or Loss: {data.gain_or_loss}</p>
          <p>Percentage: {data.percentage}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowPortfolio;
