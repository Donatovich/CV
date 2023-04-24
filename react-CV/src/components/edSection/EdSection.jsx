import React from 'react';
import styles from './EdSection.module.scss';

const EdSection = () => {
    return (
        <section className={styles.edSection}>
            <h3 className={styles.edSection__name}>Education</h3>
            <div>
                <h4 className={styles.edSection__timeframe}>2009-2013</h4>
                <p className={styles.simpleText}>Сonstruction technician of industrial and civil engineering
                    (full-time education)</p>
                <p><abbr className={styles.abbrStyle}
                         title="Educational Institution 'Minsk City College of Architecture and Civil Engineering'">EI'MGASK'</abbr>
                </p>
            </div>
            <div>
                <h4 className={styles.edSection__timeframe}>2013-2019</h4>
                <p className={styles.simpleText}>Сivil engineer of highways and airfields (extramural education)</p>
                <p><abbr className={styles.abbrStyle} title="Belarusian National Technical University'">BNTU</abbr>
                </p>
            </div>
            <div>
                <h4 className={styles.edSection__timeframe}>2023-</h4>
                <p className={styles.simpleText}>Frontend developer</p>
                <p className={styles.simpleText}>Training with a mentor</p>
            </div>
        </section>
    );
};

export default EdSection;