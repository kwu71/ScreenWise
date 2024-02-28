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
            <div class={styles.headingContainer}>
              <h1>All Friends-4</h1>
            </div>
          </div>

          <div>

          </div>
        
        </div>

      </div>
    </div>
  )
}

export default FriendsPending;