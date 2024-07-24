import React, {useEffect, useState} from 'react';
import useUserStore from '../../stores/userStore';
import { Link } from 'react-router-dom';

function MobileNav() {

  const logout = useUserStore((state) => state.logout);
  const user = useUserStore((state) => state.user);

  useEffect(() => {

  }, [user]);

  return(
    <div>
        <nav className='w-full bg-slate-200 z-10 block lg:hidden'>
          <div className='flex justify-between w-full max-w-6xl mx-auto py-4 items-center'>
            <div>
              <Link to="/dashboard" className='font-extrabold ml-8 xl:ml-0'> 
                ScreenWise
              </Link>
            </div>
            <div className='flex'>
                <ul className='flex justify-between'>
                  <li className='mx-2'>
                    <Link to="/dashboard" className='font-semibold transition ease-in-out delay-[50ms] hover:text-blue-600'>
                      Home
                    </Link>
                  </li>
                  <li className='mx-2'>
                    <Link to="/friends-all" className='font-semibold transition ease-in-out delay-[50ms] hover:text-blue-600'>
                      Friends
                    </Link>
                  </li>
                  <li className='mx-2'>
                    <Link to="/leaderboard" className='font-semibold transition ease-in-out delay-[50ms] hover:text-blue-600'>
                      Leaderboard
                    </Link>
                  </li>
                  <li className='mx-2'>
                    <Link to="/tips" className='font-semibold transition ease-in-out delay-[50ms] hover:text-blue-600'>
                      Tips Board
                    </Link>
                  </li>
                  <li className='mx-2'>
                      {user !== null && <Link to="/profile" className='font-semibold transition ease-in-out delay-[50ms] hover:text-blue-600'>@{user.username}</Link>}
                      {user == null  && <Link to="/profile" className='font-semibold transition ease-in-out delay-[50ms] hover:text-blue-600'>@username</Link>}
                  </li>
                </ul>
            </div>
            <div>
              <button onClick={logout} className='px-4 py-2 mr-8 xl:mr-0 font-semibold rounded-lg bg-slate-100 transition ease-in-out delay-[50ms] hover:bg-slate-300'>
                  Logout
              </button>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default MobileNav;