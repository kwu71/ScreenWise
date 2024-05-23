import React from 'react';
import styles from './navBar.module.css'

function Navbar() {

  const logout = async () => {
    try {
      await Axios.post(`http://localhost:3000/auth/logout`, { withCredentials: true });
    } catch (error) {
      
    }
  };


  return(
    <div>
      <div class={styles.navBackground}>
        <nav class={styles.navContainer}>
          <div><h1 class={styles.navTitle}>ScreenWise</h1></div>
          <div class={styles.navContainerMainFunctions}>
              <ul class={styles.navItems}>
                <li class={styles.navItemsLi}><a class={styles.navText} href="http://localhost:5173/dashboard">Home</a></li>
                <li class={styles.navItemsLi}><a class={styles.navText} href="http://localhost:5173/friends-all">Friends</a></li>
                <li class={styles.navItemsLi}><a class={styles.navText} href="http://localhost:5173/leaderboard">Leaderboard</a></li>
                <li class={styles.navItemsLi}><a class={styles.navText} href="http://localhost:5173/tips">Tips Board</a></li>
                <li class={styles.navItemsLi}><a class={styles.navText} href="http://localhost:5173/profile">@username</a></li>
              </ul>
            <button class={styles.navLoginBTN}><a class={styles.navLoginTextBTN} onClick={logout}>Logout</a></button>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;