import React from 'react';
import LeftBar from '../../Components/leftBar/LeftBar';
import styles from './dashboard.module.css';
import {BsEye} from 'react-icons/bs';


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
      <span className={styles.mid}><h1>Trending Quizes</h1></span>
      <div className={styles.bottom}>
        <span>
          <h2>Quiz 1</h2>
          <p>667<BsEye/></p>
          <p>Created on: 11 Nov, 2023</p>
        </span>
        <span>
          <h2>Quiz 1</h2>
          <p>667<BsEye/></p>
          <p>Created on: 11 Nov, 2023</p>
        </span>
        <span>
          <h2>Quiz 1</h2>
          <p>667<BsEye/></p>
          <p>Created on: 11 Nov, 2023</p>
        </span>
        <span>
          <h2>Quiz 1</h2>
          <p>667<BsEye/></p>
          <p>Created on: 11 Nov, 2023</p>
        </span>
        <span>
          <h2>Quiz 1</h2>
          <p>667<BsEye/></p>
          <p>Created on: 11 Nov, 2023</p>
        </span>
        <span>
          <h2>Quiz 1</h2>
          <p>667<BsEye/></p>
          <p>Created on: 11 Nov, 2023</p>
        </span>
      </div>
    </div>
    </>
  )
}

export default Dashboard;