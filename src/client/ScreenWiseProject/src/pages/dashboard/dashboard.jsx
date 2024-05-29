import Navbar from '../../component/navBar/navBar';
import styles from './dashboard.module.css'

import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import useUserStore from '../../stores/userStore';


function Dashboard() {

  const [numberOfHours, setNumberOfHours] = useState(0);
  const [totalScreenTime, setScreenTime] = useState(0);
  const [isPending, setPending] = useState(false);
  const [isPendingTime, setPendingTime] = useState(false);
  const user = useUserStore((state) => state.user);

  const handleNumberChange = (e) => {
    setNumberOfHours(e.target.value);
  };

  const getScreenTime = async () => {
    try {
      setPendingTime(true);
      const response = await Axios.get(`http://localhost:3000/api/users/getTotalTime/${user._id}`);
      setScreenTime(response.data);
      setPendingTime(false);
    } catch (error) {
      
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setPending(true);
      const dataToSend = {hours : numberOfHours}
      const response = await Axios.post(`http://localhost:3000/api/users/addHours/${user._id}`, dataToSend);
      setNumberOfHours(0);
      setPending(false);
      getScreenTime();
    } catch (error) {
      setPending(false);
    }
  }

  useEffect(() => {
    if(user !== null){
      getScreenTime();
    }
  }, [user])

  return (
    <div>
      <div><Navbar /></div>  

      <div className={styles.chartContainer}>
        {!isPendingTime && <h1>Hours: {totalScreenTime}</h1>}
        {isPendingTime && <h1>Fetching Time {totalScreenTime}</h1>}
      </div>

      <div className={styles.inputSection}>
        
        <h1 className={styles.inputTitle} >Input amount of hours on social media today</h1>

        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <input className={styles.inputContainer} type="number" value={numberOfHours} onChange={handleNumberChange}/>
            {!isPending && <button className={styles.formBTN} type="submit">Submit</button>}
            {isPending && <button className={styles.formBTN} type="submit" disabled>Sending Hours...</button>}
          </form>
        </div>
      
      </div>
    
    
    
    </div>
  );
}

export default Dashboard;