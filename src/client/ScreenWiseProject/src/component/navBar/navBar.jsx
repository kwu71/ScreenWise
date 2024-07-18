import React, {useEffect, useState} from 'react';
import useUserStore from '../../stores/userStore';

function Navbar() {

  const logout = useUserStore((state) => state.logout);
  const user = useUserStore((state) => state.user);

  useEffect(() => {

  }, [user]);

  return(
    <div>
        <nav className='w-full bg-slate-200 z-10'>
          <div className='flex justify-between w-full max-w-6xl mx-auto py-4 items-center'>
            <div>
              <a href="http://localhost:5173/dashboard" className='font-extrabold ml-8 xl:ml-0'>
                ScreenWise
              </a>
            </div>
            <div className='flex'>
                <ul className='flex justify-between'>
                  <li className='mx-2'>
                    <a href="http://localhost:5173/dashboard" className='font-semibold transition ease-in-out delay-[50ms] hover:text-blue-600'>
                      Home
                    </a>
                  </li>
                  <li className='mx-2'>
                    <a href="http://localhost:5173/friends-all" className='font-semibold transition ease-in-out delay-[50ms] hover:text-blue-600'>
                      Friends
                    </a>
                  </li>
                  <li className='mx-2'>
                    <a href="http://localhost:5173/leaderboard" className='font-semibold transition ease-in-out delay-[50ms] hover:text-blue-600'>
                      Leaderboard
                    </a>
                  </li>
                  <li className='mx-2'>
                    <a href="http://localhost:5173/tips" className='font-semibold transition ease-in-out delay-[50ms] hover:text-blue-600'>
                      Tips Board
                    </a>
                  </li>
                  <li className='mx-2'>
                      {user !== null && <a href="http://localhost:5173/profile" className='font-semibold transition ease-in-out delay-[50ms] hover:text-blue-600'>@{user.username}</a>}
                      {user == null  && <a href="http://localhost:5173/profile" className='font-semibold transition ease-in-out delay-[50ms] hover:text-blue-600'>@username</a>}
                  </li>
                </ul>
            </div>
            <div>
              <button onClick={logout} className='px-4 py-2 mr-8 xl:mr-0 rounded-lg bg-slate-100 transition ease-in-out delay-[50ms] hover:bg-slate-300'>
                <a className='font-semibold'>
                  Logout
                </a>
              </button>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar;