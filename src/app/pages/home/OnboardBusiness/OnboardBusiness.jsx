import { CgProfile } from "react-icons/cg";
import { BsCloudDownload } from "react-icons/bs";
import { HiOutlineDesktopComputer } from "react-icons/hi";

const OnboardBusiness = () => {
  return (
    <div className="flex flex-col items-center text-center p-10 rounded-lg space-y-7">
        <h1 className="text-4xl font-bold text-gray-800">
          Onboard Your Business in 3 Simple Steps
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Quick, assisted onboarding with a 30-day free trial. No credit card needed.
        </p>

        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center p-6 space-y-4">
            <div className="p-11 bg-white rounded-full border border-black mb-7">
              <CgProfile size={100} className="text-red-500 bg-red-200 rounded-full p-7" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Claim Your Preset Profile</h2>
            <p className="text-sm text-gray-600">
              Unlock tailored service and seamlessly elevate your experience by claiming your preset profile today.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center p-6 space-y-4">
            <div className="p-11 bg-white rounded-full border border-black mb-7">
              <BsCloudDownload size={100} className="text-red-500 bg-red-200 rounded-full p-7" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Add Services</h2>
            <p className="text-sm text-gray-600">
              Use multiple scheduling and pricing options to add services. Choose from pre-created scheduling templates.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center p-6 space-y-4">
            <div className="p-11 bg-white rounded-full border border-black mb-7">
              <HiOutlineDesktopComputer size={100} className="text-red-500 bg-red-200 rounded-full p-7" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Build Your Website</h2>
            <p className="text-sm text-gray-600">
              Build your online storefront your way, seamlessly integrating all services for a cohesive and efficient client experience.
            </p>
          </div>
        </div>
      </div>
  )
}

export default OnboardBusiness