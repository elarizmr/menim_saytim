'use client';

import { useEffect, useState } from 'react';
import { apiCall } from '../utils/api';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

interface Game {
    _id: string;
    name: string;
    price: number;
    image: string;
    brand: string;
    category: string;
    rating: number;
    numReviews: number;
    countInStock: number;
}

const ShopPart = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchGames = async () => {
            try {
                setLoading(true);
                const response = await apiCall('/products');

                if (!response.ok) {
                    throw new Error('Failed to fetch games');
                }

                const data = await response.json();
                setGames(data);
                setError('');
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Error fetching games');
                console.error('Error fetching games:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchGames();
    }, []);

    if (loading) {
        return (
            <section className="max-w-390 justify-center mx-auto my-8">
                <div className="text-center py-12">
                    <p className="text-lg text-gray-500">Loading games...</p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="max-w-390 justify-center mx-auto my-8">
                <div className="text-center py-12">
                    <p className="text-lg text-red-500">Error: {error}</p>
                </div>
            </section>
        );
    }

    return (
        <section className="max-w-390 justify-center mx-auto my-8">
            <div className="flex justify-between items-center">
                <h1 className="text-4xl font-bold">The Best Deals</h1>
                <Link href="/shop" className="bg-[#E60023] text-white font-bold py-4 px-8 rounded-2xl flex items-center gap-3 hover:bg-[#c50020] transition-all duration-300 hover:scale-105 shadow-lg">
                    Show more products
                    <FiArrowRight className="text-xl" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {games.length > 0 ? (
                    games.map((game) => (
                        <Link href={`/product/${game._id}`} key={game._id}>
                            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden cursor-pointer">
                                {/* Game Image */}
                                <div className="relative w-full h-48 bg-gray-200">
                                    <img
                                        src={game.image}
                                        alt={game.name}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                    {game.countInStock === 0 && (
                                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                            <span className="text-white font-bold">Out of Stock</span>
                                        </div>
                                    )}
                                </div>

                                {/* Game Info */}
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-2">
                                        {game.name}
                                    </h3>

                                    <p className="text-sm text-gray-600 mb-2">
                                        Brand: <span className="font-medium">{game.brand}</span>
                                    </p>

                                    <p className="text-sm text-gray-600 mb-3">
                                        Category: <span className="font-medium">{game.category}</span>
                                    </p>

                                    {/* Rating */}
                                    <div className="flex items-center mb-3">
                                        <div className="flex text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <span key={i}>
                                                    {i < Math.floor(game.rating) ? '★' : '☆'}
                                                </span>
                                            ))}
                                        </div>
                                        <span className="text-xs text-gray-600 ml-2">
                                            ({game.numReviews} reviews)
                                        </span>
                                    </div>

                                    {/* Price */}
                                    <div className="flex justify-between items-center">
                                        <span className="text-2xl font-bold text-blue-600">
                                            ${game.price.toFixed(2)}
                                        </span>
                                        <button
                                            className={`px-3 py-2 rounded text-sm font-medium transition-colors ${game.countInStock > 0
                                                ? 'bg-blue-600 text-white hover:bg-blue-700'
                                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                                }`}
                                            disabled={game.countInStock === 0}
                                        >
                                            Add to Cart
                                        </button>
                                    </div>

                                    {game.countInStock > 0 && (
                                        <p className="text-xs text-green-600 mt-2">
                                            {game.countInStock} in stock
                                        </p>
                                    )}
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <div className="col-span-full text-center py-12">
                        <p className="text-lg text-gray-500">No games found</p>
                    </div>
                )}
            </div>

        </section>
    )
}

export default ShopPart