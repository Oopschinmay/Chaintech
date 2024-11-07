// Login.js
import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';
import axios from 'axios';
import { useNavigate } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`http://localhost:7000/api/user/v1/get-users-info-id`, { email, password });
            const userData = response.data;

            login(userData); // Set user in Auth Context
            navigate('/home'); // Navigate to home page
        } catch (error) {
            console.error("Login error:", error);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <form onSubmit={handleLogin} className="p-6 bg-white rounded shadow-lg space-y-4">
                <h2 className="text-xl font-semibold">Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
                <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">Login</button>
            </form>
        </div>
    );
};

export default Login;
