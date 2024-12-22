import React from 'react';

const SupportPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">
      {/* Heading Section */}
      <div className="flex justify-start mb-8">
        <h1 className="text-4xl font-bold text-left leading-snug">
          Get in Touch with Us
          <br />
          <span className="text-lg font-medium text-gray-600">We're here to assist you.</span>
        </h1>
      </div>

      {/* Form Section */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Business Name */}
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="businessName">
            Business Name
          </label>
          <input
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            type="text"
            name="businessName"
            placeholder="Search for your Business listing"
          />
        </div>

        {/* Your Name */}
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="yourName">
            Your Name
          </label>
          <input
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            type="text"
            name="yourName"
            placeholder="Enter Your Name"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            type="text"
            name="phoneNumber"
            placeholder="Enter Your Phone Number"
          />
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            type="email"
            name="email"
            placeholder="Eg. xyz@gmail.com"
          />
        </div>

        {/* Message */}
        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            name="message"
            rows="6"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2 text-center mt-4">
          <button
            type="submit"
            className="bg-red-700 hover:bg-red-800 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all"
          >
            Leave Us a Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default SupportPage;
