import './styles/register.css'

function register() {
  return (
    <div id="loginContainer">
      <form id="loginForm">
        
        <h2>Register</h2>

        <div>
          <input id="email" placeholder="JohnDoe@gmail.com" />
        </div>
        
        <div>
          <input id="password" type="password" placeholder="Password" />
        </div>
        
        <div id="formBtns">
          <button id="doneRegisterBtn"><a href="/login">Register</a></button>
        </div>
      
      </form>
    </div>

  );
}


export default register