import FriendNavBar from '../../component/friendNav/friendNavBar';
import Navbar from '../../component/navBar/navBar';
import styles from './friendsAdd.module.css';

function FriendsAdd() {
  return(
    <div>
      
      <div><Navbar /></div>  

      <div className={styles.pageContainer}>
        
        <div className={styles.friendNavContainer}>
          <FriendNavBar />
        </div>
        
        <div class={styles.friendsBlockRight}>
        
            <div class={styles.headingBackground}>
              <div class={styles.addFriendContainer}>
                <h1>Add a Friend!</h1>
                <p class={styles.addFriendContainerPTag}>You can add people on ScreenWise with their username!</p>
              </div>
            </div>

            <div class={styles.formContainerFriend}>
              <form >
                <input class={styles.inputContainerFriend} type="text" placeholder='@username'/>
                <button class={styles.friendBTN} >Submit</button>
              </form>
            </div>
        
        </div>

      </div>
    </div>
  )
}

export default FriendsAdd;