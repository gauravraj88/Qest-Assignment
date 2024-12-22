import EmpowerService from "./EmpowerService/EmpowerService";
import MainPage from "./MainPage/MainPage";
import OnboardBusiness from "./OnboardBusiness/OnboardBusiness";
import WhyRMax from "./WhyRMax/WhyRMax";
import Plan from "./Plan/Plan";
import ManageBusiness from "./ManageBusiness/ManageBusiness";
import Faq from "./Faq/Faq";
import HeroSection from "@/app/components/HeroSection";

const MyHome = () => {
  return (
    <div className="bg-gradient-to-r from-gray-50 via-white to-pink-50 text-black">
      <HeroSection/>
      <MainPage/>
      <OnboardBusiness/>
      <WhyRMax/>
      <EmpowerService/>
      <Plan/>
      <ManageBusiness/>
      <Faq/>
    </div>
  );
};

export default MyHome;
