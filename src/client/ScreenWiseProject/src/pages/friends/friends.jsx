import FriendNavBar from '../../component/friendNav/friendNavBar';
import Navbar from '../../component/navBar/navBar';
import FriendCard from './friendCard';
import styles from './friends.module.css'


import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import useUserStore from '../../stores/userStore';

function FriendsAll() {

  const [friendsList, setFriendsList] = useState([]);
  const user = useUserStore((state) => state.user);

  const getFriendsList = async () => {
    try {
      const response = await Axios.get(`http://localhost:3000/api/users/getFriendsList/${user._id}`);
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
    <div>
      
      <div><Navbar /></div>  

      <div className={styles.pageContainer}>
        
        <div className={styles.friendNavContainer}>
          <FriendNavBar />
        </div>
        
        <div class={styles.friendsBlockRight}>
          <div class={styles.headingBackground}>
            <div class={styles.headingContainer}>
              <h1>All Friends - {friendsList.length}</h1>
            </div>
          </div>
          <div class={styles.bodyBackground}>
            <div class={styles.bodyContainer}>
              {friendsList.map( (friendSent) => (
                  <FriendCard username={friendSent.username} id={friendSent._id}/>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FriendsAll;