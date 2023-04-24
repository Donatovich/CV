import React from 'react';
import styles from './ContactSection.module.scss';

const ContactSection = () => {
    return (
        <section className={styles.contactSection}>
            <h3 className={styles.contactSection__name}>Contact me</h3>
            <div className={styles.contactSection__form}>
                <h4 className={styles.contactSection__header}>Please, don't hesitate to contact me</h4>
                <form>
                    <div className={styles.contactForm__box}>
                        <label className={styles.contactForm__input}> Your Name (required)
                            <input type="text" placeholder="Enter Your Name"/>
                        </label>
                    </div>
                    <div className={styles.contactForm__box}>
                        <label className={styles.contactForm__input}> Your Email (required)
                            <input type="email" placeholder="Enter Your Email"/>
                        </label>
                    </div>
                    <div className={styles.contactForm__box}>
                        <label className={styles.contactForm__input}> Subject
                            <input id="subject" type="text"/>
                        </label>
                    </div>
                    <div className={styles.contactForm__box}>
                        <label className={styles.contactForm__textarea}> Your message
                            <textarea></textarea>
                        </label>
                    </div>
                    <div className={styles.contactForm__box}>
                        <button onClick="validateForm()" id="contactButton">
                            SEND
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;