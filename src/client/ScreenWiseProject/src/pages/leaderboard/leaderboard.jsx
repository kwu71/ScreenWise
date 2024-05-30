import Navbar from '../../component/navBar/navBar';
import styles from './leaderboard.module.css';
import LeaderboardProp from './leaderboardProp';

import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import useUserStore from '../../stores/userStore';

function Leaderboard() {

  const [leaderboardFriends, setLeaderboardFriends] = useState([])
  const user = useUserStore((state) => state.user);

  const fetchFriendData = async () => {
    try {
      const leaderboardData = await Axios.get(`http://localhost:3000/api/users/getLeaderboard/${user._id}`);
      setLeaderboardFriends(leaderboardData.data); 
    } catch (error) {
      
    }
  }


  useEffect(() => {

  },[user])

  return(
    <div>
        <div><Navbar /></div>

        <div class={styles.headerContainer}>
          <h1 class={styles.h1Header}>Screen Time Use</h1>
          <p class={styles.pHeader}>Help your friends out and remind them to put down the phone sometimes!</p>
        </div>

        <div class={styles.leaderboardTable}>
          
          <div class={styles.leaderboardHeading}>
            <div class={styles.firstSectionHeader}>
              <p class={styles.rank}>Rank</p>
              <p class={styles.username}>Username</p>
            </div>
            <div class={styles.secondSectionHeader}>
              <p class={styles.hours}>Hours</p>
            </div>
          </div>

          <div class={styles.leaderboardBody}>
            <LeaderboardProp/>
          </div>
        </div>
    </div>
  )
}

export default Leaderboard;