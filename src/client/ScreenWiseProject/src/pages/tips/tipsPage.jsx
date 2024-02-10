import Navbar from '../../component/navBar/navBar';
import styles from './tipsPage.module.css';

function Tips() {
  return(
    <div>
      <div><Navbar /></div>

      <div class={styles.headingContainer}>
        <h1 class={styles.h1HeadingTips}>General Tips to Reduce Screen Time!</h1>
        <p class={styles.pHeadingTips}>Make sure to spend time off your phone!</p>
      </div>

    <div class={styles.cardBackground}>
      <div class={styles.cardContainer}>
        
        <div class={styles.card}>
          <h1 class={styles.h1Card}>From...</h1>
          <div class={styles.cardContent}>
            <p class={styles.pCard}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>

        <div class={styles.card}>
          <h1 class={styles.h1Card}>From...</h1>
          <div class={styles.cardContent}>
            <p class={styles.pCard}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>

        <div class={styles.card}>
          <h1 class={styles.h1Card}>From...</h1>
          <div class={styles.cardContent}>
            <p class={styles.pCard}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>

        <div class={styles.card}>
          <h1 class={styles.h1Card}>From...</h1>
          <div class={styles.cardContent}>
            <p class={styles.pCard}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>

        <div class={styles.card}>
          <h1 class={styles.h1Card}>From...</h1>
          <div class={styles.cardContent}>
            <p class={styles.pCard}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>

        <div class={styles.card}>
          <h1 class={styles.h1Card}>From...</h1>
          <div class={styles.cardContent}>
            <p class={styles.pCard}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>

      </div>

    </div>
  )
}

export default Tips;