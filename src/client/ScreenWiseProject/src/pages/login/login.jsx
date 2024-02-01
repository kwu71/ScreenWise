
import styles from './login.module.css'

function login() {
  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <div className={styles.loginHeader}>
          <h1>Welcome Back!</h1>
          <p>Glad to see you again</p>
        </div>
          <button className={styles.loginBtn}><a className={styles.loginText} href="http://localhost:3000/auth/google">Login With Google</a></button>
      </div>
    </div>
  );
}

export default login