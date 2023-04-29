import React from 'react';
import styles from "./MinorTitle.module.scss"
const MinorTitle = ({text}) => {
    return (
            <h4 className={styles.minorTitle}>
                {text}
            </h4>
    );
};

export default MinorTitle;