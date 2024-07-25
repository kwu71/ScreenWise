import Navbar from '../../component/navBar/navBar';
import TipsCard from '../../component/tipsCard';
import TipsPageData from '../../utils/tipsPageData';

function Tips() {
  return(
    <div>
        <Navbar />

      <div className='text-center my-10 mx-5'>
        <h1 className='text-2xl font-extrabold'>General Tips to Reduce Screen Time!</h1>
        <p className='font-light'>Make sure to spend time off your phone!</p>
      </div>

      <div className='w-full max-w-6xl mx-auto my-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5'>
          {TipsPageData.map((cardData) => (
            <TipsCard 
              title = {cardData.title}
              tip = {cardData.tip}
            />
          ))}
        </div>
      </div>

    </div>
  )
}

export default Tips;