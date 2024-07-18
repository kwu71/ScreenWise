import React from 'react';

function FriendNavBar() {
  return(
    <div>
      <div>
        <nav>
          <div>
              <ul>
                <li><a href="http://localhost:5173/friends-all">All Friends</a></li>
                <li><a href="http://localhost:5173/friends-pending">Pending Request</a></li>
                <li><a href="http://localhost:5173/friends-add">Add Friend</a></li>
              </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default FriendNavBar;