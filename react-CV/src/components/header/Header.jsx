import React from 'react';
import styles from "./Header.module.scss"

const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <h1 className={styles.headerBlock__name}>Junior FE developer</h1>
            </div>
        </header>
    );
};

export default Header;