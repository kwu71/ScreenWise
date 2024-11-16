import Navbar from '../../component/navBar/navBar';


import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import useUserStore from '../../stores/userStore';


function Dashboard() {

  const [numberOfHours, setNumberOfHours] = useState(0);
  const [totalScreenTime, setScreenTime] = useState(0);
  const [isPending, setPending] = useState(false);
  const [isPendingTime, setPendingTime] = useState(false);
  const user = useUserStore((state) => state.user);

  const handleNumberChange = (e) => {
    setNumberOfHours(e.target.value);
  };

  const getScreenTime = async () => {
    try {
      setPendingTime(true);
      const response = await Axios.get(`https://screen-wise-ntsk.vercel.app/api/users/getTotalTime/${user._id}`);
      setScreenTime(response.data);
      setPendingTime(false);
    } catch (error) {
      
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      if (numberOfHours < 0) {
        alert('Number of hours cannot be less than 0');
        setNumberOfHours(0);
        return;
      }
      
      setPending(true);
      const dataToSend = {hours : numberOfHours}
      const response = await Axios.post(`https://screen-wise-ntsk.vercel.app/api/users/addHours/${user._id}`, dataToSend);
      setNumberOfHours(0);
      
      setPending(false);
      
      getScreenTime();
    } catch (error) {
      setPending(false);
    }
  }

  useEffect(() => {
    if(user !== null){
      getScreenTime();
    }
  }, [user])

  return (
    <div>
      <Navbar />    

      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto h-[75vh]'>
        <div className='w-full max-w-xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md'>
          <div>
            {!isPendingTime && 
              <>
                <div className='flex flex-col text-center'>
                  <h1 className='text-xl'>Hours</h1> 
                  <p className='text-7xl'>{totalScreenTime}</p>
                </div>
              </>
            }
            {isPendingTime && <h1>Fetching Time {totalScreenTime}</h1>}
          </div>

          <div className='mt-10'>
            <h1 className='font-bold'>Input amount of hours on social media today</h1>
          </div>

          <div>
            <form onSubmit={handleSubmit} className='flex flex-col'>
              <input type="text" inputmode="numeric" value={numberOfHours} onChange={handleNumberChange} className='p-1 border-2'/>
              {!isPending && 
                <>
                <div className='flex items-center justify-center mt-10'>
                  <button type="submit" className='px-10 py-2 rounded-lg bg-gray-300 transition ease-in-out delay-[50ms] hover:bg-gray-400'>
                    Submit
                  </button>
                </div>                
                </>
                }
              {isPending && 
                <>
                  <div className='flex items-center justify-center mt-10'>
                    <button type="submit" className='inline-flex items-center px-10 py-2 rounded-lg bg-gray-300 transition ease-in-out delay-[50ms] hover:bg-gray-400'>
                      <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submit
                    </button>
                  </div>                
                </>
                }
            </form>
          </div>
        </div>      
      </div>
    
    </div>
  );
}

export default Dashboard;