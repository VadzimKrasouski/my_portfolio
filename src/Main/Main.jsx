import React from 'react';
import styles from './Main.module.css'
import hero from './hero.jpg'

const Main = () => (
    <div className={styles.main}>
        <div className={styles.container}>
            <div className={styles.greeting}>
                <span>Привет!</span>
                <span>Меня зовут Вадим Красовский</span>
                <span>Я Front-end разработчик.</span>
            </div>
            <div className={styles.photo}>
                <img src={hero} alt="hero"/>
            </div>
        </div>
    </div>
);

export default Main;
