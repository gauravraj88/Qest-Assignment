import HeroSection from '@/app/components/HeroSection'
import ContactInfo from './ContactInfo/ContactInfo'
import SupportPage from './SupportPage/SupportPage'

const page = () => {
    return (
        <div className='bg-gradient-to-r from-gray-50 via-white to-pink-50'>
            <HeroSection/>
            <SupportPage />
            <ContactInfo />
        </div>
    )
}

export default page