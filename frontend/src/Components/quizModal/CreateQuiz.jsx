import React, {useState} from 'react';  
import styles from './CreateQuiz.module.css';

function CreateQuiz() {
    const [isVisible, setIsVisible] = useState(false);
    const [quizName, setQuizName] = useState('');
    const [quizType, setQuizType] = useState('');

    


  return (
    <div>
        <div className={styles.modalContent}>
            <input type="text" placeholder='Quiz Name' />
        </div>
    </div>
  )
}

export default CreateQuiz