import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate} from "react-router-dom";

const CreateInvestment = () => {
  const { id } = useParams();
  const [symbol, setSymbol] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [numberOfShares, setNumberOfShares] = useState("");

  const handleSymbolChange = (e) => {
    setSymbol(e.target.value);
  };

  const handlePurchasePriceChange = (e) => {
    setPurchasePrice(Number(e.target.value));
  };

  const handleNumberOfSharesChange = (e) => {
    setNumberOfShares(Number(e.target.value));
  };

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };
      const data = {
        symbol,
        purchase_price: purchasePrice,
        number_of_shares: numberOfShares
      };

      const response = await axios.post(`http://localhost:3000/api/portfolios/${id}/investments`, data, { headers });
      console.log(response.data);
      navigate(`/portfolio/${id}`)

      // Perform any actions upon successful investment creation.

    } catch (error) {
      console.log(error);

      // Handle investment creation error.
    }
  };

  return (
    <div>
      <h2>Create Investment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="symbol">Symbol:</label>
          <input type="text" id="symbol" value={symbol} onChange={handleSymbolChange} required />
        </div>
        <div>
          <label htmlFor="purchasePrice">Purchase Price:</label>
          <input type="number" id="purchasePrice" value={purchasePrice} onChange={handlePurchasePriceChange} required />
        </div>
        <div>
          <label htmlFor="numberOfShares">Number of Shares:</label>
          <input type="number" id="numberOfShares" value={numberOfShares} onChange={handleNumberOfSharesChange} required />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateInvestment;
