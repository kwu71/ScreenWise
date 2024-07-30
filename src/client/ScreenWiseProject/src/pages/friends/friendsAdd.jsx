import FriendNavBar from '../../component/friendNav/friendNavBar';
import Navbar from '../../component/navBar/navBar';

import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import useUserStore from '../../stores/userStore';

function FriendsAdd() {

  const [friendUsername, setUsername] = useState("");
  const [isPending, setPending] = useState(false);
  const user = useUserStore((state) => state.user);

  const handleNumberChange = (e) => {
    setUsername(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setPending(true);
      const dataToSend = {friendID : friendUsername}
      const response = await Axios.post(`http://localhost:3000/api/users/addFriend/${user._id}`, dataToSend);
      setUsername('');
      setPending(false);
      getScreenTime();
    } catch (error) {
      setPending(false);
      setUsername('');
    }
  }

  useEffect(() => {

  }, [user]);


  return(
    <div className="flex flex-col min-h-screen">
      <Navbar /> 
        
        <div className="flex-grow">
          <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto'>
            <div className='w-full max-w-5xl text-center bg-slate-200 shadow-lg rounded'>
              
              <div className='my-10'>
                <h1 className='font-bold text-2xl'>Add a Friend!</h1>
                <p>You can add people on ScreenWise with their username!</p>
              </div>

              <div className='mb-10'>
                <form onSubmit={handleSubmit}>
                  <input type="text" placeholder='@username' value={friendUsername} onChange={handleNumberChange}/>
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
        
      <FriendNavBar />
    </div>
  )
}

export default FriendsAdd;