import React from 'react';

const ContactInfo = () => {
  return (
    <div className="max-w-7xl mx-auto p-8 bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Contact Info Section */}
        <div className="text-center md:text-left">
          <h1 className="text-lg font-medium text-gray-600 mb-2">Contact Info</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
            We are always <br className="hidden md:block" /> happy to assist you
          </h2>
        </div>

        {/* Email Address Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-lg font-medium text-gray-600 mb-2">Email Address</h1>
          <p className="text-2xl font-semibold text-blue-600 mb-2">support@RMax.com</p>
          <p className="text-sm text-gray-600">Assistance hours:</p>
          <p className="text-sm text-gray-600">Monday to Friday</p>
          <p className="text-sm text-gray-600">EST</p>
        </div>

        {/* Phone Number Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-lg font-medium text-gray-600 mb-2">Phone Number</h1>
          <p className="text-2xl font-semibold text-blue-600 mb-2">+91-8657491236</p>
          <p className="text-sm text-gray-600">Assistance hours:</p>
          <p className="text-sm text-gray-600">Monday to Friday</p>
          <p className="text-sm text-gray-600">EST</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
