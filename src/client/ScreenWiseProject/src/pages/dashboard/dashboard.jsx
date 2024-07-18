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
      const response = await Axios.get(`http://localhost:3000/api/users/getTotalTime/${user._id}`);
      setScreenTime(response.data);
      setPendingTime(false);
    } catch (error) {
      
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setPending(true);
      const dataToSend = {hours : numberOfHours}
      const response = await Axios.post(`http://localhost:3000/api/users/addHours/${user._id}`, dataToSend);
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
            {!isPendingTime && <h1>Hours: {totalScreenTime}</h1>}
            {isPendingTime && <h1>Fetching Time {totalScreenTime}</h1>}
          </div>

          <div>
            <h1>Input amount of hours on social media today</h1>
          </div>

          <div>
            <form onSubmit={handleSubmit}>
              <input type="number" value={numberOfHours} onChange={handleNumberChange}/>
              {!isPending && <button type="submit">Submit</button>}
              {isPending && <button type="submit" disabled>Sending Hours...</button>}
            </form>
          </div>
        </div>      
      </div>
    
    </div>
  );
}

export default Dashboard;