import React from "react";
import './Home.css';
const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to the Transaction Monitoring System</h1>
            <p>Monitor your transactions and stay informed...</p>
            <div className="features">
                <div className="feature-1">
                    <h2>Real-time Updates</h2>
                    <p>Stay up-to-date with real-time Transaction data.</p>
                </div>
                <div className="feature-2">
                    <h2>Transaction History</h2>
                    <p>View your transaction history and search for specific transaction.</p>
                </div>
            </div>
        </div>
    );
};
export default Home;