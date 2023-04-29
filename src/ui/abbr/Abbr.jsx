import React from 'react';
import styles from './Abbr.module.scss'
const Abbr = ({title, text}) => {
    return (
        <abbr className={styles.abbr} title={title}>
            {text}
        </abbr>
    );
};

export default Abbr;