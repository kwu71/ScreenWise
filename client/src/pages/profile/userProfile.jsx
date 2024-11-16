import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import useUserStore from '../../stores/userStore';

import { Link } from 'react-router-dom';

function UserProfile () {

  const user = useUserStore((state) => state.user);
  const [bio, setBio] = useState("");
  const [username, setUsername] = useState("");

  const fetchBio = async () => {
    try {
      const bioData = await Axios.get(`https://screen-wise-ntsk.vercel.app/api/users/getBio/${user._id}`);
      setBio(bioData.data); 
    } catch (error) {
      
    }
  }

  const fetchUsername = async () => {
    try {
      const usernameData = await Axios.get(`https://screen-wise-ntsk.vercel.app/api/users/getUsername/${user._id}`);
      setUsername(usernameData.data); 
      console.log(usernameData.data);
    } catch (error) {
      
    }
  }

  useEffect(() => {
    fetchBio();
    fetchUsername();
  },[user])

  return (
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto h-[75vh]'>
        <div className='w-full max-w-xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md'>
            
            <div className='mb-10'>
              <p className='font-semibold text-3xl'>Username </p>
              <p>{username}</p>
            </div>

            <div className='mb-10'>
              <p className='font-semibold text-3xl'>Bio </p>
                {bio.length <= 0 && <p> No bio yet! </p>}
                {bio.length > 0  &&             
                  <div className='overflow-y-auto max-h-[200px]'>
                    <p>{bio}</p>
                  </div>
                }
            </div>
            
            <div>
              <Link to="/edit-profile" className='px-4 py-2 mr-10 font-semibold rounded-lg bg-slate-200 transition ease-in-out delay-[50ms] hover:bg-slate-300'>Edit</Link>
              <Link to="/dashboard" className='px-4 py-2 font-semibold rounded-lg bg-slate-200 transition ease-in-out delay-[50ms] hover:bg-slate-300'>Done</Link>
            </div>
          
        </div>
      </div>
  )
}

export default UserProfile;