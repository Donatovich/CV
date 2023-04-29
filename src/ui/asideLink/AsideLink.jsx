import React from 'react';
import styles from './AsideLink.module.scss'
import InlineSVG from "react-inlinesvg";
const AsideLink = ({href, src, alt}) => {
    return (
        <span>
            <a href={href}>
                <InlineSVG className={styles.svg}
                    src={src}
                    alt={alt}
                />
            </a>
        </span>
    );
};

export default AsideLink;