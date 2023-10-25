import React, { useState } from 'react';
import styles from "./signup.module.css";

function Signup() {

  const [activeButton, setActiveButton] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);


  const handleButtonClick = (event)=> {
    const buttonName = event.target.name;
    setActiveButton(buttonName);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    setIsPasswordValid(passwordRegex.test(newPassword));
  };

  const handleConfirmPasswordChange = (event) => {
    const newConfirmPassword = event.target.value;
    setConfirmPassword(newConfirmPassword);
  };

  const handleSignup = () => {
    if (password === confirmPassword && isPasswordValid) {
      
    } else {
      alert("Passwords do not match or are invalid");
    }
  }


  return (
    <>
    <div className= {styles.mainContainer}>
        <h1 className={styles.quiz}>QUIZZIE</h1>

        <div className={styles.btn}>
          <button onclick={handleButtonClick} name="signup" className={activeButton === 'signup' ? 'btnSignup active' : 'styles.btnSignup'}>Sign Up</button>
          <button onclick={handleButtonClick} name="login" className={activeButton === 'signup' ? 'btnLogin active' : 'btnLogin'}>Log In</button>
        </div>

        <div className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="name">Email</label>
            <input type="email" name="email" id="email" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="name">Password</label>
            <input type="password" name="password" id="password" required/>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="name">Confirm Password</label>
            <input type="password" name="confirm-password" id="confirm-password" />
          </div>  
                  
        </div>
        <button className={styles.signUp}>Sign-Up</button>
    </div>
    </>
  )
}

export default Signup;