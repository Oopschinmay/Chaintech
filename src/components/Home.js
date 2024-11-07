// Home.js
import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from './AuthContext';
import axios from 'axios';

const Home = () => {
    const { user } = useContext(AuthContext);
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        // Fetch initial friend data from a static list or backend
        setFriends([
            { id: 1, name: "Alice", points: 10 },
            { id: 2, name: "Bob", points: 20 },
            // ...additional friends
        ]);
    }, []);

    const increasePoints = async (friendId) => {
        try {
            const response = await axios.post(`http://localhost:7000/api/user/v1/claim-points`, { userId: friendId });
            const updatedFriend = response.data;

            // Update friend points locally
            setFriends((prevFriends) =>
                prevFriends.map((friend) =>
                    friend.id === friendId ? { ...friend, points: updatedFriend.points } : friend
                )
            );
        } catch (error) {
            console.error("Error updating points:", error);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
            <ul className="space-y-2">
                {friends
                    .sort((a, b) => b.points - a.points)
                    .map((friend) => (
                        <li
                            key={friend.id}
                            onClick={() => increasePoints(friend.id)}
                            className="flex justify-between p-4 bg-gray-100 rounded cursor-pointer hover:bg-gray-200"
                        >
                            <span>{friend.name}</span>
                            <span>{friend.points} points</span>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default Home;
