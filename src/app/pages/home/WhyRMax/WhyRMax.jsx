import Image from "next/image";
import Mychecklist from "../../../../../public/PNG_Images/checklist.webp";
import MyApps from "../../../../../public/PNG_Images/apps.png";
import { AiOutlineSchedule } from "react-icons/ai";
import { IoIosStarOutline } from "react-icons/io";
import { IoBagCheck } from "react-icons/io5";

const WhyRMax = () => {
  return (
    <div className="flex flex-col items-center text-center text-gray-800 py-12 space-y-10 px-4">
      {/* Heading Section */}
      <div className="space-y-4 max-w-6xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Why RMax?</h1>
        <p className="text-sm sm:text-base md:text-lg">
          RMax is designed to simplify and transform the way service businesses operate. From onboarding, scheduling, and billing to client management, payments, and growth, RMax integrates everything into one easy-to-use platform connecting all stakeholders.
        </p>
      </div>

      {/* Boxes Layout */}
      <div className="space-y-10 w-full max-w-6xl">
        {/* Row 1: Three boxes with middle box smaller */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Box */}
          <div className="flex flex-col items-center p-6 bg-gray-100 shadow-lg rounded-xl space-y-4">
            <AiOutlineSchedule size={40} className="text-red-500" />
            <h2 className="text-lg md:text-xl font-semibold">Scheduling</h2>
            <p className="text-sm text-gray-600 text-center">
              Manage appointments, classes, and events with ease.
            </p>
            <button className="px-4 py-2 text-sm text-red-500 border border-red-500 rounded-lg hover:bg-red-500 hover:text-white transition">
              View Details
            </button>
          </div>

          {/* Middle Smaller Box */}
          <div className="flex flex-col items-center p-5 bg-gray-100 shadow-lg rounded-xl space-y-4">
            <h2 className="text-lg md:text-xl font-semibold">Client Management & CRM</h2>
            <p className="text-sm text-gray-600 text-center">
              Keep track of customer data, preferences, and interactions.
            </p>
            <button className="px-4 py-2 text-sm text-red-500 border border-red-500 rounded-lg hover:bg-red-500 hover:text-white transition">
              View Details
            </button>
          </div>

          {/* Right Box */}
          <div className="flex flex-col items-center p-6 bg-gray-100 shadow-lg rounded-xl space-y-4">
            <IoIosStarOutline size={40} className="text-red-500" />
            <h2 className="text-lg md:text-xl font-semibold">AI Powered Insights</h2>
            <p className="text-sm text-gray-600 text-center">
              Gain actionable insights to optimize your business operations.
            </p>
            <button className="px-4 py-2 text-sm text-red-500 border border-red-500 rounded-lg hover:bg-red-500 hover:text-white transition">
              View Details
            </button>
          </div>
        </div>

        {/* Row 2: Three boxes with middle having two smaller boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Larger Box */}
          <div className="flex flex-col items-center p-6 bg-gray-100 shadow-lg rounded-xl space-y-4">
            <Image src={Mychecklist} alt="Checklist PNG Image" height={80} width={80} />
            <h2 className="text-lg md:text-xl font-semibold">Billing & Payments</h2>
            <p className="text-sm text-gray-600 text-center">
              Streamline invoicing and payments with automated workflows.
            </p>
            <button className="px-4 py-2 text-sm text-red-500 border border-red-500 rounded-lg hover:bg-red-500 hover:text-white transition">
              View Details
            </button>
          </div>

          {/* Middle Two Small Boxes */}
          <div className="flex flex-col gap-6">
            <div className="p-4 bg-gray-100 shadow-lg rounded-xl flex flex-col items-center space-y-4">
              <IoBagCheck size={40} className="text-red-500" />
              <h2 className="text-lg font-semibold">Marketing Tools</h2>
              <p className="text-sm text-gray-600 text-center">
                Boost client retention with marketing tools.
              </p>
              <button className="px-3 py-2 text-sm text-red-500 border border-red-500 rounded-lg hover:bg-red-500 hover:text-white transition">
                View Details
              </button>
            </div>
            <div className="p-4 bg-gray-100 shadow-lg rounded-xl flex flex-col items-center space-y-4">
              <h2 className="text-lg font-semibold">Multi-Location Management</h2>
              <p className="text-sm text-gray-600 text-center">
                Manage multiple locations effortlessly.
              </p>
              <button className="px-3 py-2 text-sm text-red-500 border border-red-500 rounded-lg hover:bg-red-500 hover:text-white transition">
                View Details
              </button>
            </div>
          </div>

          {/* Right Larger Box */}
          <div className="flex flex-col items-center p-6 bg-gray-100 shadow-lg rounded-xl space-y-4">
            <h2 className="text-lg md:text-xl font-semibold">Custom Branded Website</h2>
            <p className="text-sm text-gray-600 text-center">
              Create a personalized website with RMax's tools.
            </p>
            <Image src={MyApps} alt="Apps PNG Image" height={80} width={80} />
            <button className="px-4 py-2 text-sm text-red-500 border border-red-500 rounded-lg hover:bg-red-500 hover:text-white transition">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyRMax;
