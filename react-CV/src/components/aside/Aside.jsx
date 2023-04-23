import React from 'react';
import styles from "Aside.module.scss";
import avatar from "../../assets/images/avatar.jpg";
import tgIcon from "../../assets/icons/tg.png";
import fbIcon from "../../assets/icons/fb.png";
import vkIcon from "../../assets/icons/vk1.png";
import ghIcon from "../../assets/icons/gh1.png";
const Aside = () => {
    return (
            <aside className={styles.aside}>
                <section className={styles.asideSection}>
                    <div className={styles.asideSectionAvatar}>
                        <img className={styles.mainAvatar} src={avatar} alt="avatar" title="24e.o."/>
                    </div>
                    <h2 className={styles.asideSectionFullname}>Egor Ostrovskiy</h2>
                    <p className={styles.asideSectionText}>Frontend developer</p>
                    <div className="aside-section__list">
                        <p className="aside-section__link">

                            <a href="https://t.me/astrouski"><img src={tgIcon} width="35" height="35"
                                                                  alt=""/></a>
                        </p>
                        <p className="aside-section__link">
                            <a href="https://www.facebook.com/profile.php?id=100024575885419"><img
                                src={fbIcon} width="40" height="40" alt=""/></a>
                        </p>
                        <p className="aside-section__link">
                            <a href="https://vk.com/ega100500"><img src={vkIcon} width="40"
                                                                    height="40" alt=""/></a>
                        </p>
                        <p className="aside-section__link">
                            <a href="https://github.com/Donatovich"><img src={ghIcon} width="35"
                                                                         height="35" alt=""/></a>
                        </p>
                    </div>
                </section>
                <div className="aside-button">
                    <button className="aside-button__download">Download this CV</button>
                </div>
            </aside>
    );
};

export default Aside;