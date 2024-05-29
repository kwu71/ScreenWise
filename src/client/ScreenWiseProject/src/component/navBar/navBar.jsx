import React, {useEffect, useState} from 'react';
import styles from './navBar.module.css'
import useUserStore from '../../stores/userStore';

function Navbar() {

  const logout = useUserStore((state) => state.logout);
  const user = useUserStore((state) => state.user);

  useEffect(() => {

  }, [user]);

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
                <li class={styles.navItemsLi}>
                    {user !== null && <a className={styles.navText} href="http://localhost:5173/profile">@{user.username}</a>}
                    {user == null  && <a className={styles.navText} href="http://localhost:5173/profile">@username</a>}
                  </li>
              </ul>
            <button class={styles.navLoginBTN} onClick={logout}><a class={styles.navLoginTextBTN}>Logout</a></button>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;