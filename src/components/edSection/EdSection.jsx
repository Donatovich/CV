import React from 'react';
import styles from './EdSection.module.scss';
import Title from "../../ui/title/Title.jsx";
import MinorTitle from "../../ui/minorTitle/MinorTitle.jsx";
import SimpleText from "../../ui/simpleText/SimpleText.jsx";
import Abbr from "../../ui/abbr/Abbr.jsx";

const EdSection = () => {
    return (
        <section className={styles.edSection}>
            <Title text="Education"/>
            <div>
                <MinorTitle text="2009-2013"/>
                <SimpleText text="Construction technician of industrial and civil engineering
                    (full-time education)"/>
                <Abbr
                    title="Educational Institution 'Minsk City College of Architecture and Civil Engineering'"
                    text="EI'MGASK'"
                />
            </div>
            <div>
                <MinorTitle text="2013-2019"/>
                <SimpleText text="Civil engineer of highways and airfields (extramural education)"/>
                <Abbr
                    title="Belarusian National Technical University"
                    text="BNTU"
                />
            </div>
            <div>
                <MinorTitle text="2023"/>
                <SimpleText text="Frontend developer"/>
                <SimpleText text="Training with a mentor"/>
            </div>
        </section>
    );
};

export default EdSection;