import FriendNavBar from '../../component/friendNav/friendNavBar';
import Navbar from '../../component/navBar/navBar';
import FriendCard from '../../component/friends/friendCard';

import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import useUserStore from '../../stores/userStore';

function FriendsAll() {

  const [friendsList, setFriendsList] = useState([]);
  const user = useUserStore((state) => state.user);

  const getFriendsList = async () => {
    try {
      const response = await Axios.get(`https://screenwise-backend-1648094cfb48.herokuapp.com/api/users/getFriendsList/${user._id}`);
      setFriendsList(response.data.arrayOfUserModels);
    } catch (error) {
      
    }
  }

  useEffect(() => {
    if(user !== null){
      getFriendsList();
    }
  }, [user]);

  return(
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-grow">
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto'>
          <div className='w-full max-w-5xl text-center bg-slate-200 shadow-lg rounded'>
            <div>
              <div className='mt-10'>
                <h1 className='mb-10 font-bold text-2xl'>All Friends - {friendsList.length}</h1>
              </div>
            </div>
            <div className='mb-10'>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5'>
                {friendsList.map((friendSent) => (
                  <FriendCard key={friendSent._id} username={friendSent.username} id={friendSent._id} />
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

export default FriendsAll;