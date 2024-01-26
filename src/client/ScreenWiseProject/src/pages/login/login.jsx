
import './styles/login.css'

function login() {
  return (
    <section>
      <div className='loginContainer'>
        <div className='loginHeader'>
          <h1>Welcome Back!</h1>
          <p>Glad to see you again</p>
        </div>
          <button className='loginBtn'><a className='loginText' href="http://localhost:3000/auth/google">Login With Google</a></button>
      </div>
    </section>
  );
}

export default login