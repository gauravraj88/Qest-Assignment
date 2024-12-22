import React from 'react';

const HeroSection = () => {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center py-8 px-4 sm:space-x-4 space-y-4 sm:space-y-0">
            <label
                className="text-2xl font-extrabold text-gray-800 bg-white px-4 py-2 rounded-lg shadow-md border border-gray-300 sm:mr-4"
                htmlFor="AI"
            >
                AI R<span className="text-red-700">Max</span>
            </label>
            <input
                className="px-6 py-3 border border-gray-300 rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-400 bg-white text-base w-full sm:max-w-md"
                type="text"
                name="AI"
                placeholder="Curious? Let AI Uncover the Answer!"
            />
        </div>
    );
};

export default HeroSection;
