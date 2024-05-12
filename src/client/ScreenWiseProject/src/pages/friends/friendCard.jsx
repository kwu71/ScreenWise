import styles from './friendsPending.module.css'


function friendCard(props) {
  return(
    <div>

      <div class={styles.card}>
        <div class={styles.friendCard} key={props.id}>
          <p class={styles.friendName}>@{props.username}</p>
        </div>
      </div>

    </div>
  )
}

export default friendCard;