import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthContext';

const Navbar = () => {
    const { user } = useContext(AuthContext);
    const [showDetails, setShowDetails] = useState(false);

    return (
        <nav className="p-4 bg-blue-600 text-white flex justify-between">
            <h1 className="text-2xl">Friends Leaderboard</h1>
            {user && (
                <div className="relative">
                    <button onClick={() => setShowDetails(!showDetails)} className="flex items-center space-x-2">
                        <img src="/path-to-user-icon.png" alt="User Icon" className="w-8 h-8 rounded-full" />
                        <span>{user.firstName}</span>
                    </button>
                    {showDetails && (
                        <div className="absolute right-0 mt-2 w-48 bg-white text-black p-4 rounded shadow-lg">
                            <p><strong>Name:</strong> {user.firstName}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Points:</strong> {user.points}</p>
                        </div>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
