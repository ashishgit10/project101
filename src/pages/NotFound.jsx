import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-center px-6">
      
      <h1 className="text-7xl font-extrabold tracking-wide mb-4">
        404
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold mb-3">
        Page Not Found
      </h2>

      <p className="text-gray-400 max-w-md mb-8">
        The page you are looking for doesn’t exist or has been temporarily
        disabled. If you believe this is an error, please contact the developer.
      </p>

    {/*   <Link
        to="/"
        className="px-8 py-3 border border-white text-white rounded-md
                   hover:bg-white hover:text-black transition duration-300"
      >
        Go Back Home
      </Link> */}

    </div>
  );
}
