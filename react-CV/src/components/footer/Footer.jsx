import React from 'react';
import styles from "./Footer.module.scss"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.footerText}>All rights reserved 2023</p>
        </footer>
    );
};

export default Footer;