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
            <h2 className="text-xl font-bold text-white mb-6">Discover Games</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {games.map((game) => (
                    <div key={game.id} className="flex flex-col rounded-lg shadow-2xl overflow-hidden">
                        <img
                            className="w-full h-48 object-cover"
                            src={game.background_image}
                            alt={game.name}
                        />
                        <div className="flex flex-col justify-between flex-grow p-4">
                            <div>
                                <div className="flex justify-between mb-2">
                                    <p className="text-sm text-gray-400">{game.genres[0]?.name || 'Unknown'}</p>
                                    <p className="text-sm font-semibold text-[#4caf50] border rounded-md border-[#4caf50] px-1">{game.metacritic}</p>
                                </div>
                                <h3 className="text-sm font-semibold text-white min-h-[40px]">
                                    {game.name || 'N/A'}
                                </h3>
                            </div>
                            <div className="mt-2">
                                <div className="flex flex-wrap gap-2">
                                    {game.parent_platforms?.slice(0, 2).map((platform) => (
                                        <span
                                            key={platform.platform.id}
                                            className="text-xs text-gray-200"
                                        >
                                            {platform.platform.name}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-sm text-white font-medium mt-3">⭐ {game.rating}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
