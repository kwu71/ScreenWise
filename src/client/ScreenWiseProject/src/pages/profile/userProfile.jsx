import styles from './userProfile.module.css';

function UserProfile () {
  return (
      <div>
        <div class={styles.formBackground}>
          <form class={styles.formContainer}>
            
            <div class={styles.formInputs}>
              <p class={styles.formInputLabel}>Username </p>
              <input class={styles.inputContainerUser} type="text" />
            </div>

            <div class={styles.formInputs}>
            <p class={styles.formInputLabel}>Bio </p>
            <textarea class={styles.formTextArea} rows="4" cols="50" > Enter text here...</textarea>
            </div>
            
            <div>
              <button class={styles.formBTNStyle} >Submit</button>
            </div>
          
          </form>
        </div>
      </div>
  )
}

export default UserProfile;