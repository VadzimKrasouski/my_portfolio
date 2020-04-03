import React from 'react';
import styles from './Main.module.css'

const Main = () => (
    <div className={styles.main}>
        <div className={styles.container}>
            <div className={styles.greating}>
                <span>Привет!</span>
                <span>Меня зовут Вадим Красовский</span>
                <span>Я Front-end разработчик.</span>
            </div>
            <div className={styles.photo}>
                <img src="#link" alt=""/>
            </div>
        </div>
    </div>
);

export default Main;
