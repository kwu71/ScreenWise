import FriendNavBar from '../../component/friendNav/friendNavBar';
import Navbar from '../../component/navBar/navBar';
import styles from './friends.module.css'

function Friends() {
  return(
    <div>
      <div><Navbar /></div>  
      <div><FriendNavBar /></div>
    </div>
  )
}

export default Friends;