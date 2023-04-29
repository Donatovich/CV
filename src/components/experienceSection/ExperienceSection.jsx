import React from 'react';
import styles from './ExperienceSection.module.scss';
import Title from "../../ui/title/Title.jsx";
import MinorTitle from "../../ui/minorTitle/MinorTitle.jsx";
import SimpleText from "../../ui/simpleText/SimpleText.jsx";
import Abbr from "../../ui/abbr/Abbr.jsx";

const ExperienceSection = () => {
    return (
        <section className={styles.experienceSection}>
            <Title text="Experience"/>
            <div>
                <MinorTitle text="2013-2018"/>
                <Abbr
                    title="Public Joint Stock Company 'Minskpromstroy'"
                    text="JSC 'MPS'"
                />
                <SimpleText
                    text='I worked in a general contractor construction company as a foreman,
                    after foreman I held the position of a leading engineer.'
                />
            </div>
            <div>
                <MinorTitle text="2018-2024"/>
                <Abbr
                    title="Foreign Limited Liability Company 'PERI-formwork and scaffolding'"
                    text="FLLC 'PERI'"
                />
                <SimpleText
                    text='I worked in a foreign family company "PERI"
                    as a warehouse employee and warehouse manager (construction sector).'
                />
            </div>
            <div>
                <MinorTitle text="2023-2014"/>
                <SimpleText text="I'm learning html/css/nodeJS and preparing a portfolio"/>
            </div>
        </section>
    );
};

export default ExperienceSection;