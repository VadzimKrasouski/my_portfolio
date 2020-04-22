import React from 'react';
import styles from './Footer.module.css'

const Footer = () => (
    <div className={styles.footer}>
        <div className={styles.container}>
            <span className={styles.title}>Vadzim</span>
            <div className={styles.socialLinks}>
                <a className={styles.link} href="#"><img src="#" alt="facebook"/></a>
                <a className={styles.link} href="#"><img src="#" alt="Twitter"/></a>
                <a className={styles.link} href="#"><img src="#" alt="GitHub"/></a>
                <a className={styles.link} href="#"><img src="#" alt="LinkedIn"/></a>
            </div>
            <span className={styles.copyright}>© 2020 All Rights Reserved.</span>
        </div>
    </div>
);

export default Footer;
