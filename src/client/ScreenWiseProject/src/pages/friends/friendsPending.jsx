import FriendNavBar from '../../component/friendNav/friendNavBar';
import Navbar from '../../component/navBar/navBar';
import FriendSentCard from './friendSentCard';
import FriendReceivedCard from './friendReceivedCard';
import styles from './friendsPending.module.css'

import React, {useEffect, useState} from 'react';
import Axios from 'axios';

function FriendsPending() {

  const [friendRequestSent, setFriendsSent] = useState([]);
  const [friendRequestReceived, setFriendsRequested] = useState([]);
  
  const getFriendsSent = async() => {
    try {
      const userId = '66291b16eeb858a857cc2742';
      const response = await Axios.get(`http://localhost:3000/api/users/getFriendsSent/${userId}`);
      setFriendsSent(response.data.arrayOfUserModels);
    } catch (error) {
      
    }
  }
  const getFriendsRequested = async() => {
    try {
      const userId = '66291b16eeb858a857cc2742';
      const response = await Axios.get(`http://localhost:3000/api/users/getFriendsRequested/${userId}`);
      setFriendsRequested(response.data.arrayOfUserModels);
    } catch (error) {
      
    }
  }
  
  useEffect(() => {
    getFriendsSent();
    getFriendsRequested();
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
              <h1>Received Invites - {friendRequestReceived.length}</h1>
            </div>
          </div>
          
          <div class={styles.bodyBackground}>
            <div class={styles.bodyContainer}>
              {friendRequestReceived.map( (friendSent) => (
                <FriendReceivedCard username={friendSent.username} id={friendSent._id}/>
              ))}
            </div>
          </div>

          <div class={styles.headingBackground}>
            <div class={styles.pendingContainer}>
              <h1>Sent Invites - {friendRequestSent.length}</h1>
            </div>
          </div>

          <div class={styles.bodyBackground}>
            <div class={styles.bodyContainer}>
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
  )
}

export default FriendsPending;