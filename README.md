# STOCK APP

> The Stock App application is designed to provide a user-friendly interface for managing investments, calculating profit and loss, and viewing historical performance metrics. It utilizes the backend API endpoints to interact with the database and perform the necessary calculations.
Components used:

  - Home
  - Stock
  - Register
  - Login
  - Dashboard
  - CRUD Portfolio
  - CRUD Investement
  
### Home
![img](https://github.com/vic778/stock_app/blob/master/app/assets/images/fron.png)

### Dashboard
 It displays all the portfolios especially the name and the description. You have to click on the name to be redirected to the portfolio.

![img](/images/dash.png)

### Portfolio Details
![img](/images/port.png)

It contains the name and the descriptions of a portfolio, it includes the investments of a portfolio with details such as the current price of the symbol in the market, some calculation of the gain and loss of the character based on the current price, and the initial price of share

### Deployment
 [Video](https://www.loom.com/share/25504df4e78a44d8b1a2d5caa4b71c98?sid=89cf883f-b4f1-4a6b-aa26-17878595dd0c)
## Built With

- React

### Backend
[Repo Link](https://github.com/vic778/stock_app)

![backend](https://github.com/vic778/stock_app/blob/master/app/assets/images/serv.png)


## Getting Started

Here are the steps to follow in order to get this project on your local computer.

### Prerequisites

`node v16.20 +`

### Setup

clone this repo by typing `git clone https://github.com/vic778/stock_app_front`

### Install

install the dependencies by typing `npm install`

### Usage

start the local server by running `npm start`


## Documentation
  User Registration and Login:

Users can create an account by providing their details and registering.
  - Once registered, users can log in to the application using their credentials.
  - The login process generates a token that will be used for subsequent API calls.

Portfolio Creation:

 - After logging in, users can create a new portfolio.
 - They can provide a name and an optional description for the portfolio.
 - Upon creation, the portfolio is associated with the logged-in user.

Investment Creation:

 - Users can add investments to their portfolios.
 - They need to provide details such as the security symbol or ticker, purchase price, number of shares, and purchase date.
 - When creating an investment, the user selects the portfolio to which it belongs.

Profit and Loss Calculation:

 - The application provides services to calculate the profit and loss of investments.
 - It takes into account the purchase price, current market data, and the number of shares.
 - The calculated profit and loss are displayed to the user.

Filtering and Historical Data:

 - Users can filter their investments based on various criteria such as a specific year.
 - The application fetches and displays the historical performance data for the selected investments.
 - CSV File Download:


## Author

👤 **Victor Barh**

- GitHub: [@Vvic778](https://github.com/vic778)
- Twitter: [@victoirBarh](https://twitter.com/)
- LinkedIn: [LinkedIn](https://linkedin.com/in/victoir-barh)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

 N/A

## 📝 License

This project is [MIT](lic.url) licensed.
