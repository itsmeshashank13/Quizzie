import React from 'react';
import styles from "./Signup.module.css";

function Signup() {
  return (
    <>
    <div className= {styles.mainContainer}>
        <h1 className={styles.quiz}>QUIZZIE</h1>
        <div className={styles.btn}>
            <button>Sign Up</button>
            <button>Log In</button>
        </div>
        <form action="Submit">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />

            <label htmlFor="name">Email</label>
            <input type="email" name="email" id="email" />

            <label htmlFor="name">Password</label>
            <input type="password" name="password" id="password" />

            <label htmlFor="name">Confirm Password</label>
            <input type="password" name="confirm-password" id="confirm-password" />

            <input type="submit" name="" id="" />
        </form>
    </div>
    </>
  )
}

export default Signup;