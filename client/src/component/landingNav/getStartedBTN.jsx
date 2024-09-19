import React from 'react';

function GetStartedBTN() {
  return (
    <div>
      <button className='px-4 py-2 rounded-lg bg-slate-200 transition ease-in-out delay-[50ms] hover:bg-slate-400'>
        <a className='text-3xl' href="http://localhost:5173/login">Get Started</a>
      </button>
    </div>
  )
}

export default GetStartedBTN;