import React from 'react';
import styles from './Footer.module.css'

const Footer = () => (
    <div className={styles.footer}>
        <div className={styles.container}>
            <h2 className={styles.title}>Vadzim</h2>
            <div className={styles.socialLinks}>
                <a className={styles.link} href="#"><img src="#" alt="facebook"/></a>
                <a className={styles.link} href="#"><img src="#" alt="Twitter"/></a>
                <a className={styles.link} href="#"><img src="#" alt="GitHub"/></a>
                <a className={styles.link} href="#"><img src="#" alt="LinkedIn"/></a>
            </div>
            <h4 className={styles.copyright}>Copyright © 2020 All Rights Reserved</h4>
        </div>
    </div>
);

export default Footer;
