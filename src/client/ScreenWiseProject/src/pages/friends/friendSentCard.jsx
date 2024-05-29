import React, {useEffect} from 'react';
import Axios from 'axios';

import styles from './friendsPending.module.css'
import { TiDelete } from "react-icons/ti";
import useUserStore from '../../stores/userStore';


function friendSentCard(props) {
  const user = useUserStore((state) => state.user);
  
  const handleDelete = async() => {
    try {
      const dataToSend = {friendID : props.id}
      console.log(dataToSend);
      const response = await Axios.delete(`http://localhost:3000/api/users/deleteFriendSent/${user._id}`, {
        data: dataToSend
      });
      props.onDelete();
    } catch (error) {
      
    }
  }

  useEffect(() => {

  },[user])
  
  return(
    <div>

      <div class={styles.card}>
        <div class={styles.friendCard} key={props.id}>
          <p class={styles.friendName}>@{props.username}</p>
          <button class={styles.buttonDelete} onClick={handleDelete} > 
            <TiDelete /> 
          </button>
        </div>
      </div>

    </div>
  )
}

export default friendSentCard;