import React from "react";
import { Link } from "react-router-dom";
import './NavigationBar.css';

const NavigationBar =() =>{
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li>
                    <Link to={"/login"}>Login</Link>
                </li>
                <li>
                    <Link to={"/register"}>Register</Link>
                </li>
                <li>
                    <Link to={"/transaction-page"}>TransactionPage</Link>
                </li>
                <li>
                    <Link to={"/history"}> View History</Link>
                </li>
                <li>
                    <Link to={"/pending-transaction"}>PendingTransaction</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationBar;