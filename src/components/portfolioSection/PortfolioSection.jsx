import React from 'react';
import styles from './PortfolioSection.module.scss';

const PortfolioSection = () => {
    return (
        <section className={styles.portfolioSection}>
            <h3 className={styles.titleText}>Portfolio</h3>
            <div className={styles.itemBox}>
                <div className={styles.itemBox__pic}/>
                <div className={styles.itemBox__pic}/>
                <div className={styles.itemBox__pic}/>
                <div className={styles.itemBox__pic}/>
            </div>
        </section>
    );
};

export default PortfolioSection;