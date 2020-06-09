import React from 'react';
import styles from './Contact.module.scss'
import Title from "../Common/Components/title/Title";

const Contact = () => (
    <div className={styles.contact}>
        <div className={styles.container}>
            <Title text={'Contact Me'}/>
            <div className={styles.contactBlock}>
                <div className={styles.contLeft}>
                    <div className={styles.media}>
                        <div className={styles.mediaIcon}>Icon</div>
                        <div className={styles.mediaBody}>
                            <h4>Email</h4>
                            <span>vadzim.krasouski@gmail.com</span>
                        </div>
                    </div>
                    <div className={styles.media}>
                        <div className={styles.mediaIcon}>Icon</div>
                        <div className={styles.mediaBody}>
                            <h4>Phone</h4>
                            <span>+48 576 088 155</span>
                        </div>
                    </div>
                    <div className={styles.media}>
                        <div className={styles.mediaIcon}>Icon</div>
                        <div className={styles.mediaBody}>
                            <h4>Skype</h4>
                            <span>vadik_hj</span>
                        </div>
                    </div>
                </div>
                <div className={styles.contRight}>
                    <form className={styles.contactForm}>
                        <div className={styles.formName}>
                            <input type="text" placeholder="Enter your name"
                                   className={styles.formControl}/>
                        </div>
                        <div className={styles.formEmail}>
                            <input type="email" placeholder="Your email address"
                                   className={styles.formControl}/>
                        </div>
                        <div className={styles.formTitle}>
                            <input type="text" placeholder="Enter the discussion title"
                                   className={styles.formControl}/>
                        </div>
                        <div className={styles.formTextArea}>
                            <textarea placeholder='Write your message'
                                      className={styles.formControl}/>
                        </div>
                        <div className={styles.formButton}>
                            <button className={`${styles.btn} ${styles.radius_btn}`}
                                    type="submit">Send message now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
);

export default Contact