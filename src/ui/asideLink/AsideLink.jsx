import React from 'react';
import styles from './AsideLink.module.scss'
const AsideLink = ({href, src, width, height, alt}) => {
    return (
        <span className={styles.asideSection__link}>
            <a href={href}>
                <img className={styles.img}
                    src={src}
                    width={width}
                    height={height}
                    alt={alt}
                />
            </a>
        </span>
    );
};

export default AsideLink;