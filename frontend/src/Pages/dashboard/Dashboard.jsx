import React from 'react';
import LeftBar from '../../Components/leftBar/LeftBar';
import styles from './dashboard.module.css';


function Dashboard() {
  return (
    <>
    <LeftBar />
    <div className={styles.main}>
      <div className={styles.head}>
        <span className={styles.wrapper}>
          <h1>12</h1>
          <p><span>Quiz </span>Created</p>
        </span>
        <span className={styles.wrapper}>
          <h1>110</h1>
          <p><span>Question</span>  Created </p>
        </span>
        <span className={styles.wrapper}>
          <h1>989</h1>
          <p><span>Total</span> Impression </p>
        </span>
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