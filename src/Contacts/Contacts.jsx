import React from 'react';
import styles from './Contacts.module.css'

const Contacts = () => (
    <div className={styles.contacts}>
        <div className={styles.container}>
            <span className={styles.title}>Контакты</span>
            <form className={styles.contactForm}>
                <input className={styles.name} type="text" placeholder="Name"/>
                <input className={styles.email} type="email" placeholder="E-mail"/>
                <textarea className={styles.message} rows="7" placeholder="Your message"/>
                <button className={styles.btnSubmit} type="submit">Send message</button>
            </form>
        </div>
    </div>
);

export default Contacts;
