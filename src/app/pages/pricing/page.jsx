import Faq from '../home/Faq/Faq'
import PlanDetails from './PlanDetails/PlanDetails'

const Pricing = () => {
  return (
    <div className='bg-gradient-to-r from-gray-50 via-white to-pink-50 text-black'>
        <PlanDetails/>
        <Faq/>
    </div>
  )
}

export default Pricing