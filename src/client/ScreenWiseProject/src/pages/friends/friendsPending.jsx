import FriendNavBar from '../../component/friendNav/friendNavBar';
import Navbar from '../../component/navBar/navBar';
import styles from './friendsPending.module.css'

function FriendsPending() {
  return(
    <div>
      
      <div><Navbar /></div>  

      <div className={styles.pageContainer}>
        
        <div className={styles.friendNavContainer}>
          <FriendNavBar />
        </div>

        <div class={styles.friendsBlockRight}>
          
          <div class={styles.headingBackground}>
            <div class={styles.receivedContainer}>
              <h1>Received Invites - 3</h1>
            </div>
          </div>
          
          <div class={styles.bodyBackground}>
            <div class={styles.bodyContainer}>
              <div class={styles.card}>
                <div class={styles.friendCard}>
                  <p class={styles.friendName}>@Blueemon</p>
                </div>
              </div>
              <div class={styles.card}>
                <div class={styles.friendCard}>
                  <p class={styles.friendName}>@Blueemon</p>
                </div>
              </div>
              <div class={styles.card}>
                <div class={styles.friendCard}>
                  <p class={styles.friendName}>@Blueemon</p>
                </div>
              </div>
            </div>
          </div>

          <div class={styles.headingBackground}>
            <div class={styles.pendingContainer}>
              <h1>Sent Invites - 3</h1>
            </div>
          </div>

          <div class={styles.bodyBackground}>
            <div class={styles.bodyContainer}>
              <div class={styles.card}>
                <div class={styles.friendCard}>
                  <p class={styles.friendName}>@Blueemon</p>
                </div>
              </div>
              <div class={styles.card}>
                <div class={styles.friendCard}>
                  <p class={styles.friendName}>@Blueemon</p>
                </div>
              </div>
              <div class={styles.card}>
                <div class={styles.friendCard}>
                  <p class={styles.friendName}>@Blueemon</p>
                </div>
              </div>
            </div>
          </div>
        
        </div>

      </div>
    </div>
  )
}

export default FriendsPending;