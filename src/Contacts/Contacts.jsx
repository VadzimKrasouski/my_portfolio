import React from 'react';
import styles from './Contacts.module.css'

const Contacts = () => (
    <div className={styles.contacts}>
        <div className={styles.container}>
            <div className={styles.title}>
                <h3>Контакты</h3>
            </div>
            <div className={styles.contactForm}>
                <form action="#">
                    <div className={styles.name}>
                        <input type="text" placeholder="Name"/>
                    </div>
                    <div className={styles.email}>
                        <input type="email" placeholder="E-mail"/>
                    </div>
                    <div className={styles.message}>
                        <textarea  rows="7" placeholder="Your message"/>
                    </div>
                    <div className={styles.button}>
                        <button type="submit">Send message</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
);

export default Contacts;
