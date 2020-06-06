import React from 'react';
import styles from './Contact.module.css'
import Title from "../Common/Components/title/Title";

const Contact = () => (
    <div className={styles.contact}>
        <div className={styles.container}>
            <Title text={'Contact Me'}/>
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
