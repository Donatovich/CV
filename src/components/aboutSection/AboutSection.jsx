import React from 'react';
import styles from './AboutSection.module.scss';
import Title from "../../ui/title/Title.jsx";
import MinorTitle from "../../ui/minorTitle/MinorTitle.jsx";

const AboutSection = () => {
    return (
        <section className={styles.aboutSectionWrapper}>
            <Title text="About me"/>
            <div className={styles.aboutSection__box}>
                <p className={styles.helloText}>
                    Hello! I'm Egor Ostrovskiy. This is my first CV. I'm a junior front end developer.
                    I have no practical skills in real work, but my experience include ...
                    I studied and worked as an engineer in the construction industry.
                </p>
            </div>
            <div className={styles.aboutSection__inform}>
                <div className={styles.aboutSection__box}>
                    <MinorTitle text="Personal information"/>
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
                    <MinorTitle text="Languages"/>
                    <div className={styles.aboutBox__table}>
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