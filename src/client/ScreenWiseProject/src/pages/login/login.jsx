import './styles/login.css'

function login() {
  return (
    <div id="loginContainer">
      <form id="loginForm">
        
        <h2>Sign In</h2>

        <div>
          <input id="email" placeholder="JohnDoe@gmail.com" />
        </div>
        
        <div>
          <input id="password" type="password" placeholder="Password" />
        </div>
      
        <button id="loginBtn">Log In</button>
        
        <p id="needToRegister">Need an account? <a href="/register">Sign Up</a> </p>
      
      </form>
    </div>

  );
}





export default login