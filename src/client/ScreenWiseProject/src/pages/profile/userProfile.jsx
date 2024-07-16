import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import useUserStore from '../../stores/userStore';

import { Link } from 'react-router-dom';

function UserProfile () {

  const user = useUserStore((state) => state.user);
  const [bio, setBio] = useState("");
  const [username, setUsername] = useState("");

  const fetchBio = async () => {
    try {
      const bioData = await Axios.get(`http://localhost:3000/api/users/getBio/${user._id}`);
      setBio(bioData.data); 
    } catch (error) {
      
    }
  }

  const fetchUsername = async () => {
    try {
      const usernameData = await Axios.get(`http://localhost:3000/api/users/getUsername/${user._id}`);
      setUsername(usernameData.data); 
      console.log(usernameData.data);
    } catch (error) {
      
    }
  }

  useEffect(() => {
    fetchBio();
    fetchUsername();
  },[user])

  return (
      <div>
        <div>
          <form action="http://localhost:5173/dashboard" >
            
            <div>
              <p>Username </p>
              <p>{username}</p>
            </div>

            <div>
              <p>Bio </p>
                {bio.length <= 0 && <p> No bio yet! </p>}
                {bio.length > 0  && <p> {bio} </p>}
            </div>
            
            <div>
              <Link to="/edit-profile" >Edit</Link>
              <button type="submit" >Done</button>
            </div>
          
          </form>
        </div>
      </div>
  )
}

export default UserProfile;