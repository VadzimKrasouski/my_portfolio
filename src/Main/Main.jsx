import React from 'react';
import styles from './Main.module.css'
import hero from './hero2.jpg'

const Main = () => (
    <div className={styles.main}>
        <div className={styles.container}>
            <div className={styles.greeting}>
                <h3>Hi There! I am</h3>
                <h2>Vadzim Krasouski</h2>
                <h1>I'm a Front-End Developer.</h1>
            </div>
            <div className={styles.photo}>
                <img src={hero} alt="hero"/>
            </div>
        </div>
    </div>
);

export default Main;
