import React from 'react';
import styles from './PortfolioSection.module.scss';
import Title from "../../ui/title/Title.jsx";

const PortfolioSection = () => {
    return (
        <section className={styles.portfolioSection}>
            <Title text="Portfolio"/>
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