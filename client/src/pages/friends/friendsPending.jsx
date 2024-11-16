import FriendNavBar from '../../component/friendNav/friendNavBar';
import Navbar from '../../component/navBar/navBar';
import FriendSentCard from '../../component/friends/friendSentCard';
import FriendReceivedCard from '../../component/friends/friendReceivedCard';

import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import useUserStore from '../../stores/userStore';

function FriendsPending() {

  const [friendRequestSent, setFriendsSent] = useState([]);
  const [friendRequestReceived, setFriendsRequested] = useState([]);
  const user = useUserStore((state) => state.user);
  
  const getFriendsSent = async() => {
    try {
      const response = await Axios.get(`https://screen-wise-ntsk.vercel.app/api/users/getFriendsSent/${user._id}`);
      setFriendsSent(response.data.arrayOfUserModels);
    } catch (error) {
      
    }
  }
  const getFriendsRequested = async() => {
    try {
      const response = await Axios.get(`https://screen-wise-ntsk.vercel.app/api/users/getFriendsRequested/${user._id}`);
      setFriendsRequested(response.data.arrayOfUserModels);
    } catch (error) {
      
    }
  }
  
  useEffect(() => {
    getFriendsSent();
    getFriendsRequested();
  }, [user]);
  
  
  return(
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-grow">
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto'>
          <div className='w-full max-w-5xl text-center bg-slate-200 shadow-lg rounded'>
              <div className='mb-10'>
                <div className='mt-10'>
                  <h1 className='font-bold text-2xl'>Received Invites - {friendRequestReceived.length}</h1>
                </div>
              </div>
              
              <div className='mb-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5'>
                  {friendRequestReceived.map( (friendSent) => (
                    <FriendReceivedCard 
                      username={friendSent.username} 
                      id={friendSent._id}
                      onDelete={getFriendsRequested}
                    />
                  ))}
                </div>
              </div>

              <div className='mb-10'>
                <div>
                  <h1 className='font-bold text-2xl'>Sent Invites - {friendRequestSent.length}</h1>
                </div>
              </div>

              <div className='mb-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5'>
                  {friendRequestSent.map( (friendSent) => (
                    <FriendSentCard 
                      username={friendSent.username} 
                      id={friendSent._id}
                      onDelete={getFriendsSent}
                      />
                  ))}
                </div>
              </div>
          </div>
        </div>
      </div>

      <FriendNavBar />
    </div>
  )
}

export default FriendsPending;