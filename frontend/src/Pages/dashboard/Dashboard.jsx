import React from 'react';
import LeftBar from '../../Components/leftBar/LeftBar';
import styles from './dashboard.module.css';


function Dashboard() {
  return (
    <>
    <LeftBar />
    <div className={styles.main}>
      <div className={styles.head}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={styles.bottom}>
        <h1>Trending Quizes</h1>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    </>
  )
}

export default Dashboard;