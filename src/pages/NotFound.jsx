import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white text-center px-4">
            <img src={logo} className="w-32 h-32" />
            <h1 className="text-6xl font-bold text-[#004b87] mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Page Not Found
            </h2>
            <p className="text-gray-600 mb-6">
                The page you’re looking is under Development
            </p>
            <Link
                to="/"
                className="px-6 py-3 border border-[#004b87] text-[#004b87] rounded hover:bg-[#004b87] hover:text-white transition"
            >
                Back to Home
            </Link>
        </div>
    );
}
