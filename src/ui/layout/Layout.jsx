import React from 'react';
import styles from "./Layout.module.scss"
const Layout = ({children}) => {
    return (
        <article className={styles.layout}>
            {children}
        </article>
    );
};

export default Layout;