import styles from './landingPage.module.css'

function LandingPage() {
  return (
    <div>
      <div class={styles.heroBackground}>
        <div class={styles.heroContainer}>
          <div class={styles.heroHeadingContainer}>
            <h1 class={styles.heroH1}>Imagine a community...</h1>
            <p class={styles.heroP}>Embark on a digital wellness journey with ScreenWise, an innovative app designed to transform your screen time management into a social and supportive experience. Whether you're striving for a healthier balance or simply looking for friends to help you on your journey, ScreenWise has got you covered!</p>
          </div>
        </div>
      </div>

      <div class={styles.landingSectionBackground}>
          <div class={styles.revealable}>
            <div class={`${styles.landingSection} ${styles.row}`}>
              <div class={styles.imgContainer}>
                <img class={styles.sectionImg} 
                src="https://images.unsplash.com/photo-1529519739370-53ce2aa5561a?auto=format&fit=crop&q=80&w=2970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
              <div class={styles.sectionText}>
                <h1 class={styles.sectionHeader}>Keep Track</h1>
                <p class={styles.sectionP}>        
                  ScreenWise allows you to input the amount of hours you have used social media then displays a graph for the week.
                </p>
              </div>
            </div>
          </div>
        </div>

      <div class={`${styles.landingSectionBackground} ${styles.sectionAlterClr}`}>
          <div class={styles.revealable}>
            <div class={`${styles.landingSection} ${styles.row}`}>
              <div class={styles.sectionText}>
                  <h1 class={styles.sectionHeader}>Learn ways to reduce screen time</h1>
                  <p class={styles.sectionP}>        
                    ScreenWise has a built in tips board where you can learn about ways to reduce screen time!
                  </p>
                </div>
              <div class={styles.imgContainer}>
                <img class={styles.sectionImg} 
                src="https://images.unsplash.com/photo-1529519739370-53ce2aa5561a?auto=format&fit=crop&q=80&w=2970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
            </div>
          </div>
        </div>

        <div class={styles.landingSectionBackground}>
          <div class={styles.revealable}>
            <div class={`${styles.landingSection} ${styles.row}`}>
              <div class={styles.imgContainer}>
                <img class={styles.sectionImg} 
                src="https://images.unsplash.com/photo-1529519739370-53ce2aa5561a?auto=format&fit=crop&q=80&w=2970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
              <div class={styles.sectionText}>
                <h1 class={styles.sectionHeader}>Create a community</h1>
                <p class={styles.sectionP}>        
                  Add your friends on ScreenWise and see where they are at through the day.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class={`${styles.landingSectionBackground} ${styles.sectionAlterClr}`}>
          <div class={styles.revealable}>
            <div class={`${styles.landingSection} ${styles.row}`}>
              <div class={styles.sectionText}>
                  <h1 class={styles.sectionHeader}>Keep each other accountable</h1>
                  <p class={styles.sectionP}>        
                    ScreenWise creates a leaderboard for you and your friends based on screen time. Keep each other accountable!
                  </p>
                </div>
              <div class={styles.imgContainer}>
                <img class={styles.sectionImg} 
                src="https://images.unsplash.com/photo-1529519739370-53ce2aa5561a?auto=format&fit=crop&q=80&w=2970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
            </div>
          </div>
        </div>

        <div class={styles.endingSectionBackground}>
          <div class={styles.endingSectionContainer}>
            <h1 class={styles.endingSectionH1}>Start your ScreenWise journey</h1>
          </div>
        </div>

        <div class={styles.footerBackground}>
          <div class={styles.footerElements}> 
            <h1 class={styles.footerH1}>ScreenWise</h1>
          </div>
        </div>

      </div>
      
  );
}



export default LandingPage;