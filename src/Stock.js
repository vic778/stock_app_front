import React from "react";
import Plot from 'react-plotly.js';

class Stock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartYValues: [],
      symbol: '', // New state to hold the symbol value
    };
  }

  componentDidMount() {
    this.fetchStock();
  }

  fetchStock() {
    const { symbol } = this.state;
    const defaultSymbol = "AAPL";
    const API_Call = `http://localhost:3000/api/home?symbol=${symbol || defaultSymbol}`;
  
    fetch(API_Call)
      .then(response => response.json())
      .then(data => {
        const stockChartXValues = Object.keys(data.data.stockChartXValues);
        const stockChartYValues = Object.values(data.data.stockChartYValues);
  
        this.setState({
          stockChartXValues,
          stockChartYValues
        });
      })
      .catch(error => {
        console.log('Error fetching stock data:', error);
      });
  }  

  handleSymbolChange = (event) => {
    this.setState({ symbol: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.fetchStock();
  };

  render() {
    return (
      <div className="stock-container">
        <h1>Stock Market</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.symbol}
            onChange={this.handleSymbolChange}
            placeholder="Enter a stock symbol"
          />
          <button type="submit">Fetch Stock</button>
        </form>
        <Plot
          data={[
            {
              x: this.state.stockChartXValues,
              y: this.state.stockChartYValues,
              type: 'scatter',
              mode: 'lines+markers',
              marker: { color: 'red' },
            },
          ]}
          layout={{ width: 720, height: 440, title: 'A Fancy Plot' }}
        />
      </div>
    );
  }
}

export default Stock;
