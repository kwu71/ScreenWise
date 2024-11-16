import React, {useEffect, useState} from 'react';
import Axios from 'axios';

import { TiDelete } from "react-icons/ti";
import { CiCircleCheck } from "react-icons/ci";
import useUserStore from '../../stores/userStore';

function friendCard(props) {
  const user = useUserStore((state) => state.user);

  const handleAddDelete = async() => {
    try {
      const dataToSend = {friendID : props.id}
      console.log(dataToSend)
      const response = await Axios.delete(`https://screen-wise-ntsk.vercel.app/api/users/deleteFriendReceived/${user._id}`, {
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
      const response = await Axios.post(`https://screen-wise-ntsk.vercel.app/api/users/addFriendReceived/${user._id}`, dataToSend);
    } catch (error) {
      
    }
  }

  return(
    <div className='bg-slate-300 p-2 rounded'>
      <div className='flex flex-col items-center'>
        <div key={props.id} className='flex'>
          <p className='mr-2'>@{props.username}</p>
            <button onClick={handleAddDelete} > 
              <TiDelete className='h-7 w-7' /> 
            </button>
            <button onClick={handleAdd} > 
              <CiCircleCheck className='h-6 w-6'/>
            </button>
        </div>
      </div>
    </div>
  )
}

export default friendCard;