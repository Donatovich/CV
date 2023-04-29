import React from 'react';
import styles from "./Wrapper.module.scss"
const Wrapper = ({children}) => {
    return (
        <section className={styles.section}>
            {children}
        </section>
    );
};

export default Wrapper;