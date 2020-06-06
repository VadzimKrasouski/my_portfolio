import React from 'react';
import styles from './Freelancer.module.css'
import Title from "../Common/Components/title/Title";

const Freelancer = () => (
    <div className={styles.freelancer}>
        <div className={styles.container}>
            <Title text={'Hire Me'}/>
            <p>I am currently accepting new freelance design projects.</p>
            <button className={styles.link}>Hire Me</button>
        </div>
    </div>
);

export default Freelancer;
