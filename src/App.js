// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import Login from './components/Login';
import Register from './components/Register';
import TransactionPage from './components/TransactionPage';
import ViewHistory from './components/ViewHistory';
import PendingTransaction from './components/PendingTransaction';
import ViewHistoryList from './components/ViewHistoryList';

const transactionsData = [
  {
    srNo: 1,
    name: 'John Doe',
    reason: 'Purchase',
    timestamp: '2023-10-02 10:00 AM',
    isPending: false,
  },
  {
    srNo: 2,
    name: 'Jane Smith',
    reason: 'Refund',
    timestamp: '2023-10-03 02:30 PM',
    isPending: true,
  },
  // Add more transactions here
];

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar/>
        {/* <ViewHistoryList transactions={transactionsData}/> */}

        <Routes>
        <Route exact path="/" Component={Home}/>
        <Route path="/login" Component={Login}/>
        <Route path="/register" Component={Register}/>
        <Route path="/transaction-page" Component={TransactionPage}/>
        <Route path="/viewhistory" Component={ViewHistory}/>
        <Route path="/pending-transaction" Component={PendingTransaction}/>
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
