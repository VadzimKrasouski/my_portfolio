import React from 'react';
import styles from './Skills.module.css'
import SkillBlock from "./SkillBlock";

const Skills = () => (
    <div className={styles.skills}>
        <div className={styles.container}>
            <div className={styles.title}>
                <h3>My Skills</h3>
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
