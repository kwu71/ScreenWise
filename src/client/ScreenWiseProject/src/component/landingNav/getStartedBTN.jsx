import React from 'react';
import styles from './getStartedBTN.module.css'


function GetStartedBTN() {
  return (
    <div>
      <button class={styles.getStartedBTN}><a class={styles.getStartedTextBTN} href="http://localhost:5173/login">Get Started</a></button>
    </div>
  )
}

export default GetStartedBTN;