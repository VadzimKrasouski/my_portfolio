import React from 'react';
import styles from './Skills.module.css'
import SkillBlock from "./SkillBlock";

const Skills = () => (
    <div className={styles.skills}>
        <div className={styles.container}>
            <span className={styles.title}>My Skills</span>
            <div className={styles.skillBlocks}>
                <SkillBlock/>
                <SkillBlock/>
                <SkillBlock/>
            </div>
        </div>
    </div>
);

export default Skills;
