import React from 'react';
import styles from './AboutSection.module.scss';

const AboutSection = () => {
    return (
        <section className={styles.aboutSectionWrapper}>
            <h3 className={styles.titleText}>About me</h3>
            <div className={styles.aboutSection__box}>
                <p className={styles.simpleText}>
                    Hello! I'm Egor Ostrovskiy. This is my first CV. I'm a junior front end developer.
                    I have no practical skills in real work, but my experience include ...
                    I studied and worked as an engineer in the construction industry.
                </p>
            </div>
            <div className={styles.aboutSection__inform}>
                <div className={styles.aboutSection__box}>
                    <h4 className={styles.aboutBox__name}>Personal information</h4>
                    <table className={styles.aboutBox__table}>
                        <tr>
                            <td>FULL NAME</td>
                            <td>Egor Ostrovskiy</td>
                        </tr>
                        <tr>
                            <td>D.O.B.</td>
                            <td> <time>08 march 1994</time> </td>
                        </tr>
                        <tr>
                            <td>ADDRESS</td>
                            <td>220047, Belarus, Minsk, Ilimskaya 17, 74</td>
                        </tr>
                        <tr>
                            <td>E-MAIL</td>
                            <td>astrouski1994@gmail.com</td>
                        </tr>
                        <tr>
                            <td>PHONE</td>
                            <td>+375-44-597-89-08</td>
                        </tr>
                    </table>
                </div>
                <div className={styles.aboutSection__list}>
                    <h4 className={styles.aboutBox__name}>Languages</h4>
                    <div className={styles.aboutBox__name}>
                        <ul>
                            <li>English (B1/B2)</li>
                            <li>Russian (native)</li>
                            <li>Belorussian (native)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;