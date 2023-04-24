import React from 'react';
import styles from './PortfolioSection.module.scss';

const PortfolioSection = () => {
    return (
        <section className={styles.portfolioSection}>
            <h3 className={styles.portfolioSection__name}>Portfolio</h3>
            <div className={styles.portfolioSection__picBox}>
                <div className={styles.portfolioSection__pic}>
                </div>
                <div className={styles.portfolioSection__pic}>
                </div>
                <div className={styles.portfolioSection__pic}>
                </div>
                <div className={styles.portfolioSection__pic}>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;