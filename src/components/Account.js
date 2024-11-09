// Account.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Account() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const authStatus = localStorage.getItem('isAuthenticated');
        if (authStatus !== 'true') {
            navigate('/login');
        }

        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        if (userInfo) {
            setUsername(userInfo.username);
            setEmail(userInfo.email);
            setPassword(userInfo.password);
        }
    }, [navigate]);

    const handleSave = (e) => {
        e.preventDefault();
        localStorage.setItem('userInfo', JSON.stringify({ username, email, password }));
        setMessage('Account information updated successfully!');
    };

    return (
        <div className="max-w-md mx-auto p-8 border rounded-lg shadow-lg bg-white mt-10">
            <h2 className="text-2xl font-bold mb-6 text-center">Account Information</h2>
            <form onSubmit={handleSave} className="space-y-4">
                <div>
                    <label className="block font-semibold mb-1">Username:</label>
                    <input
                        type="text"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className="block font-semibold mb-1">Email:</label>
                    <input
                        type="email"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className="block font-semibold mb-1">Password:</label>
                    <input
                        type="password"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
                >
                    Save Changes
                </button>
            </form>
            {message && <p className="mt-4 text-center text-green-500">{message}</p>}
        </div>
    );
}

export default Account;
