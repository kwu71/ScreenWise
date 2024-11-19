function login() {
  return (
    <div>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen'>
        <div className='w-full max-w-xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md'>
          <div className='text-center'>
            <div>
              <h1 className='font-extrabold text-4xl'>Welcome Back!</h1>
              <p className='text-md'>Glad to see you again</p>
            </div>
            <button className='px-4 py-2 mt-8 rounded-lg bg-slate-200 transition ease-in-out delay-[50ms] hover:bg-slate-300'>
              <a href="https://screenwise-backend-1648094cfb48.herokuapp.com/auth/google" className='font-semibold'>
                Login With Google
              </a>
            </button>
          </div>
        </div> 
      </div> 
    </div>
  );
}

export default login