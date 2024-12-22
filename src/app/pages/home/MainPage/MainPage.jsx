import Link from "next/link";

const MainPage = () => {
    return (
        <section className="flex flex-col items-center min-h-screen w-full px-6 py-10">
            {/* Main Content */}
            <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
                    Maximize Your Impact
                </h1>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-red-500">
                    Business With <span className="text-black">R</span>
                    <span className="text-red-700">Max</span>
                </h2>
                <p className="text-gray-600 max-w-lg mx-auto text-sm sm:text-base lg:text-lg">
                    Enhance your business with RMax's all-in-one platform—streamlining
                    client engagement, automating workflows, and fueling growth.
                </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row mt-10 mb-16 space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                    href="/login"
                    className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition-all text-center"
                >
                    Get Started
                </Link>
                <Link
                    href="/login"
                    className="px-6 py-3 border border-gray-300 rounded-lg shadow-lg hover:bg-red-50 transition-all text-black text-center"
                >
                    Book A Demo
                </Link>
            </div>

            {/* Features Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-black w-full max-w-4xl">
                <div className="p-4 border border-gray-300 font-semibold bg-white text-center">
                    Seamless Onboarding
                </div>
                <div className="p-4 border border-gray-300 font-semibold bg-white text-center">
                    Client Engagement
                </div>
                <div className="p-4 border border-gray-300 font-semibold bg-white text-center">
                    Generate Reports
                </div>
                <div className="p-4 border border-gray-300 font-semibold bg-white text-center">
                    Revenue Growth
                </div>
            </div>
        </section>
    );
};

export default MainPage;