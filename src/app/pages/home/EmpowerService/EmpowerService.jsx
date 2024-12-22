import Image from "next/image";
import Sports from "../../../../../public/PNG_Images/sports.jpg";
import Health from "../../../../../public/PNG_Images/health.jpg";
import Activity from "../../../../../public/PNG_Images/activity.jpg";

const EmpowerService = () => {
    return (
        <div className="flex flex-col items-center text-center text-black space-y-6 px-4 md:px-0">
            {/* Heading Section */}
            <div className="max-w-3xl">
                <h1 className="font-bold text-4xl sm:text-5xl">Empowering Services</h1>
                <h2 className="font-bold text-4xl sm:text-5xl mb-4">Providers Across Industries</h2>
                <p className="text-lg sm:text-xl">
                    Whether you're in sports, education, wellness, household services, or niche markets, our technology simplifies your business operations, making it easier for you to focus on what you do best.
                </p>
            </div>

            {/* Service Boxes Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
                {/* Sports Box */}
                <div className="p-6 border border-gray-300 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Image src={Sports} alt="Sports Image" width={200} height={100} className="mx-auto" />
                    <h2 className="font-bold text-xl mt-4">Sports</h2>
                    <p className="text-gray-700 mt-2">
                        From fitness studios to sports academies, Rmax empowers sports businesses.
                        <span className="text-blue-600 cursor-pointer hover:underline"> Know More</span>
                    </p>
                </div>

                {/* Healthcare & Wellness Box */}
                <div className="p-6 border border-gray-300 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Image src={Health} alt="Healthcare Image" width={200} height={100} className="mx-auto" />
                    <h2 className="font-bold text-xl mt-4">Healthcare & Wellness</h2>
                    <p className="text-gray-700 mt-2">
                        Health and wellness service providers—from yoga instructors and gyms.
                        <span className="text-blue-600 cursor-pointer hover:underline"> Know More</span>
                    </p>
                </div>

                {/* Learning Activities Box */}
                <div className="p-6 border border-gray-300 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Image src={Activity} alt="Learning Activities Image" width={200} height={100} className="mx-auto" />
                    <h2 className="font-bold text-xl mt-4">Learning Activities</h2>
                    <p className="text-gray-700 mt-2">
                        Tutors, educators, and learning centers—from music schools to art studios.
                        <span className="text-blue-600 cursor-pointer hover:underline"> Know More</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default EmpowerService;
