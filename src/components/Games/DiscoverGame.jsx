import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function DiscoverGame() {

    // initialize state
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // fetch games
    useEffect(() => {
        const fetchData = async () => {
            try {
                const baseUrl = import.meta.env.VITE_BASE_URL;
                const apiKey = import.meta.env.VITE_API_KEY;

                const response = await axios.get(`${baseUrl}/games?key=${apiKey}`);

                setGames(response.data.results);
                setLoading(false);

            } catch (err) {
                console.error('Error fetching games:', err);
                setError('Failed to fetch games. Please try again later.');
                setLoading(false);

            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div className="text-center text-white py-10">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500 py-10">{error}</div>;
    }

    return (
        <div className="py-8">
            <h2 className="text-xl font-bold text-white mb-6">Discover New Games</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {games.map((game) => (
                    <div key={game.id} game={game} className=" rounded-lg shadow-xl overflow-hidden">
                        <img
                            className="w-full h-48 object-cover"
                            src={game.background_image}
                            alt={game.name}
                        />
                        <div className="p-4">
                            <div className='flex justify-between mb-2'>
                                <p className="text-sm text-gray-400">{game.genres[0]?.name}</p>
                                <p className="text-sm font-semibold text-[#4caf50] border rounded-md border-[#4caf50] px-1">{game.metacritic}</p>
                            </div>
                            <h3 className="text-xsm font-semibold text-white">{game.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
