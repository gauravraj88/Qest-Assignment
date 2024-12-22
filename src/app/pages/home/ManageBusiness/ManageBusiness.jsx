import { FaApple } from "react-icons/fa";

const ManageBusiness = () => {
    return (
        <div className="text-black mt-10 space-y-8 px-4 sm:px-6 md:px-8">
            {/* Header Section */}
            <div className="text-center space-y-4">
                <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">
                    Manage Your Business On the Go
                </h1>
                <p className="text-gray-500 text-base sm:text-lg md:text-xl">
                    With the free Business Mobile App, you can manage your entire service business from anywhere. Stay connected and stay in control, no matter where your day takes you.
                </p>
            </div>

            {/* Buttons Section */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="flex items-center gap-3 px-6 py-4 border border-black rounded-2xl hover:bg-gray-100 transition duration-300 w-full sm:w-auto">
                    <FaApple size={24} />
                    <span className="font-semibold">Apple Store</span>
                </button>
                <button className="flex items-center gap-3 px-6 py-4 border border-black rounded-2xl hover:bg-gray-100 transition duration-300 w-full sm:w-auto">
                    <img
                        src="/PNG_Images/playStore.png"
                        alt="Google Play Store"
                        className="w-6 h-6"
                    />
                    <span className="font-semibold">Google Play</span>
                </button>
            </div>
        </div>
    )
}

export default ManageBusiness;
