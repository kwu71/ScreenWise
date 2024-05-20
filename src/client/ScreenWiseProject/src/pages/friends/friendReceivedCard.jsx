import React, {useEffect, useState} from 'react';
import Axios from 'axios';

import styles from './friendsPending.module.css'
import { TiDelete } from "react-icons/ti";
import { CiCircleCheck } from "react-icons/ci";

function friendCard(props) {

  const handleAddDelete = async() => {
    try {
      const userId = '66291b1eeeb858a857cc2749';
      const dataToSend = {friendID : props.id}
      console.log(dataToSend)
      const response = await Axios.delete(`http://localhost:3000/api/users/deleteFriendReceived/${userId}`, {
        data: dataToSend
      });
      props.onDelete();
    } catch (error) {
      
    }
  }

  const handleAdd = async() => {
    try {
      await handleAddDelete();
      const userId = '66291b1eeeb858a857cc2749';
      const dataToSend = {friendID : props.id}
      const response = await Axios.post(`http://localhost:3000/api/users/addFriendReceived/${userId}`, dataToSend);
    } catch (error) {
      
    }
  }

  return(
    <div>

      <div class={styles.card}>
        <div class={styles.friendCard} key={props.id}>
          <p class={styles.friendName}>@{props.username}</p>
          <div>
            <button class={styles.buttonDelete} onClick={handleAddDelete} > 
              <TiDelete /> 
            </button>
            <button class={`${styles.buttonDelete} ${styles.spaceLeftCheck}`} onClick={handleAdd} > 
              <CiCircleCheck />
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default friendCard;