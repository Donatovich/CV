import React from 'react';
import styles from './Button.module.scss'

const Button = ({text, onClick, disabled}) => {
    return (
        <button className={styles.button} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
};

export default Button;