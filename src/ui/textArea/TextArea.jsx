import React from 'react';
import styles from "./TextArea.module.scss";

const TextArea = ({label, placeholder, value, onChange}) => {
    return (
        <div className={styles.container}>
            <label className={styles.label}>
                {label}
                <textarea className={styles.textArea} placeholder={placeholder} value={value} onChange={onChange}/>
            </label>
        </div>
    );
};

export default TextArea;