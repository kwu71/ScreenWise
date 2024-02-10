import Navbar from '../../component/navBar/navBar';
import styles from './leaderboard.module.css';

function Leaderboard() {
  return(
    <div>
        <div><Navbar /></div>

        <div class={styles.headerContainer}>
          <h1 class={styles.h1Header}>Screen Time Use</h1>
          <p class={styles.pHeader}>Help your friends out and remind them to put down the phone sometimes!</p>
        </div>

        <div class={styles.leaderboardTable}>
          
          <div class={styles.leaderboardHeading}>
            <div class={styles.firstSectionHeader}>
              <p class={styles.rank}>Rank</p>
              <p class={styles.username}>Username</p>
            </div>
            <div class={styles.secondSectionHeader}>
              <p class={styles.hours}>Hours</p>
            </div>
          </div>
          
          <div class={styles.leaderboardBody}>
            
            <div class={styles.leaderboardUser}>
              <div class={styles.firstSectionHeader}>
                <p class={styles.rankNumber}>1</p>
                <p class={styles.friendUser}>@Username</p>
              </div>
              <div class={styles.secondSectionHeader}>
                <p class={styles.friendHours}>12</p>
              </div>
            </div>
          
          </div>
        </div>
    </div>
  )
}

export default Leaderboard;