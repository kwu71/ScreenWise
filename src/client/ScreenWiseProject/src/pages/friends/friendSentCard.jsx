import React, {useEffect, useState} from 'react';
import Axios from 'axios';

import styles from './friendsPending.module.css'
import { TiDelete } from "react-icons/ti";


function friendSentCard(props) {
  
  const handleDelete = async() => {
    try {
      const userId = '66291b16eeb858a857cc2742';
      const dataToSend = {friendID : key}
      const response = await Axios.delete(`http://localhost:3000/api/users/deleteFriendSent/${userId}`, dataToSend);
      props.onDelete();
    } catch (error) {
      
    }
  }
  
  return(
    <div>

      <div class={styles.card}>
        <div class={styles.friendCard} key={props.id}>
          <p class={styles.friendName}>@{props.username}</p>
          <div class={styles.buttonDelete} onClick={handleDelete}><TiDelete /></div>
        </div>
      </div>

    </div>
  )
}

export default friendSentCard;