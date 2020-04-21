import React from 'react';
import styles from './Footer.module.css'

const Footer = () => (
    <div className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.title}>
                <h3>Vadzim</h3>
            </div>
            <div className={styles.socialLinks}>
                <div className={styles.link}>
                    <a href=""><img src="" alt="facebook"/></a>
                </div>
                <div className={styles.link}>
                    <a href=""><img src="" alt="Twitter"/></a>
                </div>
                <div className={styles.link}>
                    <a href=""><img src="" alt="GitHub"/></a>
                </div>
                <div className={styles.link}>
                    <a href=""><img src="" href="" alt="LinkedIn"/></a>
                </div>
            </div>
            <div className={styles.copyright}>
                <h3>© 2020 All Rights Reserved.</h3>
            </div>
        </div>
    </div>
);

export default Footer;
