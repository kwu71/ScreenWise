import React from 'react';

function FriendNavBar() {
  return(
    <>
        <nav className='w-full bg-slate-200 py-5'>
          <div className='mx-auto max-w-sm'>
              <ul className='flex mx-4 text-center justify-center'>
                <li>
                  <a href="https://screen-wise.vercel.app/friends-all" className='font-semibold transition ease-in-out delay-[50ms] hover:text-blue-600'>All Friends</a></li>
                <li className='mx-5'>
                  <a href="https://screen-wise.vercel.app/friends-pending" className='font-semibold transition ease-in-out delay-[50ms] hover:text-blue-600'>Pending Request</a>
                </li>
                <li>
                  <a href="https://screen-wise.vercel.app/friends-add" className='font-semibold transition ease-in-out delay-[50ms] hover:text-blue-600'>Add Friend</a>
                </li>
              </ul>
          </div>
        </nav>
    </>
  )
}

export default FriendNavBar;