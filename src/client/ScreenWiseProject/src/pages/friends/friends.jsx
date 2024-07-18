import FriendNavBar from '../../component/friendNav/friendNavBar';
import Navbar from '../../component/navBar/navBar';
import FriendCard from './friendCard';

import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import useUserStore from '../../stores/userStore';

function FriendsAll() {

  const [friendsList, setFriendsList] = useState([]);
  const [rankNumber, setRankNumber] = useState(1);
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

      <div>
        
        <div>
          <FriendNavBar />
        </div>
        
        <div>
          <div>
            <div>
              <h1>All Friends - {friendsList.length}</h1>
            </div>
          </div>
          <div>
            <div>
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