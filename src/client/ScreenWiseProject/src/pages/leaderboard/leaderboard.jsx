import Navbar from '../../component/navBar/navBar';
import LeaderboardProp from './leaderboardProp';

import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import useUserStore from '../../stores/userStore';

function Leaderboard() {

  const [leaderboardFriends, setLeaderboardFriends] = useState([]);
  const user = useUserStore((state) => state.user);

  const fetchFriendData = async () => {
    try {
      const leaderboardData = await Axios.get(`http://localhost:3000/api/users/getLeaderboard/${user._id}`);
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

        <div>
          <h1>Screen Time Use</h1>
          <p>Help your friends out and remind them to put down the phone sometimes!</p>
        </div>

        <div>
          
          <div>
            <div>
              <p>Rank</p>
              <p>Username</p>
            </div>
            <div>
              <p>Hours</p>
            </div>
          </div>

          <div>
            {leaderboardFriends.length === 0 && <h1>Currently no friends or hours!</h1>}
            {leaderboardFriends.length >= 1 && leaderboardFriends.map((friend, index) => <LeaderboardProp rank={index + 1} username={friend.username} hours={friend.totalHours}/>)}
          </div>
        </div>
    </div>
  )
}

export default Leaderboard;