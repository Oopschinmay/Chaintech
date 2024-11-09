// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import Account from './components/Account';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isRegistering, setIsRegistering] = useState(true);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(authStatus === 'true');
  }, []);

  const handleRegister = () => {
    setIsRegistering(false);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    setIsRegistering(true);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-8">Authentication App</h1>
          {isAuthenticated ? (
            <>
              <nav className="text-center mb-4">
                <Link to="/account" className="text-blue-500 hover:underline">Account</Link> |{" "}
                <button
                  onClick={handleLogout}
                  className="text-red-500 hover:underline"
                >
                  Logout
                </button>
              </nav>
              <Routes>
                <Route path="/account" element={<Account />} />
                <Route path="/" element={<div className="text-center">Welcome, User!</div>} />
              </Routes>
            </>
          ) : isRegistering ? (
            <Registration onRegister={handleRegister} />
          ) : (
            <Login onLogin={handleLogin} />
          )}
          {!isAuthenticated && (
            <div className="text-center mt-4">
              <button
                onClick={() => setIsRegistering(!isRegistering)}
                className="text-blue-500 hover:underline"
              >
                {isRegistering ? "Already have an account? Log in" : "Need an account? Register"}
              </button>
            </div>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
