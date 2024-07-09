import styles from './userProfile.module.css';

function EditUserProfile () {
  return (
      <div>
        <div class={styles.formBackground}>
          <form class={styles.formContainer} action="http://localhost:5173/dashboard" >
            
            <div class={styles.formInputs}>
              <p class={styles.formInputLabel}>Username </p>
              <input class={styles.inputContainerUser} type="text" />
            </div>

            <div class={styles.formInputs}>
            <p class={styles.formInputLabel}>Bio </p>
            <textarea class={styles.formTextArea} rows="4" cols="50" placeholder="Enter text here..." ></textarea>
            </div>
            
            <div className={styles.flexContainer}>
              <button class={styles.formBTNStyle} type="submit" >Save</button>
            </div>
          
          </form>
        </div>
      </div>
  )
}

export default EditUserProfile;