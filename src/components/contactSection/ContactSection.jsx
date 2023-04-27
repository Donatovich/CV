import React from 'react';
import styles from './ContactSection.module.scss';
import Button from "../../ui/button/Button.jsx";
import Input from "../../ui/input/Input.jsx";
import TextArea from "../../ui/textArea/TextArea.jsx";
import Title from "../../ui/title/Title.jsx";

const ContactSection = () => {
    return (
        <section className={styles.contactWrapper}>
            <Title text="Contact form"/>
            <div className={styles.contactSection__form}>
                <h4 className={styles.contactSection__header}>Please, don't hesitate to contact me</h4>
                <form className={styles.baseForm}>
                    <Input label="Your Name (required)" type="text" placeholder="Enter Your Name"/>
                    <Input label="Your Email (required)" type="email" placeholder="Enter Your E-mail"/>
                    <Input label="Subject" type="text" id="subject"/>
                    <TextArea label="Your message" placeholder="Enter Your Message"/>
                    <Button text="Send" disabled={true}/>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;