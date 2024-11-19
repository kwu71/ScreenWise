import Navbar from '../../component/navBar/navBar';
import LeaderboardProp from '../../component/leaderboardProp';

import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import useUserStore from '../../stores/userStore';

function Leaderboard() {

  const [leaderboardFriends, setLeaderboardFriends] = useState([]);
  const user = useUserStore((state) => state.user);

  const fetchFriendData = async () => {
    try {
      const leaderboardData = await Axios.get(`https://screenwise-backend-1648094cfb48.herokuapp.com/api/users/getLeaderboard/${user._id}`);
      setLeaderboardFriends(leaderboardData.data); 
      console.log(leaderboardFriends);
    } catch (error) {
      
    }
  }


  useEffect(() => {
    fetchFriendData();
  },[user])

  return(
    <div>
        <div><Navbar /></div>

        <div className='mt-20 mx-6'>
          <div className='p-3 bg-slate-100 w-full max-w-6xl mx-auto rounded-lg'>
            <h1 className='text-xl font-extrabold'>Screen Time Use</h1>
            <p className='text-sm'>Help your friends out and remind them to put down the phone sometimes!</p>
          </div>
        </div>

        <div className='mt-10 mx-6 mb-6'>
          <div className='p-3 bg-slate-100 w-full max-w-6xl mx-auto rounded-lg'>
            
            <div className='flex justify-between'>
              <div className='flex'>
                <p className='font-extrabold'>Rank</p>
                <p className='font-extrabold ml-10'>Username</p>
              </div>
              <div>
                <p className='font-extrabold'>Hours</p>
              </div>
            </div>

            <div>
              {leaderboardFriends.length === 0 && <h1 className='text-center my-10 text-2xl font-extrabold'>Currently no hours have been input!</h1>}
              {leaderboardFriends.length >= 1 && leaderboardFriends.map((friend, index) => <LeaderboardProp rank={index + 1} username={friend.username} hours={friend.totalHours}/>)}
            </div>
          </div>
        </div>
    
    </div>
  )
}

export default Leaderboard;