import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import useUserStore from '../../stores/userStore';

import styles from './userProfile.module.css';
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
        <div className={styles.formBackground}>
          <form className={styles.formContainer} action="http://localhost:5173/dashboard" >
            
            <div className={styles.formInputs}>
              <p className={styles.formInputLabel}>Username </p>
              <p className={styles.marginTop}>{username}</p>
            </div>

            <div className={styles.formInputs}>
              <p className={styles.formInputLabel}>Bio </p>
                {bio.length <= 0 && <p className={styles.marginTop}> No bio yet! </p>}
                {bio.length > 0  && <p className={styles.marginTop}> {bio} </p>}
            </div>
            
            <div className={styles.btnContainer}>
              <Link className={styles.formBTNStyle} to="/edit-profile" >Edit</Link>
              <button className={styles.formBTNStyle} type="submit" >Done</button>
            </div>
          
          </form>
        </div>
      </div>
  )
}

export default UserProfile;