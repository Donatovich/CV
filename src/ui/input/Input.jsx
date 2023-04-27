import React from 'react';
import styles from "./Input.module.scss";

const Input = ({label, placeholder, type, id}) => {
    return (
        <div className={styles.container}>
             <label className={styles.label}>
                 {label}
                 <input className={styles.input} type={type} placeholder={placeholder} id={id}/>
             </label>
        </div>
    );
};

export default Input;