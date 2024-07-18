import FriendNavBar from '../../component/friendNav/friendNavBar';
import Navbar from '../../component/navBar/navBar';

import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import useUserStore from '../../stores/userStore';

function FriendsAdd() {

  const [friendUsername, setUsername] = useState("");
  const [isPending, setPending] = useState(false);
  const user = useUserStore((state) => state.user);

  const handleNumberChange = (e) => {
    setUsername(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setPending(true);
      const dataToSend = {friendID : friendUsername}
      const response = await Axios.post(`http://localhost:3000/api/users/addFriend/${user._id}`, dataToSend);
      setUsername('');
      setPending(false);
      getScreenTime();
    } catch (error) {
      setPending(false);
      setUsername('');
    }
  }

  useEffect(() => {

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
                <h1>Add a Friend!</h1>
                <p>You can add people on ScreenWise with their username!</p>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder='@username' value={friendUsername} onChange={handleNumberChange}/>
                {!isPending && <button type="submit">Submit</button>}
                {isPending && <button type="submit" disabled>Sending Request...</button>}
              </form>
            </div>
        
        </div>

      </div>
    </div>
  )
}

export default FriendsAdd;