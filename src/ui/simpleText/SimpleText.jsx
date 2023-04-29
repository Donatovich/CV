import React from 'react';
import styles from "./SimpleText.module.scss"
const SimpleText = ({text}) => {
    return (
        <p className={styles.simpleText}>
            {text}
        </p>
    );
};

export default SimpleText;