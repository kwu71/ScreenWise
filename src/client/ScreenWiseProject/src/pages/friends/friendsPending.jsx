import FriendNavBar from '../../component/friendNav/friendNavBar';
import Navbar from '../../component/navBar/navBar';
import FriendSentCard from './friendSentCard';
import FriendReceivedCard from './friendReceivedCard';

import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import useUserStore from '../../stores/userStore';

function FriendsPending() {

  const [friendRequestSent, setFriendsSent] = useState([]);
  const [friendRequestReceived, setFriendsRequested] = useState([]);
  const user = useUserStore((state) => state.user);
  
  const getFriendsSent = async() => {
    try {
      const response = await Axios.get(`http://localhost:3000/api/users/getFriendsSent/${user._id}`);
      setFriendsSent(response.data.arrayOfUserModels);
    } catch (error) {
      
    }
  }
  const getFriendsRequested = async() => {
    try {
      const response = await Axios.get(`http://localhost:3000/api/users/getFriendsRequested/${user._id}`);
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

        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto h-[88vh]'>
          
          <div>
            <div>
              <div>
                <h1>Received Invites - {friendRequestReceived.length}</h1>
              </div>
            </div>
            
            <div>
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

            <div>
              <div>
                <h1>Sent Invites - {friendRequestSent.length}</h1>
              </div>
            </div>

            <div>
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