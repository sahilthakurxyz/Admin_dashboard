import React from "react";

const ColorMapping = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
      <p className="text-gray-500 mb-8">
        We're working hard to bring you an amazing website.
      </p>
      <div className="flex space-x-4">
        <input
          type="email"
          className="py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
        />
        <button className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Notify Me
        </button>
      </div>
    </div>
  );
};

export default ColorMapping;
