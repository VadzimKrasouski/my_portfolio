import React from 'react';
import styles from './Skills.module.css'
import SkillBlock from "./SkillBlock";

const Skills = () => (
    <div className={styles.skills}>
        <div className={styles.container}>
            <div className={styles.title}>
                <span>My Skills</span>
            </div>
            <div className={styles.skillBlocks}>
                <SkillBlock/>
                <SkillBlock/>
                <SkillBlock/>
            </div>
        </div>
    </div>
);

export default Skills;
