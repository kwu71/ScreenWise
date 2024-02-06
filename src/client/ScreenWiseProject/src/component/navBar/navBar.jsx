import React from 'react';
import styles from './navBar.module.css'

function Navbar() {
  return(
    <div>
      <div class={styles.navBackground}>
        <nav class={styles.navContainer}>
          <div><h1 class={styles.navTitle}>ScreenWise</h1></div>
          <div>
              <ul>
                <li><a class={styles.navText} href="http://localhost:5173/login">Login</a></li>
                <li><a class={styles.navText} href="http://localhost:5173/login">Login</a></li>
                <li><a class={styles.navText} href="http://localhost:5173/login">Login</a></li>
                <li><a class={styles.navText} href="http://localhost:5173/login">Login</a></li>
              </ul>
            <button class={styles.navLoginBTN}><a class={styles.navLoginTextBTN} href="http://localhost:5173/login">Login</a></button>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;