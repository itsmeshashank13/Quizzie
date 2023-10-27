import React from 'react';
import styles from './leftBar.module.css';

function LeftBar() {
  return (
    <>
    <div className={styles.left}>
      <h1>Quizzie</h1>
      <span>
        <p>Dashboard</p>
        <p>Analytics</p>
        <p>Create Quiz</p>
      </span>
      <span>
        <hr />
        <h3>Logout</h3>
      </span>
    </div>
    </>
  )
}

export default LeftBar;