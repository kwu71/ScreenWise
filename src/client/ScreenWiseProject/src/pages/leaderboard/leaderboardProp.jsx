import styles from './leaderboardProp.module.css'

function leaderboardProp (props) {

  return (
    <div>
      <div class={styles.leaderboardUser}>
        <div class={styles.firstSectionHeader}>
          <p class={styles.rankNumber}>{props.rank}</p>
          <p class={styles.friendUser}>@{props.username}</p>
        </div>
        <div class={styles.secondSectionHeader}>
          <p class={styles.friendHours}>{props.hour}</p>
        </div>
      </div>
    </div>
  )

}

export default leaderboardProp;