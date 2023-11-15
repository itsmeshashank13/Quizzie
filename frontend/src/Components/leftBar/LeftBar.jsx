  import React, { useState } from 'react';
  import styles from './leftBar.module.css';
  import CreateQuiz from '../quizModal/CreateQuiz';
  

  function LeftBar() {

    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleCreateQuizClick = ()=> {
      setIsPopupVisible(true);
    };

    return (
      <>
      <div className={styles.left}>
        <h1>Quizzie</h1>
        <span className={styles.para}>
          <button>Dashboard</button>
          <button>Analytics</button>
          <button onClick={handleCreateQuizClick}>Create Quiz</button>
        </span>
        <span className={styles.bottom}>
          <hr />
          <h3>Logout</h3>
        </span>
      </div>
      {isPopupVisible && <CreateQuiz />}
      </>
    )
  }

  export default LeftBar;