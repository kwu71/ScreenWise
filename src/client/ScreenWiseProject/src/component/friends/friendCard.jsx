import React, {useEffect, useState} from 'react';
import Axios from 'axios';

function friendCard(props) {
  return(
    <div className='bg-slate-300 p-2 rounded'>
      <div className=''>
        <div key={props.id}>
          <p>@{props.username}</p>
        </div>
      </div>
    </div>
  )
}

export default friendCard;