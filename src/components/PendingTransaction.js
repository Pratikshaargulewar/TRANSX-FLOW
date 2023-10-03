import React from 'react';
import './PendingTransaction.css'; 

const PendingTransaction = () => {
  const transactions = [
    { id: 1, description: 'Payment from Aansk Gotmare', timestamp: '2023-10-01 09:30 AM' },
    { id: 2, description: 'Payment from Swatik bore', timestamp: '2023-09-30 02:15 PM' },
    { id: 3, description: 'Admin section for Stationary ', timestamp: '2023-09-29 05:45 PM' },
    { id: 4, description: 'Payment from Darshan Nimje', timestamp: '2023-09-15 09:30 AM' },
    { id: 5, description: 'Clearance Approval of Pratik Sharma ', timestamp: '2023-09-07 02:15 PM' },
    { id: 6, description: 'Mess Charge of Guarav Zade ', timestamp: '2023-09-01 05:45 PM' },
    { id: 7, description: 'Payment to admin for maintainence fees ', timestamp: '2023-08-25 09:30 AM' },
    { id: 8, description: 'Payment from Luv Gupta', timestamp: '2023-08-24 02:15 PM' },
    { id: 9, description: 'Payment to Aman Singh ', timestamp: '2023-08-12 05:45 PM' },
    { id: 10, description: 'Payment to Admin Section  ', timestamp: '2023-08-11 09:30 AM' },
    { id: 11, description: 'Payment from Swatik bore', timestamp: '2023-08-10 02:15 PM' },
    { id: 12, description: 'Admin section for Stationary ', timestamp: '2023-09-29 05:45 PM' },
    { id: 13, description: 'Payment from Darshan Nimje', timestamp: '2023-09-15 09:30 AM' },
    { id: 14, description: 'Clearance Approval of Pratik Sharma ', timestamp: '2023-09-07 02:15 PM' },
    { id: 15, description: 'Mess Charge of Guarav Zade ', timestamp: '2023-09-01 05:45 PM' },
    { id: 16, description: 'Payment to admin for maintainence fees ', timestamp: '2023-08-25 09:30 AM' },
    { id: 17, description: 'Payment from Luv Gupta', timestamp: '2023-08-24 02:15 PM' },
    { id: 18, description: 'Payment to Aman Singh ', timestamp: '2023-08-12 05:45 PM' },
  ];

  return (
    <div className="Pending-transaction">
      <h2>Pending Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id} className="transaction-item">
            <div className="transaction-description">{transaction.description}</div>
            <div className="transaction-timestamp">{transaction.timestamp}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PendingTransaction;
