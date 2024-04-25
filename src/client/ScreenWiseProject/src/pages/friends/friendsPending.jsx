import FriendNavBar from '../../component/friendNav/friendNavBar';
import Navbar from '../../component/navBar/navBar';
import styles from './friendsPending.module.css'

import React, {useEffect, useState} from 'react';
import Axios from 'axios';

function FriendsPending() {

  const [friendRequestSent, setFriendsSet] = useState([]);
  
  const getFriendsSent = async() => {
    try {
      const userId = '66291b16eeb858a857cc2742';
      const response = await Axios.get(`http://localhost:3000/api/users/getFriendsSent/${userId}`);
      setFriendsSet(response.data.arrayOfUserModels);
      console.log(friendRequestSent)
    } catch (error) {
      
    }
  }
  
  useEffect(() => {
    getFriendsSent();
  }, []);
  
  
  return(
    <div>
      
      <div><Navbar /></div>  

      <div className={styles.pageContainer}>
        
        <div className={styles.friendNavContainer}>
          <FriendNavBar />
        </div>

        <div class={styles.friendsBlockRight}>
          
          <div class={styles.headingBackground}>
            <div class={styles.receivedContainer}>
              <h1>Received Invites - 3</h1>
            </div>
          </div>
          
          <div class={styles.bodyBackground}>
            <div class={styles.bodyContainer}>
              
              <div class={styles.card}>
                <div class={styles.friendCard}>
                  <p class={styles.friendName}>@Blueemon</p>
                </div>
              </div>
              
              <div class={styles.card}>
                <div class={styles.friendCard}>
                  <p class={styles.friendName}>@Blueemon</p>
                </div>
              </div>
              
              <div class={styles.card}>
                <div class={styles.friendCard}>
                  <p class={styles.friendName}>@Blueemon</p>
                </div>
              </div>
            
            </div>
          </div>

          <div class={styles.headingBackground}>
            <div class={styles.pendingContainer}>
              <h1>Sent Invites - {friendRequestSent.length}</h1>
            </div>
          </div>

          <div class={styles.bodyBackground}>
            <div class={styles.bodyContainer}>
              
              <div class={styles.card}>
                <div class={styles.friendCard}>
                  <p class={styles.friendName}>@Blueemon</p>
                </div>
              </div>

            </div>
          </div>
        
        </div>

      </div>
    </div>
  )
}

export default FriendsPending;