import React from 'react';
import styles from './friendNavBar.module.css'

function FriendNavBar() {
  return(
    <div>
      <div class={styles.navBackground}>
        <nav class={styles.navContainer}>
          <div class={styles.navContainerMainFunctions}>
              <ul class={styles.navItems}>
                <li class={styles.navItemsLi}><a class={styles.navText} href="http://localhost:5173/dashboard">All Friends</a></li>
                <li class={styles.navItemsLi}><a class={styles.navText} href="http://localhost:5173/friends">Pending Request</a></li>
                <li class={styles.navItemsLi}><a class={styles.navText} href="http://localhost:5173/leaderboard">Add Friend</a></li>
              </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default FriendNavBar;