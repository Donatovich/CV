import React from 'react';
import styles from './ExperienceSection.module.scss';
import Title from "../../ui/title/Title.jsx";

const ExperienceSection = () => {
    return (
        <section className={styles.experienceSection}>
            <Title text="Experience"/>
            <div className={styles.experienceSection__box}>
                <h4 className={styles.experienceSection__timeframe}>2013-2018</h4>
                <p className={styles.abbrStyle}><abbr title="Public Joint Stock Company 'Minskpromstroy'">JSC
                    'MPS'</abbr></p>
                <p className={styles.simpleText}>
                    I worked in a general contractor construction company as a foreman,
                    after foreman I held the position of a leading engineer.
                </p>
            </div>
            <div className={styles.experienceSection__box}>
                <h4 className={styles.experienceSection__timeframe}>2018-2024</h4>
                <p><abbr className={styles.abbrStyle}
                         title="Foreign Limited Liability Company 'PERI-formwork and scaffolding'">FLLC
                    'PERI'</abbr></p>
                <p className={styles.simpleText}>
                    I worked in a foreign family company "PERI"
                    as a warehouse employee and warehouse manager (construction sector).
                </p>
            </div>
            <div className={styles.experienceSection__box}>
                <h4 className={styles.experienceSection__timeframe}>2023-2024</h4>
                <p className={styles.simpleText}>I studied html/css/nodeJS and prepared a portfolio</p>
            </div>
        </section>
    );
};

export default ExperienceSection;