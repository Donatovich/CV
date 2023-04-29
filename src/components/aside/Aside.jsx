import React from 'react';
import styles from "./Aside.module.scss";
import avatar from "../../assets/images/avatar.jpg";
import tgIcon from "../../assets/icons/icons8-телеграм.svg";
import fbIcon from "../../assets/icons/icons8-facebook-новый.svg";
import vkIcon from "../../assets/icons/icons8-vk-в-круге.svg";
import ghIcon from "../../assets/icons/icons8-github.svg";
import Button from "../../ui/button/Button.jsx";
import AsideLink from "../../ui/asideLink/AsideLink.jsx";

const Aside = () => {
    const handleDownload = () =>{
        alert ("Warning")
    }
    return (
            <aside className={styles.aside}>
                <section className={styles.asideSection}>
                    <div className={styles.asideSection__avatar}>
                        <img className={styles.mainAvatar} src={avatar} alt="avatar" title="24e.o."/>
                    </div>
                    <h2 className={styles.asideSection__fullName}>Egor Ostrovskiy</h2>
                    <p className={styles.asideSection__text}>Frontend developer</p>
                    <div className={styles.asideSection__list}>
                        <AsideLink
                            href="https://t.me/astrouski"
                            src={tgIcon}
                            alt="Telegram"
                        />
                        <AsideLink
                            href="https://www.facebook.com/profile.php?id=100024575885419"
                            src={fbIcon}
                            alt="Facebook"
                        />
                        <AsideLink
                            href="https://vk.com/ega100500"
                            src={vkIcon}
                            alt="VK"
                        />
                        <AsideLink
                            href="https://github.com/Donatovich"
                            src={ghIcon}
                            alt="GitHub"
                        />
                    </div>
                </section>
                <div className={styles.asideButton}>
                    <Button onClick={handleDownload} disabled={true} text={"Download CV"}/>
                </div>
            </aside>
    );
};

export default Aside;