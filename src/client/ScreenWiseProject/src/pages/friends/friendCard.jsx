import React, {useEffect, useState} from 'react';
import Axios from 'axios';

function friendCard(props) {
  return(
    <div>

      <div>
        <div key={props.id}>
          <p>@{props.username}</p>
        </div>
      </div>

    </div>
  )
}

export default friendCard;