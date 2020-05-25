import React from 'react';
import styles from './Contact.module.css'

const Contact = () => (
    <div className={styles.contact}>
        <div className={styles.container}>
            <h2 className={styles.title}>Контакты</h2>
            <form className={styles.contactForm}>
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="E-mail"/>
                <textarea rows="7" placeholder="Your message"/>
                <button className={styles.btnSubmit} type="submit">Send message</button>
            </form>
        </div>
    </div>
);

export default Contact;
