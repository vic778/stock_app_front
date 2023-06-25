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
    const pointerToThis = this;
    const API_key = 'PO87DAJBOBABOF2I';
    const API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=compact&apikey=${API_key}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];

    fetch(API_Call)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {

        for (var key in data['Time Series (Daily)']) {
          stockChartXValuesFunction.push(key);
          stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
        }

        pointerToThis.setState({
          stockChartXValues: stockChartXValuesFunction,
          stockChartYValues: stockChartYValuesFunction
        });
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
      <div>
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
