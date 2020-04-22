import React from 'react';
import styles from './Freelancer.module.css'

const Freelancer = () => (
    <div className={styles.freelancer}>
        <div className={styles.container}>
            <span>I Am Available For Freelancer</span>
            <button className={styles.link}>Hire Me</button>
        </div>
    </div>
);

export default Freelancer;
