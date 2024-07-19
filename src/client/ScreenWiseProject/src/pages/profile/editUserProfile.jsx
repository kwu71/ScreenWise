import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import useUserStore from '../../stores/userStore';

function EditUserProfile () {

  const user = useUserStore((state) => state.user);
  const [bio, setBio] = useState("");
  const [username, setUsername] = useState("");

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const setNewBio = async () => {
    try {
      const dataToSend = {newBio : bio}
      const bioData = await Axios.put(`http://localhost:3000/api/users/changeBio/${user._id}`, dataToSend);
    } catch (error) {
      
    }
  }

  const setNewUsername = async () => {
    try {
      const dataToSend = {newUsername : username}
      const usernameData = await Axios.put(`http://localhost:3000/api/users/changeUsername/${user._id}`, dataToSend);
    } catch (error) {
      
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setNewBio();
      setNewUsername();
      window.location.href = 'http://localhost:5173/profile';
    } catch (error) {

    }
  }

  useEffect(() => {

  },[user])




  return (
      <div>
        <div>
          <form onSubmit={handleSubmit} >
            
            <div>
              <p>Username </p>
              <input type="text" onChange={handleUsernameChange}/>
            </div>

            <div>
            <p>Bio </p>
            <textarea rows="4" cols="50" maxLength="150" placeholder="Enter text here..." onChange={handleBioChange}></textarea>
            </div>
            
            <div>
              <button type="submit" >Save</button>
            </div>
          
          </form>
        </div>
      </div>
  )
}

export default EditUserProfile;