import React, {useEffect} from 'react';
import Axios from 'axios';

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

      <div>
        <div key={props.id}>
          <p>@{props.username}</p>
          <button onClick={handleDelete} > 
            <TiDelete /> 
          </button>
        </div>
      </div>

    </div>
  )
}

export default friendSentCard;