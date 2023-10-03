import React, { Component } from 'react';
import './TransactionPage.css';
class TransactionPage extends Component {
  constructor(props) {
    super(props);

    // Initialize the state to hold the amount and reason
    this.state = {
      amount: '',
      reason: '',
    };
  }

  handleAmountChange = (event) => {
    this.setState({ amount: event.target.value });
  }

  handleReasonChange = (event) => {
    this.setState({ reason: event.target.value });
  }

  handleRequestTransaction = () => {
    // Implement your logic here for handling the transaction request
    // You can send the 'amount' and 'reason' to an API or perform any other action

    // For this example, we'll just log the details to the console
    console.log('Amount: ', this.state.amount);
    console.log('Reason: ', this.state.reason);
  }

  render() {
    return (
      <div className="container">
      <div className="box">
        <h1>Propose a transaction for voting</h1>
        <p>
        <div className='amount-transaction'>
          <label htmlFor="amount">Amount:</label>
          <input
            type="text"
            id="amount"
            value={this.state.amount}
            onChange={this.handleAmountChange}
          />
        </div>
        </p>
        <p>
        <div className='reason-transaction'>
          <label htmlFor="reason">Reason for Transaction:</label>
          <input
            type="text"
            id="reason"
            value={this.state.reason}
            onChange={this.handleReasonChange} />
        </div>
        </p>
        <button className ="request-button"onClick={this.handleRequestTransaction}>Request Transaction</button>
      </div>
      </div>
    );
  }
}

export default TransactionPage;
