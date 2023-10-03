import React from 'react';
import Transaction from './ViewHistory';

const ViewHistoryList = ({ transactions }) => {
  return (
    <div className="transaction-list">
      {transactions.map((transaction, index) => (
        <Transaction key={index} {...transaction} />
      ))}
    </div>
  );
};

export default  ViewHistoryList;
