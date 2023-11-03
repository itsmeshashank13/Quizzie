  import React from 'react';
  import styles from './leftBar.module.css';
  

  function LeftBar() {
    return (
      <>
      <div className={styles.left}>
        <h1>Quizzie</h1>
        <span className={styles.para}>
          <button>Dashboard</button>
          <button>Analytics</button>
          <button>Create Quiz</button>
        </span>
        <span className={styles.bottom}>
          <hr />
          <h3>Logout</h3>
        </span>
      </div>
      </>
    )
  }

  export default LeftBar;