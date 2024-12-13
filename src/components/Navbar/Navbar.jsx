import React, { useState } from "react";

export default function Navbar() {
    // State untuk mengontrol visibilitas menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-[#121216] text-white shadow-sm">

            <div className="flex items-center justify-between px-6 py-4">

                <div className="flex items-center space-x-8">

                    <a href="/" className="flex items-center space-x-4">
                        <img className="h-8 w-auto" src="/arcade.pulse.png" alt="Arcade Pulse Logo" />
                        <span className="text-xl font-bold tracking-wide">STORE</span>
                    </a>


                    <nav className="hidden md:flex space-x-6">
                        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
                            Support
                        </a>
                        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
                            Distribute
                        </a>
                    </nav>
                </div>


                <div className="hidden md:flex items-center space-x-4">
                    <button className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                        Sign in
                    </button>
                    <button className="text-sm bg-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-transform transform hover:scale-105">
                        Download
                    </button>
                </div>


                <div className="md:hidden">
                    <button
                        className="text-gray-400 hover:text-white"
                        onClick={toggleMenu}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </div>


            {isMenuOpen && (
                <div className="md:hidden bg-[#1c1c22]">
                    <nav className="flex flex-col space-y-4 p-4">
                        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
                            Support
                        </a>
                        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
                            Distribute
                        </a>
                        <button className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                            Sign in
                        </button>
                        <button className="text-sm bg-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-transform transform hover:scale-105">
                            Download
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}
