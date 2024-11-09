// Registration.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Registration() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setMessage("Passwords don't match!");
            return;
        }

        // Check if the user already exists
        const existingUser = localStorage.getItem(username);
        if (existingUser) {
            setMessage('User already exists. Please choose a different username.');
            return;
        }

        // Save user details to localStorage
        localStorage.setItem(username, JSON.stringify({ username, password }));
        setMessage('Registration successful! You can now log in.');
        navigate('/account');

        // Clear input fields
        setUsername('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div className="max-w-md mx-auto p-8 border rounded-lg shadow-lg bg-white mt-10">
            <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
            <form onSubmit={handleRegister} className="space-y-4">
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
                    <label className="block font-semibold mb-1">Password:</label>
                    <input
                        type="password"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className="block font-semibold mb-1">Confirm Password:</label>
                    <input
                        type="password"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
                >
                    Register
                </button>
            </form>
            {message && <p className="mt-4 text-center text-red-500">{message}</p>}
        </div>
    );
}
