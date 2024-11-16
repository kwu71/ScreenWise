import GetStartedBTN from '../../component/landingNav/getStartedBTN';
import LeftImageTxt from '../../component/landing/leftImageTxt'
import RightImageTxt from '../../component/landing/rightImageTxt';

function LandingPage() {
  return (
    
    <div>

      <div className='w-full bg-slate-200 z-10'>
        <div className='w-full max-w-6xl mx-auto py-4'>
          <nav className='flex items-center justify-between'>
            <h1 className='font-extrabold ml-8 xl:ml-0'>ScreenWise</h1>
            <button className='px-4 py-2 mr-8 xl:mr-0 rounded-lg bg-slate-100 transition ease-in-out delay-[50ms] hover:bg-slate-300'>
              <a href="https://screen-wise.vercel.app/login" className='font-semibold'>
                Login
              </a>
            </button>
          </nav>
        </div>
      </div>


      <div className='w-full bg-slate-300 py-64'>
        <div className='w-full max-w-6xl mx-auto'>
          <div className='px-8 text-center items-center'>
            <h1 className='font-extrabold text-4xl'>Imagine a community...</h1>
            <p className='mt-4 text-sm'>Embark on a digital wellness journey with ScreenWise, an innovative app designed to transform your screen time management into a social and supportive experience. Whether you're striving for a healthier balance or simply looking for friends to help you on your journey, ScreenWise has got you covered!</p>
            <div className='mt-14'><GetStartedBTN /></div>
          </div>
        </div>
      </div>

      <div>
          
          <LeftImageTxt 
            img="https://images.unsplash.com/photo-1529519739370-53ce2aa5561a?auto=format&fit=crop&q=80&w=2970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            header="Keep Track" 
            text="ScreenWise allows you to input the amount of hours you have used social media then displays a graph for the week." 
          />

          <RightImageTxt
            img="https://images.unsplash.com/photo-1529519739370-53ce2aa5561a?auto=format&fit=crop&q=80&w=2970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            header="Learn ways to reduce screen time" 
            text="ScreenWise has a built in tips board where you can learn about ways to reduce screen time!" 
          />

          <LeftImageTxt 
            img="https://images.unsplash.com/photo-1529519739370-53ce2aa5561a?auto=format&fit=crop&q=80&w=2970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            header="Create a community" 
            text="Add your friends on ScreenWise and see where they are at through the day." 
          />

          <RightImageTxt
            img="https://images.unsplash.com/photo-1529519739370-53ce2aa5561a?auto=format&fit=crop&q=80&w=2970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            header="Keep each other accountable" 
            text="ScreenWise creates a leaderboard for you and your friends based on screen time. Keep each other accountable!" 
          />

      </div>

        <div className='w-full bg-slate-100 py-64'>
          <div className='w-full max-w-6xl mx-auto text-center items-center'>
            <h1 className='font-extrabold text-4xl'>Start your ScreenWise journey</h1>
            <div className='mt-14'><GetStartedBTN /></div>
          </div>
        </div>

        <footer className='w-full bg-slate-200 py-8'>
          <div className='w-full max-w-6xl mx-auto'> 
            <nav className='flex items-center justify-between'>
              <h1 className='font-extrabold ml-8 xl:ml-0'>ScreenWise</h1>
              <button className='px-4 py-2 mr-8 xl:mr-0 rounded-lg bg-slate-100 transition ease-in-out delay-[50ms] hover:bg-slate-300'>
                <a href="https://screen-wise.vercel.app/login" className='font-semibold'>
                  Login
                </a>
              </button>
            </nav>
          </div>
        </footer>

      </div>
      
  );
}



export default LandingPage;