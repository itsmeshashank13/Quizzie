import React, { useState } from 'react';  
import styles from './createQuiz.module.css';

function CreateQuiz() {
    const [isVisible, setIsVisible] = useState(false);
    const [quizName, setQuizName] = useState('');
    const [quizType, setQuizType] = useState('');

    

  return (
    <div>
        <div className={styles.modalWrapper}></div>
        <div className={styles.modalContent}>
            <input type="text" placeholder='Quiz Name' />
            <span>
              <label htmlFor="quizType">Quiz Type</label>
              <input type="radio" name="buttonGroup" id="one" value="one" /><label htmlFor="one">Q & A</label>
              <input type="radio" name="buttonGroup" id="two" value="two" /><label htmlFor="two">Poll Type</label>
            </span>
        </div>
    </div>
  )
}

export default CreateQuiz;