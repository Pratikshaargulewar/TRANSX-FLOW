import React, {useState} from 'react';
import './Login.css';

const Login = () =>{
    const [email ,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () =>{

    };

    return (
        <div className="login-container">
            <div className='login-box'>
            <h2>Login</h2>
            <form className="login-form">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email"/>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password"/>
                <button onclick = {handleLogin} className="login-button">Login</button>
            </form>
            </div>
        </div>
    );
};

export default Login;