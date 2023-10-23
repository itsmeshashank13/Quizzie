import React from 'react';
import styles from "./signup.module.css";

function Signup() {
  return (
    <>
    <div className= {styles.mainContainer}>
        <h1 className={styles.quiz}>QUIZZIE</h1>
        <div className={styles.btn}>
          <button className={styles.btnSignup}>Sign Up</button>
          <button className={styles.btnLogin}>Log In</button>
        </div>
        <div className={styles.form}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />

          <label htmlFor="name">Email</label>
          <input type="email" name="email" id="email" />

          <label htmlFor="name">Password</label>
          <input type="password" name="password" id="password" />

          <label htmlFor="name">Confirm Password</label>
          <input type="password" name="confirm-password" id="confirm-password" />
        </div>
        <button className={styles.signUp}>Sign-Up</button>
    </div>
    </>
  )
}

export default Signup;