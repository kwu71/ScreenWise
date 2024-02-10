import React from 'react';
import styles from './navBar.module.css'

function Navbar() {
  return(
    <div>
      <div class={styles.navBackground}>
        <nav class={styles.navContainer}>
          <div><h1 class={styles.navTitle}>ScreenWise</h1></div>
          <div class={styles.navContainerMainFunctions}>
              <ul class={styles.navItems}>
                <li class={styles.navItemsLi}><a class={styles.navText} href="http://localhost:5173/dashboard">Home</a></li>
                <li class={styles.navItemsLi}><a class={styles.navText} href="http://localhost:5173/dashboard">Friends</a></li>
                <li class={styles.navItemsLi}><a class={styles.navText} href="http://localhost:5173/dashboard">Leaderboard</a></li>
                <li class={styles.navItemsLi}><a class={styles.navText} href="http://localhost:5173/tips">Tips Board</a></li>
                <li class={styles.navItemsLi}><a class={styles.navText} href="http://localhost:5173/dashboard">@username</a></li>
              </ul>
            <button class={styles.navLoginBTN}><a class={styles.navLoginTextBTN} href="http://localhost:5173">Logout</a></button>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;