import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import useUserStore from '../../stores/userStore';

function EditUserProfile () {

  const user = useUserStore((state) => state.user);
  const [bio, setBio] = useState("");
  const [username, setUsername] = useState("");

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const setNewBio = async () => {
    try {
      const dataToSend = {newBio : bio}
      const bioData = await Axios.put(`http://localhost:3000/api/users/changeBio/${user._id}`, dataToSend);
    } catch (error) {
      
    }
  }

  const setNewUsername = async () => {
    try {
      const dataToSend = {newUsername : username}
      const usernameData = await Axios.put(`http://localhost:3000/api/users/changeUsername/${user._id}`, dataToSend);
    } catch (error) {
      
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setNewBio();
      setNewUsername();
      window.location.href = 'http://localhost:5173/profile';
    } catch (error) {

    }
  }

  useEffect(() => {

  },[user])




  return (
      <div>
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto h-[75vh]'>
          <form onSubmit={handleSubmit} className='w-full max-w-xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md'>
            
            <div className='mb-10'>
              <p className='font-semibold text-3xl mb-2'>Username </p>
              <input type="text" onChange={handleUsernameChange} className='rounded py-1 px-2'/>
            </div>

            <div className='mb-10'>
            <p className='font-semibold text-3xl'>Bio</p>
            <p className='text-sm mb-2'>Max 150 characters</p>
            <textarea rows="4" cols="50" maxLength="150" placeholder="Enter text here..." onChange={handleBioChange} className='rounded py-1 px-2 max-w-[225px]'></textarea>
            </div>
            
            <div>
              <button type="submit" className='px-4 py-2 font-semibold rounded-lg bg-slate-200 transition ease-in-out delay-[50ms] hover:bg-slate-300'>Save</button>
            </div>
          
          </form>
        </div>
      </div>
  )
}

export default EditUserProfile;