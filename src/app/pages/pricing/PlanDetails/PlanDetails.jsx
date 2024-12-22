import React from "react";

const Pricing = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-8">
      {/* Heading Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-tight">
          Flexible Plans,
          <br /> Transparent Pricing
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Find the Perfect Fit for You
        </p>
        <p className="text-red-600 mt-2 font-medium">
          30-day free trial with money-back guarantee.
        </p>
      </div>

      {/* Compare Our Plans Section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
          Compare our plans
        </h2>
      </div>

      {/* Pricing Table */}
      <div className="flex justify-center">
        <div className="max-w-5xl w-full">
          {/* Table Headers */}
          <div className="grid grid-cols-1 sm:grid-cols-3 bg-white rounded-t-lg shadow-md">
            <div className="py-4 text-center font-bold text-lg text-gray-800 border-b">
              Features
            </div>
            <div className="py-4 text-center font-bold text-lg text-gray-800 border-b">
              Starter
            </div>
            <div className="py-4 text-center font-bold text-lg text-gray-800 border-b">
              Premium
            </div>
          </div>

          {/* Pricing Rows */}
          {[{ feature: "Pricing", starter: "$17/month, billed monthly", premium: "$88/month, billed monthly" },
            { feature: "Users", starter: "1", premium: "15" },
            { feature: "Branches", starter: "1", premium: "10" },
            { feature: "Courses", starter: "3", premium: "15/branch" },
            { feature: "Max Students Allowed", starter: "25", premium: "500" },
            { feature: "Communication", starter: "No", premium: "Yes" },
            { feature: "Bulk Updates", starter: "No", premium: "Yes" },
            { feature: "User Roles", starter: "No", premium: "Yes" }].map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 sm:grid-cols-3 text-center py-4 px-2 text-gray-700 ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } border-b`}
            >
              <div className="font-medium text-sm sm:text-base">{item.feature}</div>
              <div className="font-medium text-sm sm:text-base">{item.starter}</div>
              <div className="font-medium text-sm sm:text-base">{item.premium}</div>
            </div>
          ))}

          {/* Call-to-Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 mt-8">
            <div></div> {/* Empty cell for alignment */}
            <div className="text-center">
              <button className="bg-pink-100 hover:bg-pink-50 text-red-600 font-semibold px-6 py-3 rounded-lg shadow-md transition">
                Get Started
              </button>
              <p className="text-sm mt-2 text-gray-500">
                No credit card required
              </p>
            </div>
            <div className="text-center">
              <button className="bg-pink-100 hover:bg-pink-50 text-red-700 font-semibold px-6 py-3 rounded-lg shadow-md transition">
                Get Started
              </button>
              <p className="text-sm mt-2 text-gray-500">
                No credit card required
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
