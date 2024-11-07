import React, { useState } from "react";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();

        if (localStorage.getItem("user")) {
            setMessage("User already registered. Please log in.");
            return;
        }

        localStorage.setItem("user", JSON.stringify({ email, password }));
        setMessage("Registration successful! You can now log in.");
        setEmail("");
        setPassword("");
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Register</h2>
                <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                        <label className="block text-gray-600">Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600">Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
                    >
                        Register
                    </button>
                </form>
                <p className="mt-4 text-center text-green-600">{message}</p>
            </div>
        </div>
    );
}

export default Register;
