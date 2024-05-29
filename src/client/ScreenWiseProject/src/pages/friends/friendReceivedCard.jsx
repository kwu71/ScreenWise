import React, {useEffect, useState} from 'react';
import Axios from 'axios';

import styles from './friendsPending.module.css'
import { TiDelete } from "react-icons/ti";
import { CiCircleCheck } from "react-icons/ci";
import useUserStore from '../../stores/userStore';

function friendCard(props) {
  const user = useUserStore((state) => state.user);

  const handleAddDelete = async() => {
    try {
      const dataToSend = {friendID : props.id}
      console.log(dataToSend)
      const response = await Axios.delete(`http://localhost:3000/api/users/deleteFriendReceived/${user._id}`, {
        data: dataToSend
      });
      props.onDelete();
    } catch (error) {
      
    }
  }

  useEffect(() => {

  },[user])

  const handleAdd = async() => {
    try {
      await handleAddDelete();
      const dataToSend = {friendID : props.id}
      const response = await Axios.post(`http://localhost:3000/api/users/addFriendReceived/${user._id}`, dataToSend);
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