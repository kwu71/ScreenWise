import React, {useEffect, useState} from 'react';
import useUserStore from '../../stores/userStore';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";


function MobileNav() {

  const logout = useUserStore((state) => state.logout);
  const user = useUserStore((state) => state.user);
  const [toggle, setToggle] = useState(false);

  const toggleFunction = () => {
    if(toggle === false) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }

  useEffect(() => {

  }, [user]);

  return(
    <div>
        <nav className='w-full bg-slate-200 z-10 block lg:hidden'>
          <div className='flex justify-between w-full max-w-6xl mx-auto py-4 items-center'>
            <div>
              <Link to="/dashboard" className='font-extrabold ml-4 xl:ml-0'> 
                ScreenWise
              </Link>
            </div>
            {toggle === false && <FaBars className='h-6 w-6 mr-4' onClick={toggleFunction}/>}
            {toggle === true && <FaXmark className='h-6 w-6 mr-4' onClick={toggleFunction}/>}
          </div>
          {toggle == true &&             
                <ul className='flex flex-col items-center'>
                  <li className='px-4 py-3'>
                    <Link to="/dashboard" className='font-semibold transition ease-in-out delay-[50ms] hover:text-blue-600' onClick={toggleFunction}>
                      Home
                    </Link>
                  </li>
                  <li className='px-4 py-3'>
                    <Link to="/friends-all" className='font-semibold transition ease-in-out delay-[50ms] hover:text-blue-600' onClick={toggleFunction}>
                      Friends
                    </Link>
                  </li>
                  <li className='px-4 py-3'>
                    <Link to="/leaderboard" className='font-semibold transition ease-in-out delay-[50ms] hover:text-blue-600' onClick={toggleFunction}>
                      Leaderboard
                    </Link>
                  </li>
                  <li className='px-4 py-3'>
                    <Link to="/tips" className='font-semibold transition ease-in-out delay-[50ms] hover:text-blue-600' onClick={toggleFunction}>
                      Tips Board
                    </Link>
                  </li>
                  <li className='px-4 py-3'>
                      {user !== null && <Link to="/profile" className='font-semibold transition ease-in-out delay-[50ms] hover:text-blue-600'>@{user.username}</Link>}
                      {user == null  && <Link to="/profile" className='font-semibold transition ease-in-out delay-[50ms] hover:text-blue-600'>@username</Link>}
                  </li>
                  <li className='px-4 pt-3 pb-8'>
                    <Link to="/" onClick={logout} className='px-4 py-2 font-semibold rounded-lg bg-slate-100 transition ease-in-out delay-[50ms] hover:bg-slate-300'>
                      Logout
                    </Link>
                  </li>
                </ul>
            }
        </nav>
    </div>
  )
}

export default MobileNav;