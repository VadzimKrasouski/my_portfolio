import React from 'react';
import styles from './NavMenu.module.css'

const NavMenu = () => (
    <div className={styles.navMenu}>
        <a href="#" className={styles.link}>Home</a>
        <a href="#" className={styles.link}>Skills</a>
        <a href="#" className={styles.link}>Works</a>
        <a href="#" className={styles.link}>Contact</a>
    </div>
);

export default NavMenu;
