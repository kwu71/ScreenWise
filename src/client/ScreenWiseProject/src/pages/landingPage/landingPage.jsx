import GetStartedBTN from '../../component/landingNav/getStartedBTN';

function LandingPage() {
  return (
    
    <div>

      <div>
        <nav>
          <h1>ScreenWise</h1>
          <button><a href="http://localhost:5173/login">Login</a></button>
        </nav>
      </div>


      <div>
        <div>
          <div>
            <h1>Imagine a community...</h1>
            <p>Embark on a digital wellness journey with ScreenWise, an innovative app designed to transform your screen time management into a social and supportive experience. Whether you're striving for a healthier balance or simply looking for friends to help you on your journey, ScreenWise has got you covered!</p>
            <div><GetStartedBTN /></div>
          </div>
        </div>
      </div>

      <div>
          
          <div>
            <div>
              <div>
                <img 
                src="https://images.unsplash.com/photo-1529519739370-53ce2aa5561a?auto=format&fit=crop&q=80&w=2970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
              <div>
                <h1>Keep Track</h1>
                <p>        
                  ScreenWise allows you to input the amount of hours you have used social media then displays a graph for the week.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <h1>Start your ScreenWise journey</h1>
            <div><GetStartedBTN /></div>
          </div>
        </div>

        <div>
          <div> 
            <h1>ScreenWise</h1>
          </div>
        </div>

      </div>
      
  );
}



export default LandingPage;