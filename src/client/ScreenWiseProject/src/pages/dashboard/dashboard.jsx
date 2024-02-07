import Navbar from '../../component/navBar/navBar';
import styles from './dashboard.module.css'




function Dashboard() {


  return (
    <div>
      <div><Navbar /></div>  

      <div class={styles.chartContainer}>
        <img class={styles.chartImg} src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JhcGh8ZW58MHx8MHx8fDA%3D" />
      </div>

      <div class={styles.inputSection}>
        
        <h1 class={styles.inputTitle} >Input amount of hours on social media today</h1>

        <div class={styles.formContainer}>
          <form >
            <input class={styles.inputContainer} type="number" />
            <button class={styles.formBTN} >Submit</button>
          </form>
        </div>
      
      </div>
    
    
    
    </div>
  );
}



export default Dashboard;