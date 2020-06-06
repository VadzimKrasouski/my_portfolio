import React from 'react';
import styles from './Skills.module.css'
import SkillBlock from "./SkillBlock";
import Title from "../Common/Components/title/Title";

const Skills = () => (
    <div className={styles.skills}>
        <div className={styles.container}>
            <Title text={'Skills'}/>
            <div className={styles.skillBlocks}>
                <SkillBlock/>
                <SkillBlock/>
                <SkillBlock/>
            </div>
        </div>
    </div>
);

export default Skills;
