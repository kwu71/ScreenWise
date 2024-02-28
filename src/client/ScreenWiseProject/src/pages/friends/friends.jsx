import FriendNavBar from '../../component/friendNav/friendNavBar';
import Navbar from '../../component/navBar/navBar';
import styles from './friends.module.css'

function FriendsAll() {
  return(
    <div>
      
      <div><Navbar /></div>  

      <div className={styles.pageContainer}>
        
        <div className={styles.friendNavContainer}>
          <FriendNavBar />
        </div>
        
        <div class={styles.friendsBlockRight}>
          <div class={styles.headingBackground}>
            <div class={styles.headingContainer}>
              <h1>All Friends-4</h1>
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

export default FriendsAll;