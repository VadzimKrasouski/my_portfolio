import React from 'react';
import styles from './Freelancer.module.css'

const Freelancer = () => (
    <div className={styles.freelancer}>
        <div className={styles.container}>
            <div className={styles.title}>
                <h3>I Am Available For Freelancer</h3>
            </div>
            <div className={styles.link}>
                <button>Hire Me</button>
            </div>
        </div>
    </div>
);

export default Freelancer;
