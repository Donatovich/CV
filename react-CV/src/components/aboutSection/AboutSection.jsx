import React from 'react';
import styles from './AboutSection.module.scss';

const AboutSection = () => {
    return (
        <section className={styles.aboutSection}>
            <h3>About me</h3>
            <div className={styles.aboutSection__box}>
                <p>
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
                            <td className="left_cell">FULL NAME</td>
                            <td className="right_cell">Egor Ostrovskiy</td>
                        </tr>
                        <tr>
                            <td className="left_cell">D.O.B.</td>
                            <td className="right_cell">
                                <time>08 march 1994</time>
                            </td>
                        </tr>
                        <tr>
                            <td className="left_cell">ADDRESS</td>
                            <td className="right_cell">220047, Belarus, Minsk, Ilimskaya 17, 74</td>
                        </tr>
                        <tr>
                            <td className="left_cell">E-MAIL</td>
                            <td className="right_cell">astrouski1994@gmail.com</td>
                        </tr>
                        <tr>
                            <td className="left_cell">PHONE</td>
                            <td className="right_cell">+375-44-597-89-08</td>
                        </tr>
                    </table>
                </div>
                <div className={styles.aboutSection__list}>
                    <h4 className={styles.aboutBox__name}>Languages</h4>
                    <div className={styles.aboutBox__name}>
                        <ul className={styles.aboutList}>
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