import { FaDollarSign } from "react-icons/fa6";
import { MdOutlineDone } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

const Plan = () => {
    return (
        <div className="flex flex-col items-center text-center text-black space-y-10 px-4 md:px-0">
            {/* Header Section */}
            <div className="pt-7 space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold">Choose Plan</h1>
                <h1 className="text-4xl md:text-5xl font-bold">That's Right For You</h1>
                <p className="text-gray-500 text-lg md:text-xl">
                    Simple and transparent pricing. Start for free, upgrade when you love it.
                </p>
                <button className="text-red-500 font-semibold hover:underline">
                    30 days free trial in a button
                </button>
                <p className="text-gray-600">
                    Running a Growth Business or Enterprise? Let's connect - 
                    <span className="p-2 bg-red-500 text-white rounded-md ml-2 cursor-pointer">
                        Talk To Sales
                    </span>
                </p>

                {/* Toggle Switch */}
                <div className="flex items-center justify-center space-x-4 mt-6">
                    <label htmlFor="toggle" className="text-gray-700 font-medium">Monthly</label>
                    <div className="relative inline-block w-12 h-6">
                        <input
                            type="checkbox"
                            id="toggle"
                            className="opacity-0 w-0 h-0 peer"
                        />
                        <span className="absolute cursor-pointer top-0 left-0 w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-green-500 transition duration-300"></span>
                        <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-6 transition-transform duration-300"></span>
                    </div>
                    <label htmlFor="toggle" className="text-gray-700 font-medium">Yearly</label>
                    <button className="px-3 py-1 bg-orange-300 text-red-700 rounded-2xl font-semibold">
                        Save 25%
                    </button>
                </div>
            </div>

            {/* Plans Section */}
            <div className="flex flex-col md:flex-row gap-8 justify-center w-full max-w-5xl">
                {/* Plan Card */}
                {["STARTER", "PRO"].map((plan) => (
                    <div key={plan} className="px-6 py-8 border border-gray-300 rounded-lg shadow-md text-left bg-white w-full md:w-1/2">
                        <h1 className="text-red-500 text-xl font-bold">{plan}</h1>
                        <div className="flex items-baseline space-x-1 mt-4">
                            <FaDollarSign size={20} className="text-gray-700" />
                            <h1 className="text-3xl font-bold">17</h1>
                            <h1 className="text-lg text-gray-500">/month</h1>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">Billed Monthly</p>

                        {/* Plan Features */}
                        <ul className="mt-4 space-y-2">
                            <li className="flex items-center text-gray-700">
                                <MdOutlineDone size={20} className="text-green-400" />
                                <span className="ml-2">Commercial License</span>
                            </li>
                            <li className="flex items-center text-gray-700">
                                <MdOutlineDone size={20} className="text-green-400" />
                                <span className="ml-2">100+ HTML UI Elements</span>
                            </li>
                            <li className="flex items-center text-gray-700">
                                <MdOutlineDone size={20} className="text-green-400" />
                                <span className="ml-2">Unlimited Domain Support</span>
                            </li>
                            <li className="flex items-center text-gray-400">
                                <RxCross1 size={20} className="text-gray-400" />
                                <span className="ml-2">6 Month Premium Support</span>
                            </li>
                            <li className="flex items-center text-gray-400">
                                <RxCross1 size={20} className="text-gray-400" />
                                <span className="ml-2">Lifetime Updates</span>
                            </li>
                        </ul>

                        <button className="mt-6 w-full py-3 bg-orange-400 text-red-700 rounded-2xl font-semibold hover:bg-orange-500">
                            Get Started
                        </button>
                        <p className="mt-2 text-sm text-gray-500 text-center">
                            No credit card required
                        </p>
                    </div>
                ))}
            </div>

            <div className="text-blue-800 underline mt-6">
                Explore In-Depth Difference
            </div>
        </div>
    );
}

export default Plan;
